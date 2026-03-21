import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IcePanelClient } from "@icepanel/sdk";
import * as schemas from "./drafts-schemas.js";

// Generated Tool Registration
export function registerDraftsTools(server: McpServer, client: IcePanelClient) {
  server.registerTool(
    "list_drafts",
    {
      description: "Executes the drafts.list API method.",
      inputSchema: schemas.ZodDraftsListRequest
    },
    async (args, extra) => {
      try {
        const response = await client.drafts.list(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_drafts", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_drafts", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "create_drafts",
    {
      description: "Executes the drafts.create API method.",
      inputSchema: schemas.ZodDraftsCreateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.drafts.create(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_drafts", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_drafts", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "get_drafts",
    {
      description: "Executes the drafts.get API method.",
      inputSchema: schemas.ZodDraftsGetRequest
    },
    async (args, extra) => {
      try {
        const response = await client.drafts.get(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_drafts", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_drafts", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "upsert_drafts",
    {
      description: "Executes the drafts.upsert API method.",
      inputSchema: schemas.ZodDraftsUpsertRequest
    },
    async (args, extra) => {
      try {
        const response = await client.drafts.upsert(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "upsert_drafts", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "upsert_drafts", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "delete_drafts",
    {
      description: "Executes the drafts.delete API method.",
      inputSchema: schemas.ZodDraftsDeleteRequest
    },
    async (args, extra) => {
      try {
        const response = await client.drafts.delete(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_drafts", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_drafts", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "update_drafts",
    {
      description: "Executes the drafts.update API method.",
      inputSchema: schemas.ZodDraftsUpdateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.drafts.update(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_drafts", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_drafts", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "merge_drafts",
    {
      description: "Executes the drafts.merge API method.",
      inputSchema: schemas.ZodDraftsMergeRequest
    },
    async (args, extra) => {
      try {
        const response = await client.drafts.merge(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "merge_drafts", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "merge_drafts", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );
}
