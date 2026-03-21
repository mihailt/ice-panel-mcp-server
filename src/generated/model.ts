import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IcePanelClient } from "@icepanel/sdk";
import * as schemas from "./model-schemas.js";

// Generated Tool Registration
export function registerModelTools(server: McpServer, client: IcePanelClient) {
  server.registerTool(
    "csv_model_connections_export",
    {
      description: "Executes the model.connections.export.csv API method.",
      inputSchema: schemas.ZodModelConnectionsExportCsvRequest
    },
    async (args, extra) => {
      try {
        const response = await client.model.connections.export.csv(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "csv_model_connections_export", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "csv_model_connections_export", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "list_model_connections",
    {
      description: "Executes the model.connections.list API method.",
      inputSchema: schemas.ZodModelConnectionsListRequest
    },
    async (args, extra) => {
      try {
        const response = await client.model.connections.list(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_model_connections", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_model_connections", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "create_model_connections",
    {
      description: "Executes the model.connections.create API method.",
      inputSchema: schemas.ZodModelConnectionsCreateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.model.connections.create(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_model_connections", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_model_connections", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "get_model_connections",
    {
      description: "Executes the model.connections.get API method.",
      inputSchema: schemas.ZodModelConnectionsGetRequest
    },
    async (args, extra) => {
      try {
        const response = await client.model.connections.get(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_model_connections", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_model_connections", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "upsert_model_connections",
    {
      description: "Executes the model.connections.upsert API method.",
      inputSchema: schemas.ZodModelConnectionsUpsertRequest
    },
    async (args, extra) => {
      try {
        const response = await client.model.connections.upsert(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "upsert_model_connections", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "upsert_model_connections", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "delete_model_connections",
    {
      description: "Executes the model.connections.delete API method.",
      inputSchema: schemas.ZodModelConnectionsDeleteRequest
    },
    async (args, extra) => {
      try {
        const response = await client.model.connections.delete(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_model_connections", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_model_connections", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "update_model_connections",
    {
      description: "Executes the model.connections.update API method.",
      inputSchema: schemas.ZodModelConnectionsUpdateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.model.connections.update(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_model_connections", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_model_connections", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "generateDescription_model_connections",
    {
      description: "Executes the model.connections.generateDescription API method.",
      inputSchema: schemas.ZodModelConnectionsGenerateDescriptionRequest
    },
    async (args, extra) => {
      try {
        const response = await client.model.connections.generateDescription(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "generateDescription_model_connections", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "generateDescription_model_connections", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "dependenciesJson_model_objects_export",
    {
      description: "Executes the model.objects.export.dependenciesJson API method.",
      inputSchema: schemas.ZodModelObjectsExportDependenciesJsonRequest
    },
    async (args, extra) => {
      try {
        const response = await client.model.objects.export.dependenciesJson(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "dependenciesJson_model_objects_export", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "dependenciesJson_model_objects_export", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "csv_model_objects_export",
    {
      description: "Executes the model.objects.export.csv API method.",
      inputSchema: schemas.ZodModelObjectsExportCsvRequest
    },
    async (args, extra) => {
      try {
        const response = await client.model.objects.export.csv(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "csv_model_objects_export", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "csv_model_objects_export", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "list_model_objects",
    {
      description: "Executes the model.objects.list API method.",
      inputSchema: schemas.ZodModelObjectsListRequest
    },
    async (args, extra) => {
      try {
        const response = await client.model.objects.list(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_model_objects", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "list_model_objects", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "create_model_objects",
    {
      description: "Executes the model.objects.create API method.",
      inputSchema: schemas.ZodModelObjectsCreateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.model.objects.create(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_model_objects", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "create_model_objects", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "get_model_objects",
    {
      description: "Executes the model.objects.get API method.",
      inputSchema: schemas.ZodModelObjectsGetRequest
    },
    async (args, extra) => {
      try {
        const response = await client.model.objects.get(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_model_objects", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "get_model_objects", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "upsert_model_objects",
    {
      description: "Executes the model.objects.upsert API method.",
      inputSchema: schemas.ZodModelObjectsUpsertRequest
    },
    async (args, extra) => {
      try {
        const response = await client.model.objects.upsert(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "upsert_model_objects", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "upsert_model_objects", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "delete_model_objects",
    {
      description: "Executes the model.objects.delete API method.",
      inputSchema: schemas.ZodModelObjectsDeleteRequest
    },
    async (args, extra) => {
      try {
        const response = await client.model.objects.delete(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_model_objects", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "delete_model_objects", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );

  server.registerTool(
    "update_model_objects",
    {
      description: "Executes the model.objects.update API method.",
      inputSchema: schemas.ZodModelObjectsUpdateRequest
    },
    async (args, extra) => {
      try {
        const response = await client.model.objects.update(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_model_objects", success: true, data: response }, null, 2)
            }
          ]
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ tool: "update_model_objects", success: false, error: { message: error.message, status: error.statusCode } }, null, 2)
            }
          ],
          isError: true
        };
      }
    }
  );
}
