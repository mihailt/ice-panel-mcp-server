import { z } from 'zod';

// COMMENTS SCHEMAS
export const ZodCommentBody = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("question"),
    content: z.string(),
    showContentPreview: z.boolean().optional(),
    status: z.enum(["open", "resolved"])
  }),
  z.object({
    type: z.literal("inaccurate"),
    content: z.string(),
    showContentPreview: z.boolean().optional(),
    status: z.enum(["open", "resolved"])
  }),
  z.object({
    type: z.literal("idea"),
    content: z.string(),
    showContentPreview: z.boolean().optional(),
    status: z.enum(["active", "dismissed"])
  }),
  z.object({
    type: z.literal("new-question"),
    content: z.string(),
    showContentPreview: z.boolean().optional(),
    status: z.literal("create")
  }),
  z.object({
    type: z.literal("new-inaccurate"),
    content: z.string(),
    showContentPreview: z.boolean().optional(),
    status: z.literal("create")
  }),
  z.object({
    type: z.literal("new-idea"),
    content: z.string(),
    showContentPreview: z.boolean().optional(),
    status: z.literal("create")
  })
]);

export const ZodCommentRequired = z.object({
  body: ZodCommentBody,
  commit: z.number().optional(),
  mentionedUserIds: z.array(z.string()).optional(),
  handleId: z.string().optional()
});

export const ZodCommentPartial = z.object({
  body: ZodCommentBody.optional(),
  commit: z.number().optional(),
  mentionedUserIds: z.array(z.string()).optional()
});

export const ZodCommentReplyRequired = z.object({
  content: z.string(),
  mentionedUserIds: z.array(z.string()).optional()
});

export const ZodCommentReplyPartial = ZodCommentReplyRequired.partial();



