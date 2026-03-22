import { IcePanelMcp } from "./agent.js";

export { IcePanelMcp };

export default {
	fetch(request: Request, env: any, ctx: ExecutionContext) {
		const url = new URL(request.url);

		if (url.pathname.startsWith("/mcp")) {
			const authHeader = request.headers.get("Authorization") || request.headers.get("authorization");
			const bearerToken = authHeader?.startsWith("Bearer ")
				? authHeader.slice(7).trim()
				: undefined;

			if (!bearerToken) {
				return new Response("Unauthorized", { status: 401 });
			}

			const modulesParam = url.searchParams.get("modules");
			const props = {
				bearerToken,
				modules: modulesParam ? modulesParam.split(',').map(m => m.trim()) : undefined
			};

			(ctx as ExecutionContext & { props: typeof props }).props = props;

			// Using .serve("/mcp") securely initializes the `createLegacySseHandler` natively supporting MCP POST JSON-RPC payloads
			return IcePanelMcp.serve("/mcp").fetch(request, env, ctx);
		}

		return new Response("Not found", { status: 404 });
	},
} satisfies ExportedHandler<any>;

