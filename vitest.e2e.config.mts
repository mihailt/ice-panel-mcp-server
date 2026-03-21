import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		include: ['test/e2e/**/*.spec.ts'],
		exclude: [
			'test/generated/**/*.spec.ts',
			'test/generator/**/*.spec.ts',
			'node_modules',
			'dist',
		],
		testTimeout: 30000, // E2E tests take longer
		// Note: We deliberately do NOT use defineWorkersConfig here.
		// E2E tests run in a standard Node.js environment (so dotenv and real network requests work natively),
		// and they communicate with the externally running `wrangler dev` server over HTTP/SSE.
	},
});
