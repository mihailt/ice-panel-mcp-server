import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IcePanelClient } from "@icepanel/sdk";

import { registerCommentsTools } from "./comments.js";
import { registerDiagramsTools } from "./diagrams.js";
import { registerDomainsTools } from "./domains.js";
import { registerDraftsTools } from "./drafts.js";
import { registerFlowsTools } from "./flows.js";
import { registerLandscapesTools } from "./landscapes.js";
import { registerOrganizationsTools } from "./organizations.js";
import { registerShareLinkTools } from "./shareLink.js";
import { registerTagsTools } from "./tags.js";
import { registerTeamsTools } from "./teams.js";
import { registerVersionsTools } from "./versions.js";
import { registerCatalogTools } from "./catalog.js";
import { registerModelTools } from "./model.js";
import { registerFind_toolTools } from "./find_tool.js";

export function registerAllTools(server: McpServer, client: IcePanelClient, allowedModules?: string[]) {
  if (!allowedModules || allowedModules.includes('comments')) registerCommentsTools(server, client);
  if (!allowedModules || allowedModules.includes('diagrams')) registerDiagramsTools(server, client);
  if (!allowedModules || allowedModules.includes('domains')) registerDomainsTools(server, client);
  if (!allowedModules || allowedModules.includes('drafts')) registerDraftsTools(server, client);
  if (!allowedModules || allowedModules.includes('flows')) registerFlowsTools(server, client);
  if (!allowedModules || allowedModules.includes('landscapes')) registerLandscapesTools(server, client);
  if (!allowedModules || allowedModules.includes('organizations')) registerOrganizationsTools(server, client);
  if (!allowedModules || allowedModules.includes('shareLink')) registerShareLinkTools(server, client);
  if (!allowedModules || allowedModules.includes('tags')) registerTagsTools(server, client);
  if (!allowedModules || allowedModules.includes('teams')) registerTeamsTools(server, client);
  if (!allowedModules || allowedModules.includes('versions')) registerVersionsTools(server, client);
  if (!allowedModules || allowedModules.includes('catalog')) registerCatalogTools(server, client);
  if (!allowedModules || allowedModules.includes('model')) registerModelTools(server, client);
  if (!allowedModules || allowedModules.includes('find_tool')) registerFind_toolTools(server, client);
}
