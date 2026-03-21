import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IcePanelClient } from "@icepanel/sdk";
import * as schemas from "./organizations-schemas.js";

// Generated Tool Registration
export function registerOrganizationsTools(server: McpServer, client: IcePanelClient) {
  server.registerTool(
    "list_organizations_landscapes",
    {
      description: "Executes the organizations.landscapes.list API method.",
      inputSchema: schemas.ZodOrganizationsLandscapesListRequest
    },
    async (args, extra) => {
      try {
        const response = await client.organizations.landscapes.list(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_organizations_landscapes", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_organizations_landscapes", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "create_organizations_landscapes",
    {
      description: "Executes the organizations.landscapes.create API method.",
      inputSchema: schemas.ZodOrganizationsLandscapesCreateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.organizations.landscapes.create(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_organizations_landscapes", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_organizations_landscapes", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "byType_organizations_logs_stats",
    {
      description: "Executes the organizations.logs.stats.byType API method.",
      inputSchema: schemas.ZodOrganizationsLogsStatsByTypeRequest
    },
    async (args, extra) => {
      try {
        const response = await client.organizations.logs.stats.byType(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "byType_organizations_logs_stats", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "byType_organizations_logs_stats", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "byEntity_organizations_logs_stats",
    {
      description: "Executes the organizations.logs.stats.byEntity API method.",
      inputSchema: schemas.ZodOrganizationsLogsStatsByEntityRequest
    },
    async (args, extra) => {
      try {
        const response = await client.organizations.logs.stats.byEntity(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "byEntity_organizations_logs_stats", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "byEntity_organizations_logs_stats", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "list_organizations_logs",
    {
      description: "Executes the organizations.logs.list API method.",
      inputSchema: schemas.ZodOrganizationsLogsListRequest
    },
    async (args, extra) => {
      try {
        const response = await client.organizations.logs.list(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_organizations_logs", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_organizations_logs", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "get_organizations_logs",
    {
      description: "Executes the organizations.logs.get API method.",
      inputSchema: schemas.ZodOrganizationsLogsGetRequest
    },
    async (args, extra) => {
      try {
        const response = await client.organizations.logs.get(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_organizations_logs", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_organizations_logs", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "list_organizations_technologies",
    {
      description: "Executes the organizations.technologies.list API method.",
      inputSchema: schemas.ZodOrganizationsTechnologiesListRequest
    },
    async (args, extra) => {
      try {
        const response = await client.organizations.technologies.list(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_organizations_technologies", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_organizations_technologies", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "create_organizations_technologies",
    {
      description: "Executes the organizations.technologies.create API method.",
      inputSchema: schemas.ZodOrganizationsTechnologiesCreateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.organizations.technologies.create(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_organizations_technologies", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_organizations_technologies", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "get_organizations_technologies",
    {
      description: "Executes the organizations.technologies.get API method.",
      inputSchema: schemas.ZodOrganizationsTechnologiesGetRequest
    },
    async (args, extra) => {
      try {
        const response = await client.organizations.technologies.get(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_organizations_technologies", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_organizations_technologies", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "delete_organizations_technologies",
    {
      description: "Executes the organizations.technologies.delete API method.",
      inputSchema: schemas.ZodOrganizationsTechnologiesDeleteRequest
    },
    async (args, extra) => {
      try {
        const response = await client.organizations.technologies.delete(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_organizations_technologies", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_organizations_technologies", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "update_organizations_technologies",
    {
      description: "Executes the organizations.technologies.update API method.",
      inputSchema: schemas.ZodOrganizationsTechnologiesUpdateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.organizations.technologies.update(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_organizations_technologies", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_organizations_technologies", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "list_organizations_users_invites",
    {
      description: "Executes the organizations.users.invites.list API method.",
      inputSchema: schemas.ZodOrganizationsUsersInvitesListRequest
    },
    async (args, extra) => {
      try {
        const response = await client.organizations.users.invites.list(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_organizations_users_invites", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_organizations_users_invites", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "create_organizations_users_invites",
    {
      description: "Executes the organizations.users.invites.create API method.",
      inputSchema: schemas.ZodOrganizationsUsersInvitesCreateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.organizations.users.invites.create(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_organizations_users_invites", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_organizations_users_invites", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "revoke_organizations_users_invites",
    {
      description: "Executes the organizations.users.invites.revoke API method.",
      inputSchema: schemas.ZodOrganizationsUsersInvitesRevokeRequest
    },
    async (args, extra) => {
      try {
        const response = await client.organizations.users.invites.revoke(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "revoke_organizations_users_invites", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "revoke_organizations_users_invites", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "list_organizations_users",
    {
      description: "Executes the organizations.users.list API method.",
      inputSchema: schemas.ZodOrganizationsUsersListRequest
    },
    async (args, extra) => {
      try {
        const response = await client.organizations.users.list(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_organizations_users", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_organizations_users", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "delete_organizations_users",
    {
      description: "Executes the organizations.users.delete API method.",
      inputSchema: schemas.ZodOrganizationsUsersDeleteRequest
    },
    async (args, extra) => {
      try {
        const response = await client.organizations.users.delete(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_organizations_users", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_organizations_users", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "update_organizations_users",
    {
      description: "Executes the organizations.users.update API method.",
      inputSchema: schemas.ZodOrganizationsUsersUpdateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.organizations.users.update(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_organizations_users", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_organizations_users", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "list_organizations",
    {
      description: "Executes the organizations.list API method.",
      inputSchema: schemas.ZodOrganizationsListRequest
    },
    async (args, extra) => {
      try {
        const response = await client.organizations.list(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_organizations", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_organizations", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "create_organizations",
    {
      description: "Executes the organizations.create API method.",
      inputSchema: schemas.ZodOrganizationsCreateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.organizations.create(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_organizations", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_organizations", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "get_organizations",
    {
      description: "Executes the organizations.get API method.",
      inputSchema: schemas.ZodOrganizationsGetRequest
    },
    async (args, extra) => {
      try {
        const response = await client.organizations.get(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_organizations", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_organizations", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "delete_organizations",
    {
      description: "Executes the organizations.delete API method.",
      inputSchema: schemas.ZodOrganizationsDeleteRequest
    },
    async (args, extra) => {
      try {
        const response = await client.organizations.delete(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_organizations", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_organizations", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "update_organizations",
    {
      description: "Executes the organizations.update API method.",
      inputSchema: schemas.ZodOrganizationsUpdateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.organizations.update(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_organizations", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_organizations", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );
}
