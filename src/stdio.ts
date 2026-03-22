import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { IcePanelClient } from "@icepanel/sdk";
import { registerAllTools } from "./generated/index.js";

const token = process.env.DOCKER_ICEPANEL_API_KEY || "(hidden)";
const client = new IcePanelClient({ apiKey: token, apiVersion: "v1" });
const server = new McpServer({ name: "IcePanel MCP", version: "0.1.0" });

const modulesToLoad = ['find_tool'];
registerAllTools(server, client, modulesToLoad);

const transport = new StdioServerTransport();
server.connect(transport).catch(console.error);
