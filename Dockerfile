FROM node:22

# Enable performant corepack package management natively
RUN corepack enable && corepack prepare pnpm@latest --activate


WORKDIR /app

# Safely copy dependency descriptors before source execution
COPY package.json pnpm-lock.yaml ./

# Freeze dependencies logically isolated
RUN pnpm install --frozen-lockfile

# Copy physical AST scraping scripts, configurations, and internal logic
COPY . .

# Prevent npm package managers from dumping noisy exec warnings to stdout which entirely corrupt the active JSON-RPC Stream
RUN npm install -g tsx

# Mount the static 8787 Cloudflare worker bridge locally natively
# EXPOSE 8787 -> No longer required, as we are leveraging the Web Standard MCP `stdio` stream instead.

# Execute explicit pristine Typescript without polluting stdout natively matching github-mcp-server streams completely flawlessly
ENTRYPOINT ["tsx", "src/stdio.ts"]
