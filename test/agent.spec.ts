import { describe, it, expect, vi } from 'vitest';
import { IcePanelMcp } from '../src/agent.js';
import { IcePanelClient } from '@icepanel/sdk';

vi.mock('@icepanel/sdk', () => {
    return {
        IcePanelClient: vi.fn()
    };
});

vi.mock('agents/mcp', () => {
    return {
        McpAgent: class {
            server = {
                tool: vi.fn()
            };
        }
    };
});

vi.mock('../src/generated/index.js', () => {
    return {
        registerAllTools: vi.fn()
    };
});

describe('IcePanelMcp Agent', () => {
    it('throws error if instantiated without bearer token', () => {
        const getClient = IcePanelMcp.prototype.getClient;
        expect(() => getClient.call({ props: { bearerToken: '' } } as any)).toThrowError("Unauthorized: No IcePanel API token provided via Authorization header.");
    });

    it('successfully creates IcePanelClient when token is provided', () => {
        const getClient = IcePanelMcp.prototype.getClient;
        getClient.call({ props: { bearerToken: 'valid-test-token' } } as any);
        
        expect(IcePanelClient).toHaveBeenCalledWith({
            apiKey: 'valid-test-token',
            apiVersion: 'v1'
        });
    });

    it('initializes and registers tools with default find_tool if no modules provided', async () => {
        const agent = new IcePanelMcp({} as any, {} as any);
        (agent as any).props = { bearerToken: 'valid' };
        expect(agent.server).toBeDefined();

        await agent.init();
        const { registerAllTools } = await import('../src/generated/index.js');
        expect(registerAllTools).toHaveBeenCalledWith(agent.server, expect.anything(), ['find_tool']);
    });

    it('initializes and registers tools with specific modules if provided', async () => {
        const agent = new IcePanelMcp({} as any, {} as any);
        (agent as any).props = { bearerToken: 'valid', modules: ['tags', 'comments'] };
        await agent.init();
        const { registerAllTools } = await import('../src/generated/index.js');
        expect(registerAllTools).toHaveBeenCalledWith(agent.server, expect.anything(), ['tags', 'comments']);
    });
});
