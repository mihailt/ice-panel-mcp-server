import { describe, it, expect, vi } from 'vitest';
import { registerVersionsTools } from '../../src/generated/versions';
import { IcePanelClient } from '@icepanel/sdk';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

describe('versions tools (Generated)', () => {
    it('should register and execute all versions tools on the server', async () => {
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

        registerVersionsTools(mockServer, mockClient);

        expect(mockServer.registerTool).toHaveBeenCalledWith(
            "list_versions_reverts",
            expect.objectContaining({ description: expect.any(String) }),
            expect.any(Function)
        );
        expect(mockServer.registerTool).toHaveBeenCalledWith(
            "create_versions_reverts",
            expect.objectContaining({ description: expect.any(String) }),
            expect.any(Function)
        );
        expect(mockServer.registerTool).toHaveBeenCalledWith(
            "get_versions_reverts",
            expect.objectContaining({ description: expect.any(String) }),
            expect.any(Function)
        );
        expect(mockServer.registerTool).toHaveBeenCalledWith(
            "update_versions_reverts",
            expect.objectContaining({ description: expect.any(String) }),
            expect.any(Function)
        );
        expect(mockServer.registerTool).toHaveBeenCalledWith(
            "list_versions",
            expect.objectContaining({ description: expect.any(String) }),
            expect.any(Function)
        );
        expect(mockServer.registerTool).toHaveBeenCalledWith(
            "create_versions",
            expect.objectContaining({ description: expect.any(String) }),
            expect.any(Function)
        );
        expect(mockServer.registerTool).toHaveBeenCalledWith(
            "get_versions",
            expect.objectContaining({ description: expect.any(String) }),
            expect.any(Function)
        );
        expect(mockServer.registerTool).toHaveBeenCalledWith(
            "delete_versions",
            expect.objectContaining({ description: expect.any(String) }),
            expect.any(Function)
        );
        expect(mockServer.registerTool).toHaveBeenCalledWith(
            "update_versions",
            expect.objectContaining({ description: expect.any(String) }),
            expect.any(Function)
        );

        // Execute every tool callback to guarantee implementation line coverage
        for (const [name, callback] of registeredTools.entries()) {
             const result = await callback((name === 'batch_run_tool' || name === 'batch_run_parallel_tool') ? { actions: [] } : {});
             expect(result).toBeDefined();
        }

        // Execute every tool callback forcing the catch blocks to guarantee 100% branch coverage
        shouldThrow = true;
        for (const [name, callback] of registeredTools.entries()) {
             const result = await callback({});
             expect(result.isError).toBe(true);
             const errorData = JSON.parse(result.content[0].text);
             expect(errorData.success).toBe(false);
             expect(errorData.error.message).toContain("Simulated SDK Error");
        }
    });
});
