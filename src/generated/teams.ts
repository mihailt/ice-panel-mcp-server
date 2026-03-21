import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IcePanelClient } from "@icepanel/sdk";
import * as schemas from "./teams-schemas.js";

// Generated Tool Registration
export function registerTeamsTools(server: McpServer, client: IcePanelClient) {
  server.registerTool(
    "list_teams",
    {
      description: "Executes the teams.list API method.",
      inputSchema: schemas.ZodTeamsListRequest
    },
    async (args, extra) => {
      try {
        const response = await client.teams.list(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_teams", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_teams", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "create_teams",
    {
      description: "Executes the teams.create API method.",
      inputSchema: schemas.ZodTeamsCreateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.teams.create(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_teams", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_teams", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "get_teams",
    {
      description: "Executes the teams.get API method.",
      inputSchema: schemas.ZodTeamsGetRequest
    },
    async (args, extra) => {
      try {
        const response = await client.teams.get(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_teams", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_teams", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "delete_teams",
    {
      description: "Executes the teams.delete API method.",
      inputSchema: schemas.ZodTeamsDeleteRequest
    },
    async (args, extra) => {
      try {
        const response = await client.teams.delete(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_teams", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_teams", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "update_teams",
    {
      description: "Executes the teams.update API method.",
      inputSchema: schemas.ZodTeamsUpdateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.teams.update(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_teams", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_teams", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "listLandscapes_teams",
    {
      description: "Executes the teams.listLandscapes API method.",
      inputSchema: schemas.ZodTeamsListLandscapesRequest
    },
    async (args, extra) => {
      try {
        const response = await client.teams.listLandscapes(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "listLandscapes_teams", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "listLandscapes_teams", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "listModelObjects_teams",
    {
      description: "Executes the teams.listModelObjects API method.",
      inputSchema: schemas.ZodTeamsListModelObjectsRequest
    },
    async (args, extra) => {
      try {
        const response = await client.teams.listModelObjects(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "listModelObjects_teams", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "listModelObjects_teams", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );
}
