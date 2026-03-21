import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IcePanelClient } from "@icepanel/sdk";
import * as schemas from "./shareLink-schemas.js";

// Generated Tool Registration
export function registerShareLinkTools(server: McpServer, client: IcePanelClient) {
  server.registerTool(
    "get_shareLink",
    {
      description: "Executes the shareLink.get API method.",
      inputSchema: schemas.ZodShareLinkGetRequest
    },
    async (args, extra) => {
      try {
        const response = await client.shareLink.get(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_shareLink", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_shareLink", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "create_shareLink",
    {
      description: "Executes the shareLink.create API method.",
      inputSchema: schemas.ZodShareLinkCreateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.shareLink.create(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_shareLink", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_shareLink", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "delete_shareLink",
    {
      description: "Executes the shareLink.delete API method.",
      inputSchema: schemas.ZodShareLinkDeleteRequest
    },
    async (args, extra) => {
      try {
        const response = await client.shareLink.delete(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_shareLink", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_shareLink", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "update_shareLink",
    {
      description: "Executes the shareLink.update API method.",
      inputSchema: schemas.ZodShareLinkUpdateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.shareLink.update(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_shareLink", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_shareLink", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );
}
