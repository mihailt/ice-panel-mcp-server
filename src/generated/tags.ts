import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IcePanelClient } from "@icepanel/sdk";
import * as schemas from "./tags-schemas.js";

// Generated Tool Registration
export function registerTagsTools(server: McpServer, client: IcePanelClient) {
  server.registerTool(
    "list_tags_groups",
    {
      description: "Executes the tags.groups.list API method.",
      inputSchema: schemas.ZodTagsGroupsListRequest
    },
    async (args, extra) => {
      try {
        const response = await client.tags.groups.list(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_tags_groups", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_tags_groups", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "create_tags_groups",
    {
      description: "Executes the tags.groups.create API method.",
      inputSchema: schemas.ZodTagsGroupsCreateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.tags.groups.create(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_tags_groups", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_tags_groups", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "get_tags_groups",
    {
      description: "Executes the tags.groups.get API method.",
      inputSchema: schemas.ZodTagsGroupsGetRequest
    },
    async (args, extra) => {
      try {
        const response = await client.tags.groups.get(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_tags_groups", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_tags_groups", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "upsert_tags_groups",
    {
      description: "Executes the tags.groups.upsert API method.",
      inputSchema: schemas.ZodTagsGroupsUpsertRequest
    },
    async (args, extra) => {
      try {
        const response = await client.tags.groups.upsert(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "upsert_tags_groups", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "upsert_tags_groups", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "delete_tags_groups",
    {
      description: "Executes the tags.groups.delete API method.",
      inputSchema: schemas.ZodTagsGroupsDeleteRequest
    },
    async (args, extra) => {
      try {
        const response = await client.tags.groups.delete(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_tags_groups", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_tags_groups", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "update_tags_groups",
    {
      description: "Executes the tags.groups.update API method.",
      inputSchema: schemas.ZodTagsGroupsUpdateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.tags.groups.update(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_tags_groups", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_tags_groups", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "list_tags",
    {
      description: "Executes the tags.list API method.",
      inputSchema: schemas.ZodTagsListRequest
    },
    async (args, extra) => {
      try {
        const response = await client.tags.list(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_tags", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_tags", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "create_tags",
    {
      description: "Executes the tags.create API method.",
      inputSchema: schemas.ZodTagsCreateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.tags.create(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_tags", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_tags", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "get_tags",
    {
      description: "Executes the tags.get API method.",
      inputSchema: schemas.ZodTagsGetRequest
    },
    async (args, extra) => {
      try {
        const response = await client.tags.get(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_tags", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_tags", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "upsert_tags",
    {
      description: "Executes the tags.upsert API method.",
      inputSchema: schemas.ZodTagsUpsertRequest
    },
    async (args, extra) => {
      try {
        const response = await client.tags.upsert(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "upsert_tags", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "upsert_tags", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "delete_tags",
    {
      description: "Executes the tags.delete API method.",
      inputSchema: schemas.ZodTagsDeleteRequest
    },
    async (args, extra) => {
      try {
        const response = await client.tags.delete(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_tags", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_tags", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "update_tags",
    {
      description: "Executes the tags.update API method.",
      inputSchema: schemas.ZodTagsUpdateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.tags.update(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_tags", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_tags", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );
}
