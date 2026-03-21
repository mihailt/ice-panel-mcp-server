import { IcePanelMcp } from "./agent.js";

export { IcePanelMcp };

export default {
	fetch(request: Request, env: any, ctx: ExecutionContext) {
		const url = new URL(request.url);

		if (url.pathname === "/mcp") {
			const authHeader = request.headers.get("authorization");
			if (!authHeader) return new Response("Unauthorized", { status: 401 });

			const modulesParam = url.searchParams.get("modules");
			const props = {
				bearerToken: authHeader.replace("Bearer ", "").trim(),
				modules: modulesParam ? modulesParam.split(',').map(m => m.trim()) : undefined
			};

			(ctx as ExecutionContext & { props: typeof props }).props = props;
			return IcePanelMcp.serve("/mcp").fetch(request, env, ctx);
		}

		return new Response("Not found", { status: 404 });
	},
} satisfies ExportedHandler<any>;

