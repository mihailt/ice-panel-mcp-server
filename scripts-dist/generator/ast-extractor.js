"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractEndpoints = extractEndpoints;
function extractEndpoints(type, currentNamespace) {
    const endpoints = [];
    type.getProperties().forEach(prop => {
        const name = prop.getName();
        if (name.startsWith('_'))
            return; // Skip private/internal properties
        const propDecl = prop.getValueDeclaration();
        if (!propDecl)
            return;
        const propType = propDecl.getType();
        const callSigs = propType.getCallSignatures();
        if (callSigs.length > 0) {
            // It's a callable method
            const params = callSigs[0].getParameters();
            let paramType;
            if (params.length > 0) {
                paramType = params[0].getValueDeclaration()?.getType();
            }
            endpoints.push({ name, namespace: currentNamespace, paramType });
        }
        else if (propType.isObject()) {
            // It's a nested namespace/resource group
            endpoints.push(...extractEndpoints(propType, [...currentNamespace, name]));
        }
    });
    return endpoints;
}
