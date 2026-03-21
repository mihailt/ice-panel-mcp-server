# IcePanel MCP Server

MCP server for the [IcePanel](https://icepanel.io) API, built on Cloudflare Workers.

## Features

- 🔍 **Zero-config discovery** — `find_tool` searches all tools by name, description, or module
- ⚡ **Universal executor** — `execute_tool` dynamically invokes any discovered tool
- 📦 **Modular loading** — `?modules=diagrams,model` loads only what you need

### Available Modules

`catalog` · `comments` · `diagrams` · `domains` · `drafts` · `flows` · `landscapes` · `model` · `organizations` · `shareLink` · `tags` · `teams` · `versions`

## Usage (Client Configuration)

Add to your MCP config (`mcp_config.json`, Cursor Settings, Claude Desktop, etc.):

```json
"ice-panel": {
  "serverUrl": "https://<your-worker-name>.workers.dev/mcp",
  "headers": {
    "Authorization": "Bearer <your-icepanel-api-token>"
  }
}
```

Generate an API token from [IcePanel Settings](https://app.icepanel.io).

## Available Scripts

This project includes the following `pnpm` scripts:

| Command | Description |
|---|---|
| `pnpm run dev` (or `start`) | Starts the local `wrangler dev` server on `http://localhost:8787/mcp`. |
| `pnpm run deploy` | Deploys the production build to Cloudflare Workers. |
| `pnpm run codegen` | Automatically regenerates all SDK tool wrappers inside `src/`. |
| `pnpm test` | Runs the offline unit test suite checking output serialization. |
| `pnpm run test:coverage` | Runs unit tests and yields the Istanbul code coverage breakdown. |
| `pnpm run test:e2e` | Runs the live integration suite testing upstream IcePanel API connectivity. |
| `pnpm run cf-typegen` | Updates Cloudflare environment types. |

## Development

Tool wrappers are auto-generated from the [@icepanel/sdk](https://www.npmjs.com/package/@icepanel/sdk) NPM package types, managed directly from the official [IcePanel/icepanel-js](https://github.com/IcePanel/icepanel-js) repository.

```bash
pnpm install
pnpm run codegen
pnpm run dev
```

## Testing

### Unit Tests & Coverage

We maintain 100% test coverage across all generated wrappers and schemas locally.

```bash
pnpm test
pnpm run test:coverage 
```

```text
-------------------|---------|----------|---------|---------|
File               | % Stmts | % Branch | % Funcs | % Lines |
-------------------|---------|----------|---------|---------|
All files          |     100 |      100 |     100 |     100 |
 ...log-schemas.ts |     100 |      100 |     100 |     100 |
 catalog.ts        |     100 |      100 |     100 |     100 |
 ...nts-schemas.ts |     100 |      100 |     100 |     100 |
 comments.ts       |     100 |      100 |     100 |     100 |
 ...ams-schemas.ts |     100 |      100 |     100 |     100 |
 diagrams.ts       |     100 |      100 |     100 |     100 |
 ...ins-schemas.ts |     100 |      100 |     100 |     100 |
 domains.ts        |     100 |      100 |     100 |     100 |
 drafts-schemas.ts |     100 |      100 |     100 |     100 |
 drafts.ts         |     100 |      100 |     100 |     100 |
 ...ool-schemas.ts |     100 |      100 |     100 |     100 |
 find_tool.ts      |     100 |      100 |     100 |     100 |
 flows-schemas.ts  |     100 |      100 |     100 |     100 |
 flows.ts          |     100 |      100 |     100 |     100 |
 index.ts          |     100 |      100 |     100 |     100 |
 ...pes-schemas.ts |     100 |      100 |     100 |     100 |
 landscapes.ts     |     100 |      100 |     100 |     100 |
 model-schemas.ts  |     100 |      100 |     100 |     100 |
 model.ts          |     100 |      100 |     100 |     100 |
 ...ons-schemas.ts |     100 |      100 |     100 |     100 |
 organizations.ts  |     100 |      100 |     100 |     100 |
 ...ink-schemas.ts |     100 |      100 |     100 |     100 |
 shareLink.ts      |     100 |      100 |     100 |     100 |
 tags-schemas.ts   |     100 |      100 |     100 |     100 |
 tags.ts           |     100 |      100 |     100 |     100 |
 teams-schemas.ts  |     100 |      100 |     100 |     100 |
 teams.ts          |     100 |      100 |     100 |     100 |
 ...ons-schemas.ts |     100 |      100 |     100 |     100 |
 versions.ts       |     100 |      100 |     100 |     100 |
-------------------|---------|----------|---------|---------|
```

### End-to-End Testing

To run the live E2E test suite against the actual IcePanel API:

1. Create a `.env` file in the root directory:
   ```env
   E2E_TEST_ICEPANEL_API_KEY=your_api_key_here
   ```
2. Start the local server in one terminal: `pnpm run dev`
3. Run the E2E suite in another terminal: `pnpm run test:e2e`

#### Known Limitations (Skipped Tests)

The E2E suite contains 48 exhaustive assertions. Two tests are formally tracked as conditionally skipped (`it.skip`) to account for proven upstream constraints in the IcePanel API when authenticating via API Keys:
1. **`delete_comments_replies`**: Throws a `401 Unauthorized` ("Comment reply was created by another user") because the backend lacks identity tracking for API Keys exclusively on this nested route.
2. **`create_versions_reverts`**: Throws a `422 Unprocessable Entity` ("User not provided") because restoring a version demands a user profile that API Keys do not inherently possess.