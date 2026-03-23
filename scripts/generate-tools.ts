/// <reference types="node" />
import { Project, ts, ClassDeclaration, InterfaceDeclaration, TypeAliasDeclaration, Type } from 'ts-morph';
import * as path from 'path';
import * as fs from 'fs';
import { typeToZod } from './generator/zod-mapper';
import { generateToolCallback } from './generator/tool-emitter';
import { generateSpecFile } from './generator/spec-emitter';
import { extractEndpoints } from './generator/ast-extractor';

const SDK_TYPES_PATH = path.join(process.cwd(), 'node_modules', '@icepanel', 'sdk', 'dist', 'cjs', 'index.d.ts');
const OUT_SRC_DIR = path.join(process.cwd(), 'src', 'generated');
const OUT_TEST_DIR = path.join(process.cwd(), 'test', 'generated');

// Ensure output directories exist
if (!fs.existsSync(OUT_SRC_DIR)) fs.mkdirSync(OUT_SRC_DIR, { recursive: true });
if (!fs.existsSync(OUT_TEST_DIR)) fs.mkdirSync(OUT_TEST_DIR, { recursive: true });

async function main() {
const CLIENT_TYPES_PATH = path.join(process.cwd(), 'node_modules', '@icepanel', 'sdk', 'dist', 'cjs', 'Client.d.ts');

    console.log(`Loading TypeScript project from ${CLIENT_TYPES_PATH}...`);
    const project = new Project({
        compilerOptions: {
            target: ts.ScriptTarget.ESNext,
            module: ts.ModuleKind.CommonJS,
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

    const allModuleNames: string[] = [];
    const globalCatalog: { name: string, description: string, module: string, namespace: string[], methodName: string, args: { name: string, type: string, required: boolean }[], responseSchemaName?: string }[] = [];

    for (const moduleName of modules) {
        const accessor = clientClass.getGetAccessor(moduleName);
        const moduleType = accessor?.getReturnType();

        if (!moduleType) {
            console.warn(`Could not find return type for module: ${moduleName}`);
            continue;
        }

        console.log(`Extracting endpoints for module: ${moduleName}...`);
        
        // Recursive extraction of endpoints
        const endpoints = extractEndpoints(moduleType, [moduleName]);
        
        if (endpoints.length === 0) {
            console.log(`No endpoints found for ${moduleName}, skipping.`);
            continue;
        }

        allModuleNames.push(moduleName);

        // 1. Generate Mappings
        const schemaStrings: string[] = [];
        const callbackStrings: string[] = [];
        const toolNames: string[] = [];

        for (const ep of endpoints) {
            const actionName = ep.name;
            const groupParts = ep.namespace.join('_'); 
            const toolName = `${actionName}_${groupParts}`; 
            toolNames.push(toolName);

            const parts = [...ep.namespace, actionName];
            const camelCaseName = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
            const requestSchemaName = `Zod${camelCaseName}Request`;
            const responseSchemaName = `Zod${camelCaseName}Response`;

            // Generate request schema
            let zodRequestSchema = 'z.any()';
            if (ep.paramType) {
                zodRequestSchema = typeToZod(ep.paramType);
            }
            schemaStrings.push(`export const ${requestSchemaName} = ${zodRequestSchema};`);

            // Generate response schema
            let hasResponseSchema = false;
            if (ep.returnType) {
                try {
                    const zodResponseSchema = typeToZod(ep.returnType);
                    schemaStrings.push(`export const ${responseSchemaName} = ${zodResponseSchema};`);
                    hasResponseSchema = true;
                } catch (e) {
                    console.warn(`  Could not generate response schema for ${toolName}: ${e}`);
                }
            }

            // Extract compact arg summary from request schema
            const args: { name: string, type: string, required: boolean }[] = [];
            if (ep.paramType && ep.paramType.isObject()) {
                for (const prop of ep.paramType.getProperties()) {
                    const pDecl = prop.getValueDeclaration();
                    let typeText = 'unknown';
                    if (pDecl) {
                        typeText = pDecl.getType().getText();
                        // Simplify long type strings
                        if (typeText.length > 50) typeText = typeText.substring(0, 47) + '...';
                    }
                    args.push({ name: prop.getName(), type: typeText, required: !prop.isOptional() });
                }
            }

            globalCatalog.push({
                name: toolName,
                description: `Executes the ${ep.namespace.join('.')}.${actionName} API method.`,
                module: moduleName,
                namespace: ep.namespace,
                methodName: actionName,
                args,
                responseSchemaName: hasResponseSchema ? responseSchemaName : undefined
            });

            const callbackString = generateToolCallback({
                toolName,
                schemaName: `schemas.${requestSchemaName}`,
                responseSchemaName: hasResponseSchema ? `schemas.${responseSchemaName}` : undefined,
                description: `Executes the ${ep.namespace.join('.')}.${actionName} API method.`,
                resourceNamespace: ep.namespace,
                methodName: actionName
            });
            callbackStrings.push(callbackString);
        }

        // 2. Write to src/generated/{moduleName}-schemas.ts
        const schemasSrc = `import { z } from "zod/v4-mini";

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
        const specSrc = generateSpecFile({
            resourceName: moduleName,
            toolNames
        });
        fs.writeFileSync(path.join(OUT_TEST_DIR, `${moduleName}.spec.ts`), specSrc);
        console.log(`Generated files for ${moduleName} module.`);
    }

    // 5. Generate virtual find_tool + run_tool module
    console.log("Generating virtual find_tool + run_tool discovery module...");
    const findToolSchemasSrc = `import { z } from "zod/v4-mini";

// Generated Zod Schema for find_tool
export const ZodFindToolRequest = z.object({
  query: z.optional(z.string())
});

// Generated Zod Schema for run_tool
export const ZodExecuteToolRequest = z.object({
  tool_name: z.string(),
  args: z.optional(z.record(z.string(), z.any()))
});

// Generated Zod Schema for batch_run_tool
export const ZodBatchExecuteToolRequest = z.object({
  actions: z.array(z.object({
    tool_name: z.string(),
    args: z.optional(z.record(z.string(), z.any()))
  }))
});
`;
    fs.writeFileSync(path.join(OUT_SRC_DIR, 'find_tool-schemas.ts'), findToolSchemasSrc);

    const uniqueModules = Array.from(new Set(globalCatalog.map((t: any) => t.module))).sort();

    // Build dispatch map for run_tool
    const dispatchEntries = globalCatalog.map(t => 
      `  "${t.name}": { namespace: ${JSON.stringify(t.namespace)}, method: "${t.methodName}" }`
    ).join(',\n');
    
    // Build enriched catalog with args for find_tool
    const enrichedCatalog = globalCatalog.map(({name, description, module, args}) => ({
        name, description, module, args
    }));

    const findToolSrc = `import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IcePanelClient } from "@icepanel/sdk";
import * as schemas from "./find_tool-schemas.js";

const toolsCatalog = ${JSON.stringify(enrichedCatalog, null, 2).replace(/\`/g, '\\`').replace(/\$/g, '\\$')};

const dispatchMap: Record<string, { namespace: string[], method: string }> = {
${dispatchEntries}
};

// Generated Virtual Module Registration
export function registerFind_toolTools(server: McpServer, client: IcePanelClient) {
  const descriptionStr = "Searches the complete catalog of all available IcePanel tools to help discover which module (?modules=...) contains the required functionality. \\n\\nAvailable Modules: " + 
    ${JSON.stringify(uniqueModules.join(', '))};

  server.registerTool(
    "find_tool",
    {
      description: descriptionStr,
      inputSchema: schemas.ZodFindToolRequest
    },
    async (args) => {
      const query = args.query?.toLowerCase() || '';
      const results = toolsCatalog.filter((t: any) => 
        t.name.toLowerCase().includes(query) || 
        t.module.toLowerCase().includes(query) ||
        t.description.toLowerCase().includes(query)
      );
      
      const uniqueModules = Array.from(new Set(toolsCatalog.map((t: any) => t.module))).sort();
      
      return { 
        content: [
          { 
            type: "text", 
            text: JSON.stringify({ tool: "find_tool", success: true, data: { modules: uniqueModules, matchCount: results.length, tools: results } }, null, 2) 
          }
        ] 
      };
    }
  );

  server.registerTool(
    "run_tool",
    {
      description: "Executes any IcePanel tool by name. Use find_tool first to discover available tools, then pass the tool name and arguments here.",
      inputSchema: schemas.ZodExecuteToolRequest
    },
    async (args) => {
      const entry = dispatchMap[args.tool_name];
      if (!entry) {
        return {
          content: [{ type: "text", text: JSON.stringify({ tool: args.tool_name, success: false, error: { message: \`Unknown tool "\${args.tool_name}". Use find_tool to discover available tools.\` } }, null, 2) }],
          isError: true
        };
      }

      try {
        let target: any = client;
        for (const ns of entry.namespace) {
          target = target[ns];
        }
        const response = await target[entry.method](args.args || {});
        return {
          content: [{ type: "text", text: JSON.stringify({ tool: args.tool_name, success: true, data: response }, null, 2) }]
        };
      } catch (error: any) {
        return {
          content: [{ type: "text", text: JSON.stringify({ tool: args.tool_name, success: false, error: { message: error.message, status: error.statusCode } }, null, 2) }],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "batch_run_tool",
    {
      description: "Executes multiple IcePanel tools sequentially. Pass an array of actions, each containing 'tool_name' and 'args'. Returns an array of results.",
      inputSchema: schemas.ZodBatchExecuteToolRequest
    },
    async (params) => {
      const results: any[] = [];
      let hasError = false;

      for (const action of params.actions) {
        const entry = dispatchMap[action.tool_name];
        if (!entry) {
          results.push({ tool: action.tool_name, success: false, error: { message: \`Unknown tool "\${action.tool_name}".\` } });
          hasError = true;
          continue;
        }

        try {
          let target: any = client;
          for (const ns of entry.namespace) {
            target = target[ns];
          }
          const response = await target[entry.method](action.args || {});
          results.push({ tool: action.tool_name, success: true, data: response });
        } catch (error: any) {
          results.push({ tool: action.tool_name, success: false, error: { message: error.message, status: error.statusCode } });
          hasError = true;
        }
      }

      return {
        content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
        isError: hasError
      };
    }
  );

  server.registerTool(
    "batch_run_parallel_tool",
    {
      description: "Executes multiple IcePanel tools in parallel. Pass an array of actions, each containing 'tool_name' and 'args'. Returns an array of results.",
      inputSchema: schemas.ZodBatchExecuteToolRequest
    },
    async (params) => {
      const promises = params.actions.map(async (action) => {
        const entry = dispatchMap[action.tool_name];
        if (!entry) {
          return { tool: action.tool_name, success: false, error: { message: \`Unknown tool "\${action.tool_name}".\` } };
        }

        try {
          let target: any = client;
          for (const ns of entry.namespace) {
            target = target[ns];
          }
          const response = await target[entry.method](action.args || {});
          return { tool: action.tool_name, success: true, data: response };
        } catch (error: any) {
          return { tool: action.tool_name, success: false, error: { message: error.message, status: error.statusCode } };
        }
      });

      const results = await Promise.all(promises);
      const hasError = results.some(r => !r.success);

      return {
        content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
        isError: hasError
      };
    }
  );
}
`;
    fs.writeFileSync(path.join(OUT_SRC_DIR, 'find_tool.ts'), findToolSrc);
    allModuleNames.push('find_tool');

    // Generate test boundaries for find_tool + run_tool
    const findToolSpecSrc = generateSpecFile({
        resourceName: 'find_tool',
        toolNames: ['find_tool', 'run_tool', 'batch_run_tool', 'batch_run_parallel_tool']
    });
    fs.writeFileSync(path.join(OUT_TEST_DIR, 'find_tool.spec.ts'), findToolSpecSrc);

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

    const indexSpecSrc = `import { describe, it, expect, vi } from 'vitest';
import { registerAllTools } from '../../src/generated/index';
import { IcePanelClient } from '@icepanel/sdk';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

describe('index (Generated Tool Registry)', () => {
    it('should register all tools when no constraints are passed', () => {
        const mockServer = { registerTool: vi.fn() } as unknown as McpServer;
        const mockClient = {} as unknown as IcePanelClient;
        registerAllTools(mockServer, mockClient);
        expect(mockServer.registerTool).toHaveBeenCalled();
    });

    it('should explicitly map false for all whitelist inclusions to guarantee negative branch evaluations', () => {
        const mockServer = { registerTool: vi.fn() } as unknown as McpServer;
        const mockClient = {} as unknown as IcePanelClient;
        registerAllTools(mockServer, mockClient, []);
        expect(mockServer.registerTool).not.toHaveBeenCalled();
    });

    it('should explicitly map true for all whitelist inclusions to guarantee branch evaluations', () => {
        const mockServer = { registerTool: vi.fn() } as unknown as McpServer;
        const mockClient = {} as unknown as IcePanelClient;
        registerAllTools(mockServer, mockClient, ${JSON.stringify(allModuleNames)});
        expect(mockServer.registerTool).toHaveBeenCalled();
    });
});
`;
    fs.writeFileSync(path.join(OUT_TEST_DIR, 'index.spec.ts'), indexSpecSrc);

    console.log("Written central src/generated/index.ts file. SDK Wrapper Complete!");
}

main().catch(console.error);
