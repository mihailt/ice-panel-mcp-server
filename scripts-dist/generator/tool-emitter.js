"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToolCallback = generateToolCallback;
function generateToolCallback(context) {
    const { toolName, schemaName, description, resourceNamespace, methodName } = context;
    const clientPath = resourceNamespace.join('.');
    // We use shape because McpServer expects a plain object of Zod schemas, not a z.object() wrapper directly
    // based on our previous manual implementation.
    return `  server.tool(
    "${toolName}",
    "${description}",
    ${schemaName}.shape,
    async (args, extra) => {
      try {
        const response = await client.${clientPath}.${methodName}(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(response, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: \`Error: \${error.message}\`
            }
          ],
          isError: true
        };
      }
    }
  );`;
}
