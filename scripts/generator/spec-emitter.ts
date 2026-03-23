export interface SpecEmitterContext {
    resourceName: string; // e.g., 'comments'
    toolNames: string[];  // e.g., ['list_comments', 'create_comments']
}

export function generateSpecFile(context: SpecEmitterContext): string {
    const { resourceName, toolNames } = context;

    // Creating checks for each tool being registered
    const expectations = toolNames.map(name => `        expect(mockServer.registerTool).toHaveBeenCalledWith(\n            "${name}",\n            expect.objectContaining({ description: expect.any(String) }),\n            expect.any(Function)\n        );`).join('\n');

    const isFindTool = resourceName === 'find_tool';

    let findToolExpectations = "";
    if (isFindTool) {
        findToolExpectations = `
             if (name === 'find_tool') {
                 // Hit defined arguments to capture 100% logic branches on args.query
                 const queryResult = await callback({ query: 'diagrams' });
                 const queryData = JSON.parse(queryResult.content[0].text);
                 expect(queryData.tool).toBe('find_tool');
                 expect(queryData.success).toBe(true);
                 expect(queryData.data.tools).toBeDefined();
                 // Hit un-matchable conditions to evaluate the end of the short-circuit OR chain
                 await callback({ query: 'executes the' });
             }
             if (name === 'run_tool') {
                 // Happy path: execute a known tool name through the proxy
                 const successResult = await callback({ tool_name: 'list_comments', args: {} });
                 const successData = JSON.parse(successResult.content[0].text);
                 expect(successData.tool).toBe('list_comments');
                 expect(successData.success).toBe(true);
                 expect(successData.data).toBeDefined();
                 // Happy path without args: hits the || {} fallback branch
                 const noArgsResult = await callback({ tool_name: 'list_comments' });
                 const noArgsData = JSON.parse(noArgsResult.content[0].text);
                 expect(noArgsData.success).toBe(true);
                 // Unknown tool: triggers the early return error branch
                 const unknownResult = await callback({ tool_name: 'nonexistent_tool_xyz', args: {} });
                 expect(unknownResult.isError).toBe(true);
                 const unknownData = JSON.parse(unknownResult.content[0].text);
                 expect(unknownData.success).toBe(false);
                 expect(unknownData.error.message).toContain('Unknown tool');
                 // Error path: force the proxy to throw during SDK dispatch
                 shouldThrow = true;
                 const errorResult = await callback({ tool_name: 'list_comments', args: {} });
                 expect(errorResult.isError).toBe(true);
                 const errorData = JSON.parse(errorResult.content[0].text);
                 expect(errorData.success).toBe(false);
                 expect(errorData.error.message).toContain('Simulated SDK Error');
                 shouldThrow = false;
             }
             if (name === 'batch_run_tool' || name === 'batch_run_parallel_tool') {
                 // Happy path: array of successful tools
                 const successResult = await callback({ actions: [{ tool_name: 'list_comments', args: {} }] });
                 expect(successResult.isError).toBe(false);
                 const successData = JSON.parse(successResult.content[0].text);
                 expect(successData[0].success).toBe(true);

                 // Happy path without args fallback
                 const fallbackResult = await callback({ actions: [{ tool_name: 'list_comments' }] });
                 expect(fallbackResult.isError).toBe(false);
                 const fallbackData = JSON.parse(fallbackResult.content[0].text);
                 expect(fallbackData[0].success).toBe(true);

                 // Mixed path: unknown tool fallback
                 const mixedResult = await callback({ actions: [{ tool_name: 'invalid_xyz' }] });
                 expect(mixedResult.isError).toBe(true);
                 const mixedData = JSON.parse(mixedResult.content[0].text);
                 expect(mixedData[0].success).toBe(false);

                 // Error path: SDK payload failure
                 shouldThrow = true;
                 const errorResult = await callback({ actions: [{ tool_name: 'list_comments', args: {} }] });
                 expect(errorResult.isError).toBe(true);
                 shouldThrow = false;
             }`;
    }

    let errorCatchExpectations = "";
    if (!isFindTool) {
        errorCatchExpectations = `
        // Execute every tool callback forcing the catch blocks to guarantee 100% branch coverage
        shouldThrow = true;
        for (const [name, callback] of registeredTools.entries()) {
             const result = await callback({});
             expect(result.isError).toBe(true);
             const errorData = JSON.parse(result.content[0].text);
             expect(errorData.success).toBe(false);
             expect(errorData.error.message).toContain("Simulated SDK Error");
        }`;
    }

    return `import { describe, it, expect, vi } from 'vitest';
import { register${resourceName.charAt(0).toUpperCase() + resourceName.slice(1)}Tools } from '../../src/generated/${resourceName}';
import { IcePanelClient } from '@icepanel/sdk';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

describe('${resourceName} tools (Generated)', () => {
    it('should register and execute all ${resourceName} tools on the server', async () => {
        const registeredTools = new Map<string, Function>();
        const mockServer = {
            registerTool: vi.fn((name, config, callback) => {
                registeredTools.set(name, callback);
            })
        } as unknown as McpServer;
        
        let shouldThrow = false;
        // Deep Mock Proxy to safely ingest whatever the LLM passes and return valid results
        const createDeepMock = (): any => {
             return new Proxy(() => {}, {
                 get: (target, prop) => {
                     if (prop === 'then') return undefined; 
                     return createDeepMock();
                 },
                 apply: () => {
                     if (shouldThrow) return Promise.reject(new Error("Simulated SDK Error"));
                     return Promise.resolve({ success: true });
                 }
             });
        };
        const mockClient = createDeepMock() as unknown as IcePanelClient;

        register${resourceName.charAt(0).toUpperCase() + resourceName.slice(1)}Tools(mockServer, mockClient);

${expectations}

        // Execute every tool callback to guarantee implementation line coverage
        for (const [name, callback] of registeredTools.entries()) {
             const result = await callback((name === 'batch_run_tool' || name === 'batch_run_parallel_tool') ? { actions: [] } : {});
             expect(result).toBeDefined();${findToolExpectations}
        }
${errorCatchExpectations}
    });
});
`;
}
