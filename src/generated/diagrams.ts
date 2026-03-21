import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IcePanelClient } from "@icepanel/sdk";
import * as schemas from "./diagrams-schemas.js";

// Generated Tool Registration
export function registerDiagramsTools(server: McpServer, client: IcePanelClient) {
  server.registerTool(
    "get_diagrams_content",
    {
      description: "Executes the diagrams.content.get API method.",
      inputSchema: schemas.ZodDiagramsContentGetRequest
    },
    async (args, extra) => {
      try {
        const response = await client.diagrams.content.get(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_diagrams_content", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_diagrams_content", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "replace_diagrams_content",
    {
      description: "Executes the diagrams.content.replace API method.",
      inputSchema: schemas.ZodDiagramsContentReplaceRequest
    },
    async (args, extra) => {
      try {
        const response = await client.diagrams.content.replace(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "replace_diagrams_content", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "replace_diagrams_content", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "update_diagrams_content",
    {
      description: "Executes the diagrams.content.update API method.",
      inputSchema: schemas.ZodDiagramsContentUpdateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.diagrams.content.update(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_diagrams_content", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_diagrams_content", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "list_diagrams_groups",
    {
      description: "Executes the diagrams.groups.list API method.",
      inputSchema: schemas.ZodDiagramsGroupsListRequest
    },
    async (args, extra) => {
      try {
        const response = await client.diagrams.groups.list(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_diagrams_groups", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_diagrams_groups", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "create_diagrams_groups",
    {
      description: "Executes the diagrams.groups.create API method.",
      inputSchema: schemas.ZodDiagramsGroupsCreateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.diagrams.groups.create(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_diagrams_groups", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_diagrams_groups", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "get_diagrams_groups",
    {
      description: "Executes the diagrams.groups.get API method.",
      inputSchema: schemas.ZodDiagramsGroupsGetRequest
    },
    async (args, extra) => {
      try {
        const response = await client.diagrams.groups.get(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_diagrams_groups", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_diagrams_groups", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "upsert_diagrams_groups",
    {
      description: "Executes the diagrams.groups.upsert API method.",
      inputSchema: schemas.ZodDiagramsGroupsUpsertRequest
    },
    async (args, extra) => {
      try {
        const response = await client.diagrams.groups.upsert(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "upsert_diagrams_groups", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "upsert_diagrams_groups", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "delete_diagrams_groups",
    {
      description: "Executes the diagrams.groups.delete API method.",
      inputSchema: schemas.ZodDiagramsGroupsDeleteRequest
    },
    async (args, extra) => {
      try {
        const response = await client.diagrams.groups.delete(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_diagrams_groups", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_diagrams_groups", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "update_diagrams_groups",
    {
      description: "Executes the diagrams.groups.update API method.",
      inputSchema: schemas.ZodDiagramsGroupsUpdateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.diagrams.groups.update(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_diagrams_groups", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_diagrams_groups", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "exists_diagrams_groups",
    {
      description: "Executes the diagrams.groups.exists API method.",
      inputSchema: schemas.ZodDiagramsGroupsExistsRequest
    },
    async (args, extra) => {
      try {
        const response = await client.diagrams.groups.exists(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "exists_diagrams_groups", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "exists_diagrams_groups", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "get_diagrams_export",
    {
      description: "Executes the diagrams.export.get API method.",
      inputSchema: schemas.ZodDiagramsExportGetRequest
    },
    async (args, extra) => {
      try {
        const response = await client.diagrams.export.get(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_diagrams_export", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_diagrams_export", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "create_diagrams_export",
    {
      description: "Executes the diagrams.export.create API method.",
      inputSchema: schemas.ZodDiagramsExportCreateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.diagrams.export.create(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_diagrams_export", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_diagrams_export", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "list_diagrams",
    {
      description: "Executes the diagrams.list API method.",
      inputSchema: schemas.ZodDiagramsListRequest
    },
    async (args, extra) => {
      try {
        const response = await client.diagrams.list(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_diagrams", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_diagrams", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "create_diagrams",
    {
      description: "Executes the diagrams.create API method.",
      inputSchema: schemas.ZodDiagramsCreateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.diagrams.create(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_diagrams", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_diagrams", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "get_diagrams",
    {
      description: "Executes the diagrams.get API method.",
      inputSchema: schemas.ZodDiagramsGetRequest
    },
    async (args, extra) => {
      try {
        const response = await client.diagrams.get(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_diagrams", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_diagrams", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "upsert_diagrams",
    {
      description: "Executes the diagrams.upsert API method.",
      inputSchema: schemas.ZodDiagramsUpsertRequest
    },
    async (args, extra) => {
      try {
        const response = await client.diagrams.upsert(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "upsert_diagrams", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "upsert_diagrams", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "delete_diagrams",
    {
      description: "Executes the diagrams.delete API method.",
      inputSchema: schemas.ZodDiagramsDeleteRequest
    },
    async (args, extra) => {
      try {
        const response = await client.diagrams.delete(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_diagrams", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_diagrams", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "update_diagrams",
    {
      description: "Executes the diagrams.update API method.",
      inputSchema: schemas.ZodDiagramsUpdateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.diagrams.update(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_diagrams", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_diagrams", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "exists_diagrams",
    {
      description: "Executes the diagrams.exists API method.",
      inputSchema: schemas.ZodDiagramsExistsRequest
    },
    async (args, extra) => {
      try {
        const response = await client.diagrams.exists(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "exists_diagrams", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "exists_diagrams", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "listThumbnails_diagrams",
    {
      description: "Executes the diagrams.listThumbnails API method.",
      inputSchema: schemas.ZodDiagramsListThumbnailsRequest
    },
    async (args, extra) => {
      try {
        const response = await client.diagrams.listThumbnails(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "listThumbnails_diagrams", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "listThumbnails_diagrams", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "getThumbnail_diagrams",
    {
      description: "Executes the diagrams.getThumbnail API method.",
      inputSchema: schemas.ZodDiagramsGetThumbnailRequest
    },
    async (args, extra) => {
      try {
        const response = await client.diagrams.getThumbnail(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "getThumbnail_diagrams", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "getThumbnail_diagrams", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );
}
