import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IcePanelClient } from "@icepanel/sdk";
import * as schemas from "./versions-schemas.js";

// Generated Tool Registration
export function registerVersionsTools(server: McpServer, client: IcePanelClient) {
  server.registerTool(
    "list_versions_reverts",
    {
      description: "Executes the versions.reverts.list API method.",
      inputSchema: schemas.ZodVersionsRevertsListRequest
    },
    async (args, extra) => {
      try {
        const response = await client.versions.reverts.list(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_versions_reverts", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_versions_reverts", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "create_versions_reverts",
    {
      description: "Executes the versions.reverts.create API method.",
      inputSchema: schemas.ZodVersionsRevertsCreateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.versions.reverts.create(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_versions_reverts", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_versions_reverts", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "get_versions_reverts",
    {
      description: "Executes the versions.reverts.get API method.",
      inputSchema: schemas.ZodVersionsRevertsGetRequest
    },
    async (args, extra) => {
      try {
        const response = await client.versions.reverts.get(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_versions_reverts", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_versions_reverts", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "update_versions_reverts",
    {
      description: "Executes the versions.reverts.update API method.",
      inputSchema: schemas.ZodVersionsRevertsUpdateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.versions.reverts.update(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_versions_reverts", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_versions_reverts", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "list_versions",
    {
      description: "Executes the versions.list API method.",
      inputSchema: schemas.ZodVersionsListRequest
    },
    async (args, extra) => {
      try {
        const response = await client.versions.list(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_versions", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_versions", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "create_versions",
    {
      description: "Executes the versions.create API method.",
      inputSchema: schemas.ZodVersionsCreateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.versions.create(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_versions", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_versions", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "get_versions",
    {
      description: "Executes the versions.get API method.",
      inputSchema: schemas.ZodVersionsGetRequest
    },
    async (args, extra) => {
      try {
        const response = await client.versions.get(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_versions", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_versions", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "delete_versions",
    {
      description: "Executes the versions.delete API method.",
      inputSchema: schemas.ZodVersionsDeleteRequest
    },
    async (args, extra) => {
      try {
        const response = await client.versions.delete(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_versions", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_versions", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "update_versions",
    {
      description: "Executes the versions.update API method.",
      inputSchema: schemas.ZodVersionsUpdateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.versions.update(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_versions", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_versions", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );
}
