import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IcePanelClient } from "@icepanel/sdk";
import * as schemas from "./catalog-schemas.js";

// Generated Tool Registration
export function registerCatalogTools(server: McpServer, client: IcePanelClient) {
  server.registerTool(
    "createSignedIconUrl_catalog_technologies",
    {
      description: "Executes the catalog.technologies.createSignedIconUrl API method.",
      inputSchema: schemas.ZodCatalogTechnologiesCreateSignedIconUrlRequest
    },
    async (args, extra) => {
      try {
        const response = await client.catalog.technologies.createSignedIconUrl(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "createSignedIconUrl_catalog_technologies", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "createSignedIconUrl_catalog_technologies", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "get_catalog_technologies",
    {
      description: "Executes the catalog.technologies.get API method.",
      inputSchema: schemas.ZodCatalogTechnologiesGetRequest
    },
    async (args, extra) => {
      try {
        const response = await client.catalog.technologies.get(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_catalog_technologies", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_catalog_technologies", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );
}
