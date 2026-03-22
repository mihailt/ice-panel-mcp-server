import { describe, it, expect, vi } from 'vitest';

vi.mock('@modelcontextprotocol/sdk/server/mcp.js', () => ({
    McpServer: vi.fn().mockImplementation(() => ({
        connect: vi.fn().mockResolvedValue(undefined)
    }))
}));

vi.mock('@modelcontextprotocol/sdk/server/stdio.js', () => ({
    StdioServerTransport: vi.fn()
}));

vi.mock('@icepanel/sdk', () => ({
    IcePanelClient: vi.fn()
}));

vi.mock('../src/generated/index.js', () => ({
    registerAllTools: vi.fn()
}));

describe('Stdio Protocol Integration', () => {
    it('seamlessly instantiates native MCP bindings bypassing Cloudflare edge entirely', async () => {
        process.env.DOCKER_ICEPANEL_API_KEY = "test-coverage-key";
        await import('../src/stdio.js');
        
        const { McpServer } = await import('@modelcontextprotocol/sdk/server/mcp.js');
        const { StdioServerTransport } = await import('@modelcontextprotocol/sdk/server/stdio.js');
        const { registerAllTools } = await import('../src/generated/index.js');
        
        expect(McpServer).toHaveBeenCalled();
        expect(StdioServerTransport).toHaveBeenCalled();
        expect(registerAllTools).toHaveBeenCalled();
    });
});
