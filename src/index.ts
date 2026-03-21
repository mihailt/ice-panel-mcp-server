import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { McpAgent } from "agents/mcp";
import { z } from "zod";

// Define our MCP agent with tools
export class IcePanelMcp extends McpAgent {
	server = new McpServer({
		name: "IcePanelMcp",
		version: "1.0.0",
	});

	async init() {
		// Simple hello tool
		this.server.tool("hello", { name: z.string().optional() }, async ({ name }) => ({
			content: [{ type: "text", text: `Hello ${name || "World"}!` }],
		}));
	}
}

export default {
	fetch(request: Request, env: any, ctx: ExecutionContext) {
		const url = new URL(request.url);

		if (url.pathname === "/sse") {
			return IcePanelMcp.serve("/sse").fetch(request, env, ctx);
		}

		return new Response("Not found", { status: 404 });
	},
} satisfies ExportedHandler<any>;

