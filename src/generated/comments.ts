import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IcePanelClient } from "@icepanel/sdk";
import * as schemas from "./comments-schemas.js";

// Generated Tool Registration
export function registerCommentsTools(server: McpServer, client: IcePanelClient) {
  server.registerTool(
    "list_comments_replies",
    {
      description: "Executes the comments.replies.list API method.",
      inputSchema: schemas.ZodCommentsRepliesListRequest
    },
    async (args, extra) => {
      try {
        const response = await client.comments.replies.list(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_comments_replies", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_comments_replies", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "create_comments_replies",
    {
      description: "Executes the comments.replies.create API method.",
      inputSchema: schemas.ZodCommentsRepliesCreateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.comments.replies.create(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_comments_replies", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_comments_replies", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "get_comments_replies",
    {
      description: "Executes the comments.replies.get API method.",
      inputSchema: schemas.ZodCommentsRepliesGetRequest
    },
    async (args, extra) => {
      try {
        const response = await client.comments.replies.get(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_comments_replies", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_comments_replies", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "upsert_comments_replies",
    {
      description: "Executes the comments.replies.upsert API method.",
      inputSchema: schemas.ZodCommentsRepliesUpsertRequest
    },
    async (args, extra) => {
      try {
        const response = await client.comments.replies.upsert(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "upsert_comments_replies", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "upsert_comments_replies", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "delete_comments_replies",
    {
      description: "Executes the comments.replies.delete API method.",
      inputSchema: schemas.ZodCommentsRepliesDeleteRequest
    },
    async (args, extra) => {
      try {
        const response = await client.comments.replies.delete(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_comments_replies", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_comments_replies", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "update_comments_replies",
    {
      description: "Executes the comments.replies.update API method.",
      inputSchema: schemas.ZodCommentsRepliesUpdateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.comments.replies.update(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_comments_replies", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_comments_replies", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "list_comments",
    {
      description: "Executes the comments.list API method.",
      inputSchema: schemas.ZodCommentsListRequest
    },
    async (args, extra) => {
      try {
        const response = await client.comments.list(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_comments", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_comments", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "create_comments",
    {
      description: "Executes the comments.create API method.",
      inputSchema: schemas.ZodCommentsCreateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.comments.create(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_comments", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_comments", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "get_comments",
    {
      description: "Executes the comments.get API method.",
      inputSchema: schemas.ZodCommentsGetRequest
    },
    async (args, extra) => {
      try {
        const response = await client.comments.get(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_comments", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_comments", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "upsert_comments",
    {
      description: "Executes the comments.upsert API method.",
      inputSchema: schemas.ZodCommentsUpsertRequest
    },
    async (args, extra) => {
      try {
        const response = await client.comments.upsert(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "upsert_comments", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "upsert_comments", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "delete_comments",
    {
      description: "Executes the comments.delete API method.",
      inputSchema: schemas.ZodCommentsDeleteRequest
    },
    async (args, extra) => {
      try {
        const response = await client.comments.delete(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_comments", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_comments", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "update_comments",
    {
      description: "Executes the comments.update API method.",
      inputSchema: schemas.ZodCommentsUpdateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.comments.update(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_comments", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_comments", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );
}
