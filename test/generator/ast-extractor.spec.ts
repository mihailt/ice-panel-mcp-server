/// <reference types="node" />
import { describe, it, expect } from 'vitest';
import { Project, ts, Type } from 'ts-morph';
import { extractEndpoints } from '../../scripts/generator/ast-extractor';

describe('AST Endpoint Extractor', () => {
    // Helper to get a Type from a snippet
    function getTypeFromCode(code: string, targetName: string = 'TargetType'): Type {
        const project = new Project({ useInMemoryFileSystem: true });
        const sourceFile = project.createSourceFile('test.ts', code);
        const typeAlias = sourceFile.getTypeAlias(targetName) || sourceFile.getInterface(targetName) || sourceFile.getClass(targetName);
        if (!typeAlias) throw new Error(`Could not find type ${targetName}`);
        return typeAlias.getType();
    }

    it('extracts top-level methods', () => {
        const code = `
        type CommentsListRequest = { id: string };
        interface TargetType {
            list(req: CommentsListRequest): Promise<any>;
            create(): Promise<any>;
        }
        `;
        const type = getTypeFromCode(code);
        const endpoints = extractEndpoints(type, ['comments']);
        
        expect(endpoints.length).toBe(2);
        
        const listEp = endpoints.find(e => e.name === 'list');
        expect(listEp).toBeDefined();
        expect(listEp?.namespace).toEqual(['comments']);
        expect(listEp?.paramType?.getText()).toContain('CommentsListRequest');

        const createEp = endpoints.find(e => e.name === 'create');
        expect(createEp).toBeDefined();
        expect(createEp?.namespace).toEqual(['comments']);
        expect(createEp?.paramType).toBeUndefined(); // create has no params in this mock
    });

    it('recursively extracts nested methods', () => {
        const code = `
        interface RepliesClient {
            list(req: any): Promise<any>;
            delete(req: any): Promise<any>;
        }
        interface TargetType {
            get(req: any): Promise<any>;
            replies: RepliesClient;
        }
        `;
        const type = getTypeFromCode(code);
        const endpoints = extractEndpoints(type, ['comments']);
        
        expect(endpoints.length).toBe(3); // comments.get, comments.replies.list, comments.replies.delete
        
        const nestedList = endpoints.find(e => e.name === 'list' && e.namespace.includes('replies'));
        expect(nestedList).toBeDefined();
        expect(nestedList?.namespace).toEqual(['comments', 'replies']);
        
        const topGet = endpoints.find(e => e.name === 'get');
        expect(topGet).toBeDefined();
        expect(topGet?.namespace).toEqual(['comments']);
    });

    it('ignores internal properties starting with underscore', () => {
        const code = `
        interface TargetType {
            _internalCache: any;
            _setup(): void;
            validMethod(): void;
        }
        `;
        const type = getTypeFromCode(code);
        const endpoints = extractEndpoints(type, ['comments']);
        
        expect(endpoints.length).toBe(1);
        expect(endpoints[0].name).toBe('validMethod');
    });
});
