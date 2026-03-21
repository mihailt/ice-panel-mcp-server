"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="node" />
const ts_morph_1 = require("ts-morph");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const zod_mapper_1 = require("./generator/zod-mapper");
const tool_emitter_1 = require("./generator/tool-emitter");
const spec_emitter_1 = require("./generator/spec-emitter");
const ast_extractor_1 = require("./generator/ast-extractor");
const SDK_TYPES_PATH = path.join(process.cwd(), 'node_modules', '@icepanel', 'sdk', 'dist', 'cjs', 'index.d.ts');
const OUT_SRC_DIR = path.join(process.cwd(), 'src', 'generated');
const OUT_TEST_DIR = path.join(process.cwd(), 'test', 'generated');
// Ensure output directories exist
if (!fs.existsSync(OUT_SRC_DIR))
    fs.mkdirSync(OUT_SRC_DIR, { recursive: true });
if (!fs.existsSync(OUT_TEST_DIR))
    fs.mkdirSync(OUT_TEST_DIR, { recursive: true });
async function main() {
    const CLIENT_TYPES_PATH = path.join(process.cwd(), 'node_modules', '@icepanel', 'sdk', 'dist', 'cjs', 'Client.d.ts');
    console.log(`Loading TypeScript project from ${CLIENT_TYPES_PATH}...`);
    const project = new ts_morph_1.Project({
        compilerOptions: {
            target: ts_morph_1.ts.ScriptTarget.ESNext,
            module: ts_morph_1.ts.ModuleKind.CommonJS,
            strict: true
        }
    });
    const sourceFile = project.addSourceFileAtPath(CLIENT_TYPES_PATH);
    const clientClass = sourceFile.getClass('IcePanelClient');
    if (!clientClass) {
        throw new Error("IcePanelClient class not found in Client.d.ts");
    }
    const accessors = clientClass.getGetAccessors();
    const modules = accessors.map(a => a.getName());
    console.log(`Found ${modules.length} modules attached to IcePanelClient: ${modules.join(', ')}`);
    const allModuleNames = [];
    for (const moduleName of modules) {
        const accessor = clientClass.getGetAccessor(moduleName);
        const moduleType = accessor?.getReturnType();
        if (!moduleType) {
            console.warn(`Could not find return type for module: ${moduleName}`);
            continue;
        }
        console.log(`Extracting endpoints for module: ${moduleName}...`);
        // Recursive extraction of endpoints
        const endpoints = (0, ast_extractor_1.extractEndpoints)(moduleType, [moduleName]);
        if (endpoints.length === 0) {
            console.log(`No endpoints found for ${moduleName}, skipping.`);
            continue;
        }
        allModuleNames.push(moduleName);
        // 1. Generate Mappings
        const schemaStrings = [];
        const callbackStrings = [];
        const toolNames = [];
        for (const ep of endpoints) {
            const actionName = ep.name;
            const groupParts = ep.namespace.join('_');
            const toolName = `${actionName}_${groupParts}`;
            toolNames.push(toolName);
            const parts = [...ep.namespace, actionName];
            const camelCaseName = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
            const schemaName = `Zod${camelCaseName}Request`;
            let zodSchema = 'z.any()';
            if (ep.paramType) {
                zodSchema = (0, zod_mapper_1.typeToZod)(ep.paramType);
            }
            schemaStrings.push(`export const ${schemaName} = ${zodSchema};`);
            const callbackString = (0, tool_emitter_1.generateToolCallback)({
                toolName,
                schemaName: `schemas.${schemaName}`,
                description: `Executes the ${ep.namespace.join('.')}.${actionName} API method.`,
                resourceNamespace: ep.namespace,
                methodName: actionName
            });
            callbackStrings.push(callbackString);
        }
        // 2. Write to src/generated/{moduleName}-schemas.ts
        const schemasSrc = `import { z } from "zod";

// Generated Zod Schemas
${schemaStrings.join('\n\n')}
`;
        fs.writeFileSync(path.join(OUT_SRC_DIR, `${moduleName}-schemas.ts`), schemasSrc);
        // 3. Write to src/generated/{moduleName}.ts
        const toolsSrc = `import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IcePanelClient } from "@icepanel/sdk";
import * as schemas from "./${moduleName}-schemas.js";

// Generated Tool Registration
export function register${moduleName.charAt(0).toUpperCase() + moduleName.slice(1)}Tools(server: McpServer, client: IcePanelClient) {
${callbackStrings.join('\n\n')}
}
`;
        fs.writeFileSync(path.join(OUT_SRC_DIR, `${moduleName}.ts`), toolsSrc);
        // 4. Write to test/generated/{moduleName}.spec.ts
        const specSrc = (0, spec_emitter_1.generateSpecFile)({
            resourceName: moduleName,
            toolNames
        });
        fs.writeFileSync(path.join(OUT_TEST_DIR, `${moduleName}.spec.ts`), specSrc);
        console.log(`Generated files for ${moduleName} module.`);
    }
    // Generate central src/generated/index.ts
    const indexImports = allModuleNames.map(m => `import { register${m.charAt(0).toUpperCase() + m.slice(1)}Tools } from "./${m}.js";`).join('\n');
    const indexCalls = allModuleNames.map(m => `  if (!allowedModules || allowedModules.includes('${m}')) register${m.charAt(0).toUpperCase() + m.slice(1)}Tools(server, client);`).join('\n');
    const indexSrc = `import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IcePanelClient } from "@icepanel/sdk";

${indexImports}

export function registerAllTools(server: McpServer, client: IcePanelClient, allowedModules?: string[]) {
${indexCalls}
}
`;
    fs.writeFileSync(path.join(OUT_SRC_DIR, 'index.ts'), indexSrc);
    console.log("Written central src/generated/index.ts file. SDK Wrapper Complete!");
}
main().catch(console.error);
