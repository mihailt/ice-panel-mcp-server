# Container Architecture (Level 2)
The structural subdivision of the IcePanel MCP ecosystem into independent processes representing the core execution loop, testing infrastructure, and codebase generation.

```mermaid
C4Container
  title Container Diagram for IcePanel MCP Server

  Person(developer, "Developer", "Builder/Maintainer")
  Person(aiAgent, "AI Agent", "MCP Invoker")

  System_Boundary(icepanelMcpServer, "IcePanel MCP Server Integration") {
      Container(mcpRuntime, "Core MCP Server Runtime", "TypeScript / Node.js / Cloudflare", "The persistent execution process handling Model Context Protocol Stdio messaging and SSE HTTP upgrades.")
      
      Container(testingPipeline, "Development & Testing Pipeline", "Vitest / CLI", "The isolated test suites, Cloudflare Wrangler simulators, and robust local E2E verifiers safeguarding the logic execution.")
      
      Container(codegenPipeline, "SDK Code Generator", "TypeScript / AST", "The static offline parser that scrapes @icepanel/sdk typings to auto-transpile the required zod and function abstractions.")
  }

  System_Ext(hostEnvironment, "Host Environment", "Execution Runtime")
  System_Ext(icepanelApi, "IcePanel Cloud API", "Remote Backend Layer")
  System_Ext(icepanelSdk, "@icepanel/sdk Module", "Official Node API Typed SDK")

  Rel(aiAgent, mcpRuntime, "Issues JSON-RPC capability strings", "Stdio / SSE")
  Rel(developer, codegenPipeline, "Executes manual structural generation", "Script")
  Rel(developer, testingPipeline, "Triggers test pipelines automatically", "NPM")
  
  Rel(testingPipeline, mcpRuntime, "Validates input/output boundaries systematically", "E2E")
  Rel(codegenPipeline, mcpRuntime, "Compiles output abstractions into module layer", "File System")
  Rel(codegenPipeline, icepanelSdk, "Scrapes abstract typings", "TypeScript")
  
  Rel(mcpRuntime, icepanelSdk, "Invokes validated structural operations")
  Rel(icepanelSdk, icepanelApi, "Dispatches network operations", "HTTPS REST")
  Rel(hostEnvironment, mcpRuntime, "Bootstraps and hosts execution loops")
```
