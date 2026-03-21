import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IcePanelClient } from "@icepanel/sdk";
import * as schemas from "./landscapes-schemas.js";

// Generated Tool Registration
export function registerLandscapesTools(server: McpServer, client: IcePanelClient) {
  server.registerTool(
    "byType_landscapes_logs_stats",
    {
      description: "Executes the landscapes.logs.stats.byType API method.",
      inputSchema: schemas.ZodLandscapesLogsStatsByTypeRequest
    },
    async (args, extra) => {
      try {
        const response = await client.landscapes.logs.stats.byType(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "byType_landscapes_logs_stats", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "byType_landscapes_logs_stats", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "byEntity_landscapes_logs_stats",
    {
      description: "Executes the landscapes.logs.stats.byEntity API method.",
      inputSchema: schemas.ZodLandscapesLogsStatsByEntityRequest
    },
    async (args, extra) => {
      try {
        const response = await client.landscapes.logs.stats.byEntity(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "byEntity_landscapes_logs_stats", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "byEntity_landscapes_logs_stats", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "list_landscapes_logs",
    {
      description: "Executes the landscapes.logs.list API method.",
      inputSchema: schemas.ZodLandscapesLogsListRequest
    },
    async (args, extra) => {
      try {
        const response = await client.landscapes.logs.list(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_landscapes_logs", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_landscapes_logs", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "get_landscapes_logs",
    {
      description: "Executes the landscapes.logs.get API method.",
      inputSchema: schemas.ZodLandscapesLogsGetRequest
    },
    async (args, extra) => {
      try {
        const response = await client.landscapes.logs.get(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_landscapes_logs", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_landscapes_logs", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "listChildren_landscapes_logs",
    {
      description: "Executes the landscapes.logs.listChildren API method.",
      inputSchema: schemas.ZodLandscapesLogsListChildrenRequest
    },
    async (args, extra) => {
      try {
        const response = await client.landscapes.logs.listChildren(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "listChildren_landscapes_logs", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "listChildren_landscapes_logs", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "create_landscapes_export",
    {
      description: "Executes the landscapes.export.create API method.",
      inputSchema: schemas.ZodLandscapesExportCreateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.landscapes.export.create(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_landscapes_export", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_landscapes_export", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "get_landscapes_export",
    {
      description: "Executes the landscapes.export.get API method.",
      inputSchema: schemas.ZodLandscapesExportGetRequest
    },
    async (args, extra) => {
      try {
        const response = await client.landscapes.export.get(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_landscapes_export", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_landscapes_export", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "get_landscapes",
    {
      description: "Executes the landscapes.get API method.",
      inputSchema: schemas.ZodLandscapesGetRequest
    },
    async (args, extra) => {
      try {
        const response = await client.landscapes.get(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_landscapes", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_landscapes", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "delete_landscapes",
    {
      description: "Executes the landscapes.delete API method.",
      inputSchema: schemas.ZodLandscapesDeleteRequest
    },
    async (args, extra) => {
      try {
        const response = await client.landscapes.delete(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_landscapes", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_landscapes", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "update_landscapes",
    {
      description: "Executes the landscapes.update API method.",
      inputSchema: schemas.ZodLandscapesUpdateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.landscapes.update(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_landscapes", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_landscapes", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "duplicate_landscapes",
    {
      description: "Executes the landscapes.duplicate API method.",
      inputSchema: schemas.ZodLandscapesDuplicateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.landscapes.duplicate(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "duplicate_landscapes", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "duplicate_landscapes", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "copy_landscapes",
    {
      description: "Executes the landscapes.copy API method.",
      inputSchema: schemas.ZodLandscapesCopyRequest
    },
    async (args, extra) => {
      try {
        const response = await client.landscapes.copy(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "copy_landscapes", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "copy_landscapes", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "search_landscapes",
    {
      description: "Executes the landscapes.search API method.",
      inputSchema: schemas.ZodLandscapesSearchRequest
    },
    async (args, extra) => {
      try {
        const response = await client.landscapes.search(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "search_landscapes", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "search_landscapes", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );
}
