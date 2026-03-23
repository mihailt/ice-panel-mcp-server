import { describe, it, expect } from 'vitest';
import { ZodCommentRequired, ZodCommentPartial, ZodCommentReplyRequired, ZodCommentReplyPartial } from '../src/schemas.js';

describe('Schemas Validation', () => {
    it('validates ZodCommentRequired successfully', () => {
        const payload = {
            body: {
                type: 'question',
                content: 'Test content',
                status: 'open'
            },
            commit: 123,
            mentionedUserIds: ['u1'],
            handleId: 'h1'
        };
        const result = ZodCommentRequired.parse(payload);
        expect(result).toBeDefined();
    });

    it('validates other schemas for code coverage', () => {
        ZodCommentPartial.parse({});
        ZodCommentReplyRequired.parse({ content: 'reply' });
        ZodCommentReplyPartial.parse({});
    });
});
