import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IcePanelClient } from "@icepanel/sdk";
import * as schemas from "./flows-schemas.js";

// Generated Tool Registration
export function registerFlowsTools(server: McpServer, client: IcePanelClient) {
  server.registerTool(
    "text_flows_export",
    {
      description: "Executes the flows.export.text API method.",
      inputSchema: schemas.ZodFlowsExportTextRequest
    },
    async (args, extra) => {
      try {
        const response = await client.flows.export.text(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "text_flows_export", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "text_flows_export", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "code_flows_export",
    {
      description: "Executes the flows.export.code API method.",
      inputSchema: schemas.ZodFlowsExportCodeRequest
    },
    async (args, extra) => {
      try {
        const response = await client.flows.export.code(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "code_flows_export", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "code_flows_export", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "mermaid_flows_export",
    {
      description: "Executes the flows.export.mermaid API method.",
      inputSchema: schemas.ZodFlowsExportMermaidRequest
    },
    async (args, extra) => {
      try {
        const response = await client.flows.export.mermaid(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "mermaid_flows_export", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "mermaid_flows_export", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "list_flows",
    {
      description: "Executes the flows.list API method.",
      inputSchema: schemas.ZodFlowsListRequest
    },
    async (args, extra) => {
      try {
        const response = await client.flows.list(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_flows", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_flows", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "create_flows",
    {
      description: "Executes the flows.create API method.",
      inputSchema: schemas.ZodFlowsCreateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.flows.create(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_flows", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_flows", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "get_flows",
    {
      description: "Executes the flows.get API method.",
      inputSchema: schemas.ZodFlowsGetRequest
    },
    async (args, extra) => {
      try {
        const response = await client.flows.get(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_flows", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_flows", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "upsert_flows",
    {
      description: "Executes the flows.upsert API method.",
      inputSchema: schemas.ZodFlowsUpsertRequest
    },
    async (args, extra) => {
      try {
        const response = await client.flows.upsert(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "upsert_flows", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "upsert_flows", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "delete_flows",
    {
      description: "Executes the flows.delete API method.",
      inputSchema: schemas.ZodFlowsDeleteRequest
    },
    async (args, extra) => {
      try {
        const response = await client.flows.delete(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_flows", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_flows", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "update_flows",
    {
      description: "Executes the flows.update API method.",
      inputSchema: schemas.ZodFlowsUpdateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.flows.update(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_flows", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_flows", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "exists_flows",
    {
      description: "Executes the flows.exists API method.",
      inputSchema: schemas.ZodFlowsExistsRequest
    },
    async (args, extra) => {
      try {
        const response = await client.flows.exists(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "exists_flows", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "exists_flows", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "listThumbnails_flows",
    {
      description: "Executes the flows.listThumbnails API method.",
      inputSchema: schemas.ZodFlowsListThumbnailsRequest
    },
    async (args, extra) => {
      try {
        const response = await client.flows.listThumbnails(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "listThumbnails_flows", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "listThumbnails_flows", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "getThumbnail_flows",
    {
      description: "Executes the flows.getThumbnail API method.",
      inputSchema: schemas.ZodFlowsGetThumbnailRequest
    },
    async (args, extra) => {
      try {
        const response = await client.flows.getThumbnail(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "getThumbnail_flows", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "getThumbnail_flows", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );
}
