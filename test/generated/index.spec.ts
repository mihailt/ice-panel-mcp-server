import { describe, it, expect, vi } from 'vitest';
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
        registerAllTools(mockServer, mockClient, ["comments","diagrams","domains","drafts","flows","landscapes","organizations","shareLink","tags","teams","versions","catalog","model","find_tool"]);
        expect(mockServer.registerTool).toHaveBeenCalled();
    });
});
