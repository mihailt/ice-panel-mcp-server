"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSpecFile = generateSpecFile;
function generateSpecFile(context) {
    const { resourceName, toolNames } = context;
    // Creating checks for each tool being registered
    const expectations = toolNames.map(name => `        expect(mockServer.tool).toHaveBeenCalledWith(\n            "${name}",\n            expect.any(String),\n            expect.anything(),\n            expect.any(Function)\n        );`).join('\n');
    return `import { describe, it, expect, vi } from 'vitest';
import { register${resourceName.charAt(0).toUpperCase() + resourceName.slice(1)}Tools } from '../../src/generated/${resourceName}';
import { IcePanelClient } from '@icepanel/sdk';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

describe('${resourceName} tools (Generated)', () => {
    it('should register all ${resourceName} tools on the server', () => {
        const mockServer = {
            tool: vi.fn()
        } as unknown as McpServer;
        
        const mockClient = {} as unknown as IcePanelClient;

        register${resourceName.charAt(0).toUpperCase() + resourceName.slice(1)}Tools(mockServer, mockClient);

${expectations}
    });
});
`;
}
