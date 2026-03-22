import { z } from "zod/v4-mini";

// Generated Zod Schema for find_tool
export const ZodFindToolRequest = z.object({
  query: z.optional(z.string())
});

// Generated Zod Schema for run_tool
export const ZodExecuteToolRequest = z.object({
  tool_name: z.string(),
  args: z.optional(z.record(z.string(), z.any()))
});

// Generated Zod Schema for batch_run_tool
export const ZodBatchExecuteToolRequest = z.object({
  actions: z.array(z.object({
    tool_name: z.string(),
    args: z.optional(z.record(z.string(), z.any()))
  }))
});
