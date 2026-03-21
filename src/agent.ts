import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { McpAgent } from "agents/mcp";
import { IcePanelClient } from "@icepanel/sdk";
import { registerAllTools } from "./generated/index.js";

export type Props = {
	bearerToken: string;
	modules?: string[];
};

// Define our MCP agent with tools
export class IcePanelMcp extends McpAgent<any, any, Props> {
	server = new McpServer({
		name: "IcePanelMcp",
		version: "1.0.0",
	});

	public getClient() {
    const token = this.props?.bearerToken; // Using bearerToken as per Props type
    if (!token) {
      throw new Error("Unauthorized: No IcePanel API token provided via Authorization header.");
    }

    return new IcePanelClient({ apiKey: token, apiVersion: "v1" });
  }

	async init() {
    const client = this.getClient();

    // Register Modular Tools conditionally (with zero-config fallback to discovery 'find_tool')
    const modulesToLoad = this.props?.modules && this.props.modules.length > 0 
      ? this.props.modules 
      : ['find_tool'];

    registerAllTools(this.server, client, modulesToLoad);
  }
}
