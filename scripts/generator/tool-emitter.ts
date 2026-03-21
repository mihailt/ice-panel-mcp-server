export interface ToolEmitterContext {
    toolName: string;
    schemaName: string;
    responseSchemaName?: string;
    schemaDefinition?: string;
    description: string;
    resourceNamespace: string[];
    methodName: string;
}

export function generateToolCallback(context: ToolEmitterContext): string {
    const { toolName, schemaName, description, resourceNamespace, methodName } = context;
    const clientPath = resourceNamespace.join('.');
    
    // Use registerTool with inputSchema (full Zod object) instead of deprecated tool() with .shape
    // The MCP SDK uses zod/v4-mini internally; passing .shape caused _zod compatibility errors
    return `  server.registerTool(
    "${toolName}",
    {
      description: "${description}",
      inputSchema: ${schemaName}
    },
    async (args, extra) => {
      try {
        const response = await client.${clientPath}.${methodName}(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "${toolName}", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "${toolName}", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );`;
}

