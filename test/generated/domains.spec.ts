import { describe, it, expect, vi } from 'vitest';
import { registerDomainsTools } from '../../src/generated/domains';
import { IcePanelClient } from '@icepanel/sdk';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

describe('domains tools (Generated)', () => {
    it('should register and execute all domains tools on the server', async () => {
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

        registerDomainsTools(mockServer, mockClient);

        expect(mockServer.registerTool).toHaveBeenCalledWith(
            "list_domains",
            expect.objectContaining({ description: expect.any(String) }),
            expect.any(Function)
        );
        expect(mockServer.registerTool).toHaveBeenCalledWith(
            "create_domains",
            expect.objectContaining({ description: expect.any(String) }),
            expect.any(Function)
        );
        expect(mockServer.registerTool).toHaveBeenCalledWith(
            "get_domains",
            expect.objectContaining({ description: expect.any(String) }),
            expect.any(Function)
        );
        expect(mockServer.registerTool).toHaveBeenCalledWith(
            "upsert_domains",
            expect.objectContaining({ description: expect.any(String) }),
            expect.any(Function)
        );
        expect(mockServer.registerTool).toHaveBeenCalledWith(
            "delete_domains",
            expect.objectContaining({ description: expect.any(String) }),
            expect.any(Function)
        );
        expect(mockServer.registerTool).toHaveBeenCalledWith(
            "update_domains",
            expect.objectContaining({ description: expect.any(String) }),
            expect.any(Function)
        );
        expect(mockServer.registerTool).toHaveBeenCalledWith(
            "exists_domains",
            expect.objectContaining({ description: expect.any(String) }),
            expect.any(Function)
        );

        // Execute every tool callback to guarantee implementation line coverage
        for (const [name, callback] of registeredTools.entries()) {
             const result = await callback({});
             expect(result).toBeDefined();
             if ('domains' === 'find_tool' && name === 'find_tool') {
                 // Hit defined arguments to capture 100% logic branches on args.query
                 const queryResult = await callback({ query: 'diagrams' });
                 const queryData = JSON.parse(queryResult.content[0].text);
                 expect(queryData.tool).toBe('find_tool');
                 expect(queryData.success).toBe(true);
                 expect(queryData.data.tools).toBeDefined();
                 // Hit un-matchable conditions to evaluate the end of the short-circuit OR chain
                 await callback({ query: 'executes the' });
             }
             if ('domains' === 'find_tool' && name === 'run_tool') {
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
        }

        // Execute every tool callback forcing the catch blocks to guarantee 100% branch coverage
        if ('domains' !== 'find_tool') {
            shouldThrow = true;
            for (const [name, callback] of registeredTools.entries()) {
                 const result = await callback({});
                 expect(result.isError).toBe(true);
                 const errorData = JSON.parse(result.content[0].text);
                 expect(errorData.success).toBe(false);
                 expect(errorData.error.message).toContain("Simulated SDK Error");
            }
        }
    });
});
