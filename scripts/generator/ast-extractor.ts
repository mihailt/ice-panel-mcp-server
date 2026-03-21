import { Type } from 'ts-morph';

export interface EndpointDescriptor {
    name: string;
    namespace: string[];
    paramType?: Type;
    returnType?: Type;
}

/**
 * Unwrap HttpResponsePromise<T> or Promise<T> to get the inner T type.
 * Falls back to the raw type if no type arguments found.
 */
function unwrapReturnType(type: Type): Type | undefined {
    // HttpResponsePromise<T> extends Promise<T> — get T from type arguments
    const typeArgs = type.getTypeArguments();
    if (typeArgs.length > 0) {
        return typeArgs[0];
    }
    // If it's an alias like Promise<T>, try getting the aliased type args
    const aliasTypeArgs = type.getAliasTypeArguments();
    if (aliasTypeArgs.length > 0) {
        return aliasTypeArgs[0];
    }
    return undefined;
}

export function extractEndpoints(type: Type, currentNamespace: string[]): EndpointDescriptor[] {
    const endpoints: EndpointDescriptor[] = [];

    type.getProperties().forEach(prop => {
        const name = prop.getName();
        if (name.startsWith('_')) return; // Skip private/internal properties
        
        const propDecl = prop.getValueDeclaration();
        if (!propDecl) return;
        
        const propType = propDecl.getType();
        const callSigs = propType.getCallSignatures();
        
        if (callSigs.length > 0) {
            // It's a callable method
            const params = callSigs[0].getParameters();
            let paramType: Type | undefined;
            if (params.length > 0) {
                paramType = params[0].getValueDeclaration()?.getType();
            }
            // Extract return type, unwrapping HttpResponsePromise<T>
            const rawReturnType = callSigs[0].getReturnType();
            const returnType = unwrapReturnType(rawReturnType);
            endpoints.push({ name, namespace: currentNamespace, paramType, returnType });
        } else if (propType.isObject()) {
            // It's a nested namespace/resource group
            endpoints.push(...extractEndpoints(propType, [...currentNamespace, name]));
        }
    });

    return endpoints;
}
