/// <reference types="node" />
import { describe, it, expect } from 'vitest';
import { generateToolCallback } from '../../scripts/generator/tool-emitter';

describe('MCP Tool Callback Emitter', () => {
    it('generates a valid tool string for a generic endpoint', () => {
        const result = generateToolCallback({
            toolName: 'list_comments',
            schemaName: 'ZodCommentsListRequest',
            schemaDefinition: 'z.object({ "landscapeId": z.string() })',
            description: 'Lists all comments.',
            resourceNamespace: ['comments'],
            methodName: 'list'
        });

        // Test essential parts of the generated string
        expect(result).toContain('server.tool(');
        expect(result).toContain('"list_comments"');
        expect(result).toContain('ZodCommentsListRequest');
        expect(result).toContain('await client.comments.list(args);');
        expect(result).toContain('return {');
        expect(result).toContain('content: [');
        expect(result).toContain('text: JSON.stringify(response, null, 2)');
    });

    it('generates a valid tool string with nested namespace endpoints', () => {
        const result = generateToolCallback({
            toolName: 'update_comments_replies',
            schemaName: 'ZodCommentsRepliesUpdateRequest',
            schemaDefinition: 'z.object({ "id": z.string() })',
            description: 'Updates a reply.',
            resourceNamespace: ['comments', 'replies'],
            methodName: 'update'
        });

        expect(result).toContain('"update_comments_replies"');
        expect(result).toContain('await client.comments.replies.update(args);');
    });
});
