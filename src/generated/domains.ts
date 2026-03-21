import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IcePanelClient } from "@icepanel/sdk";
import * as schemas from "./domains-schemas.js";

// Generated Tool Registration
export function registerDomainsTools(server: McpServer, client: IcePanelClient) {
  server.registerTool(
    "list_domains",
    {
      description: "Executes the domains.list API method.",
      inputSchema: schemas.ZodDomainsListRequest
    },
    async (args, extra) => {
      try {
        const response = await client.domains.list(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_domains", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_domains", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "create_domains",
    {
      description: "Executes the domains.create API method.",
      inputSchema: schemas.ZodDomainsCreateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.domains.create(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_domains", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_domains", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "get_domains",
    {
      description: "Executes the domains.get API method.",
      inputSchema: schemas.ZodDomainsGetRequest
    },
    async (args, extra) => {
      try {
        const response = await client.domains.get(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_domains", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_domains", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "upsert_domains",
    {
      description: "Executes the domains.upsert API method.",
      inputSchema: schemas.ZodDomainsUpsertRequest
    },
    async (args, extra) => {
      try {
        const response = await client.domains.upsert(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "upsert_domains", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "upsert_domains", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "delete_domains",
    {
      description: "Executes the domains.delete API method.",
      inputSchema: schemas.ZodDomainsDeleteRequest
    },
    async (args, extra) => {
      try {
        const response = await client.domains.delete(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_domains", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_domains", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "update_domains",
    {
      description: "Executes the domains.update API method.",
      inputSchema: schemas.ZodDomainsUpdateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.domains.update(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_domains", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_domains", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "exists_domains",
    {
      description: "Executes the domains.exists API method.",
      inputSchema: schemas.ZodDomainsExistsRequest
    },
    async (args, extra) => {
      try {
        const response = await client.domains.exists(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "exists_domains", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "exists_domains", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );
}
