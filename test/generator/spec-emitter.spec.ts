/// <reference types="node" />
import { describe, it, expect } from 'vitest';
import { generateSpecFile } from '../../scripts/generator/spec-emitter';

describe('MCP Spec Template Emitter', () => {
    it('generates a valid spec test for a resource with its tools', () => {
        const result = generateSpecFile({
            resourceName: 'comments',
            toolNames: ['list_comments', 'create_comments']
        });

        // Test essential parts of the generated string
        expect(result).toContain('describe(\'comments tools (Generated)\'');
        expect(result).toContain('import { registerCommentsTools } from \'../../src/generated/comments\'');
        expect(result).toContain('registerCommentsTools(mockServer, mockClient);');
        expect(result).toContain('expect(mockServer.tool).toHaveBeenCalledWith(');
        expect(result).toContain('"list_comments"');
        expect(result).toContain('"create_comments"');
    });
});
