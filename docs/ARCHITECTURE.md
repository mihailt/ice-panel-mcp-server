# IcePanel MCP Server Architecture

> 📊 **[View Interactive Architecture Diagrams on IcePanel](https://s.icepanel.io/W4aTobhklkvDMF/Lc23)**

![IcePanel Sequence Execution Demo](./docs/assets/icepanel_flows_demo.webp)

## Executive Summary

The IcePanel MCP Server serves as the critical connective tissue between intelligent local agents (like IDE assistants) and the remote IcePanel Cloud ecosystem. Implementating the robust Model Context Protocol (MCP), it exposes deep domain capabilities via a dynamically generated, mathematically strict JSON-RPC interface. This empowers end-users and AI systems to autonomously query, mutate, and synchronize complex C4 models utilizing native typings bridged synchronously with the official `@icepanel/sdk`.

---

## 1. System Architecture (Level 1)

The macro-level interaction boundaries bridging external dependencies and runtime operators.

```mermaid
C4Context
  title System Context diagram for IcePanel MCP Server

  Person(developer, "Developer", "Builds, tests, and configurations the MCP server codebase")
  Person(aiAgent, "AI Agent", "Operates the MCP protocol capabilities via JSON-RPC integrations")

  System(icepanelMcpServer, "IcePanel MCP Server", "Dynamic Model Context Protocol server exposing robust IcePanel API abstractions to local IDEs")

  System_Ext(hostEnvironment, "Host Environment", "Local machine runtime (Node.js/Bun) or Cloudflare Workers proxy edge")
  System_Ext(icepanelApi, "IcePanel Cloud API", "Remote IcePanel persistent data structures and infrastructure components")
  System_Ext(icepanelSdk, "@icepanel/sdk Module", "Official Node API SDK wrapping type abstractions")

  Rel(aiAgent, icepanelMcpServer, "Invokes capability tool commands and requests datasets")
  Rel(developer, icepanelMcpServer, "Manages execution environment variables")
  
  Rel(icepanelMcpServer, icepanelSdk, "Synchronizes diagrams, nodes, and configurations using")
  Rel(icepanelSdk, icepanelApi, "Executes remote HTTPS calls", "REST")
  Rel(icepanelMcpServer, hostEnvironment, "Executes system-level operational dependencies")
```

---

## 2. Container Architecture (Level 2)

The fundamental application modules and processes segregating runtime boundaries, structural testing, and abstract transpilation loops.

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

---

## 3. Component Architecture (Level 3)

Granular decoupling of internal executable dependencies physically homed within the Core Runtime process.

```mermaid
C4Component
  title Component Diagram for Core MCP Server Runtime (App)

  Container(aiAgent, "AI Agent", "Client Application", "Issues JSON-RPC requests")
  System_Ext(icepanelSdk, "@icepanel/sdk Module", "Official Node API Abstraction")
  System_Ext(icepanelApi, "IcePanel Cloud API", "Remote C4 synchronization service")

  Container_Boundary(mcpRuntime, "Core MCP Server Runtime") {
      Component(protocolRouterLayer, "Protocol Router Layer", "Hono / MCP API", "Manages the raw JSON-RPC lifecycle, parsing Stdio standard inputs, maintaining open SSE connections, and routing native single (`run_tool`) or optimized bulk array sequences (`batch_run_tool`) efficiently.")
      
      Component(zodValidators, "Zod Schema Validators", "Zod", "Applies mathematically strict structural boundary checks to inbound arrays and singular tooling arguments based on the autogenerated typings.")
      
      Component(domainCapabilities, "Domain Capabilities Logic", "TypeScript Modules", "The autonomous functional modules that actually fulfill distinct domain-specific user capabilities (e.g., Diagrams, Connections, Tags, Teams modules).")
      
      Component(icePanelClient, "IcePanel Cloud Client", "Fetch API", "Centralized outbound wrapper handling Bearer token authentication headers, dynamic API endpoint routing, and result pagination to the remote server.")
  }

  Rel(aiAgent, protocolRouterLayer, "Calls MCP Tools")
  
  Rel(protocolRouterLayer, zodValidators, "Passes JSON-RPC payload for sanitization")
  Rel(protocolRouterLayer, domainCapabilities, "Routes sanitized tool invocations to functional handlers")

  Rel(domainCapabilities, icePanelClient, "Invokes specific API queries using authenticated wrapper")
  Rel(icePanelClient, icepanelSdk, "Invokes typed functions")
  Rel(icepanelSdk, icepanelApi, "Executes physical HTTPS operations", "REST JSON")
```

---

## 4. Deployment & Testing Flow

The IcePanel MCP Server ecosystem strongly isolates static operational pipelines from real-time persistent execution:

1. **Typings Scrapers**: The `codegenPipeline` container independently invokes offline AST parsers on official typings, physically emitting structural bindings into the `File System`. These rigid boundary schemas guarantee mathematical safety before instantiation.
2. **Local Simulation Validation**: Operations are funneled through the strict `Development & Testing Pipeline` containing exhaustive `Vitest` unit checks and robust `E2E` runtime checks validating the `Stido/SSE` abstractions.
3. **Execution Runtime Contexts**: Natively compiled server logic dynamically boots under specific Node.js or Cloudflare Wrangler Host Environments, executing identical domain handlers. 
4. **Cloud API Resolution**: Synchronous interactions physically traverse the `Official API SDK` wrapping logic before securely concluding at the actual persistent IcePanel Cloud databases via tokenized HTTPS REST interfaces.
