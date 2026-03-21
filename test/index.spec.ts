import { env, createExecutionContext, waitOnExecutionContext, SELF } from 'cloudflare:test';
import { describe, it, expect, vi } from 'vitest';
import worker from '../src';

vi.mock('../src/agent.js', () => {
	const createMockFetch = () => vi.fn().mockImplementation(() => new Response('Missing Mcp-Session-Id', { status: 400 }));
	return {
		IcePanelMcp: {
			serve: vi.fn().mockReturnValue({ fetch: createMockFetch() })
		}
	};
});

describe('IcePanel MCP Worker', () => {
	describe('request for /', () => {
		it('responds with "Not found" 404', async () => {
			const request = new Request('http://example.com/');
			const ctx = createExecutionContext();
			const response = await worker.fetch(request as any, env, ctx);
			await waitOnExecutionContext(ctx);
			expect(response.status).toBe(404);
			expect(await response.text()).toBe('Not found');
		});
	});

	describe('request for /mcp', () => {
		it('responds with 401 Unauthorized if no Auth header', async () => {
			const request = new Request('http://example.com/mcp');
			const ctx = createExecutionContext();
			const response = await worker.fetch(request as any, env, ctx);
			await waitOnExecutionContext(ctx);
			expect(response.status).toBe(401);
			expect(await response.text()).toBe('Unauthorized');
		});

		it('passes Auth and reaches MCP layer (returns 400 Bad Request without proper MCP headers)', async () => {
			const request = new Request('http://example.com/mcp', {
				headers: {
					'Authorization': 'Bearer test-token',
					'Content-Type': 'application/json'
				}
			});
			const ctx = createExecutionContext();
			const response = await worker.fetch(request as any, env, ctx);
			await waitOnExecutionContext(ctx);
			expect(response.status).toBe(400);
			expect(await response.text()).toContain('Mcp-Session-Id');
		});
	});
});
