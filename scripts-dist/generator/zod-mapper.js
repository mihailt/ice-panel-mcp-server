"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeToZod = typeToZod;
function typeToZod(type, isOptional = false) {
    let zodStr = 'z.unknown()';
    if (type.isString()) {
        zodStr = 'z.string()';
    }
    else if (type.isNumber()) {
        zodStr = 'z.number()';
    }
    else if (type.isBoolean()) {
        zodStr = 'z.boolean()';
    }
    else if (type.isArray()) {
        const elemType = type.getArrayElementTypeOrThrow();
        zodStr = `z.array(${typeToZod(elemType)})`;
    }
    else if (type.isUnion()) {
        const unionTypes = type.getUnionTypes();
        const nonUndefined = unionTypes.filter(t => !t.isUndefined());
        if (nonUndefined.length === 1) {
            zodStr = typeToZod(nonUndefined[0]);
        }
        else {
            const allStringLiterals = nonUndefined.every(t => t.isStringLiteral());
            if (allStringLiterals) {
                const literals = nonUndefined.map(t => `"${t.getLiteralValue()}"`);
                zodStr = `z.enum([${literals.join(', ')}])`;
            }
            else {
                const unionZods = nonUndefined.map(t => typeToZod(t));
                zodStr = `z.union([${unionZods.join(', ')}])`;
            }
        }
    }
    else if (type.isObject()) {
        const stringIndexType = type.getStringIndexType();
        if (stringIndexType) {
            zodStr = `z.record(z.string(), ${typeToZod(stringIndexType)})`;
        }
        else {
            const props = type.getProperties();
            if (props.length === 0) {
                zodStr = 'z.record(z.string(), z.any())';
            }
            else {
                const propStrings = props.map(p => {
                    const pDecl = p.getValueDeclaration();
                    let valType;
                    if (pDecl) {
                        valType = pDecl.getType();
                    }
                    else {
                        valType = p.getTypeAtLocation(p.getDeclarations()[0]);
                    }
                    const isOpt = p.isOptional();
                    return `"${p.getName()}": ${typeToZod(valType, isOpt)}`;
                });
                zodStr = `z.object({ ${propStrings.join(', ')} })`;
            }
        }
    }
    else if (type.isAny() || type.isUnknown()) {
        zodStr = 'z.any()';
    }
    else if (type.isStringLiteral()) {
        zodStr = `z.literal("${type.getLiteralValue()}")`;
    }
    else if (type.isBooleanLiteral()) {
        zodStr = `z.literal(${type.getText()})`;
    }
    else if (type.isNumberLiteral()) {
        zodStr = `z.literal(${type.getText()})`;
    }
    else if (type.isNull()) {
        zodStr = 'z.null()';
    }
    else if (type.isUndefined()) {
        zodStr = 'z.undefined()';
    }
    if (isOptional) {
        zodStr += '.optional()';
    }
    return zodStr;
}
