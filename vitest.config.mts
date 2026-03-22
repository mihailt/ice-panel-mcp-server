import { defineWorkersConfig } from '@cloudflare/vitest-pool-workers/config';

export default defineWorkersConfig({
	test: {
		coverage: {
			provider: 'istanbul',
			include: ['src/**/*.ts'],
			reporter: ['text', 'json', 'html']
		},
		exclude: [
			'test/generator/**/*.spec.ts',
			'test/e2e/**/*.spec.ts',
			'node_modules',
			'dist',
			'.idea',
			'.git',
			'.cache',
		],
		poolOptions: {
			workers: {
				wrangler: { configPath: './wrangler.jsonc' },
			},
		},
	},
});
