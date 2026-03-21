/// <reference types="node" />
import { describe, it, expect } from 'vitest';
import { Project, ts, Type } from 'ts-morph';
import { typeToZod } from '../../scripts/generator/zod-mapper';

describe('AST to Zod Mapper (ts-morph)', () => {
    // Helper to get a Type from a snippet
    function getTypeFromCode(code: string, typeName: string = 'TestType'): Type {
        const project = new Project({
            compilerOptions: { strict: true }
        });
        const sourceFile = project.createSourceFile('test.ts', code);
        const typeAlias = sourceFile.getTypeAliasOrThrow(typeName);
        return typeAlias.getType();
    }

    it('maps string primitives correctly', () => {
        const type = getTypeFromCode(`export type TestType = string;`);
        expect(typeToZod(type)).toBe('z.string()');
    });

    it('maps number primitives correctly', () => {
        const type = getTypeFromCode(`export type TestType = number;`);
        expect(typeToZod(type)).toBe('z.number()');
    });

    it('maps boolean primitives correctly', () => {
        const type = getTypeFromCode(`export type TestType = boolean;`);
        expect(typeToZod(type)).toBe('z.boolean()');
    });

    it('maps array types correctly', () => {
        const type = getTypeFromCode(`export type TestType = string[];`);
        expect(typeToZod(type)).toBe('z.array(z.string())');
    });

    it('maps simple object properties correctly', () => {
        const type = getTypeFromCode(`
            export type TestType = {
                id: string;
                count: number;
            };
        `);
        // Note: Formatting might include newlines depending on implementation, 
        // we'll assume a single line output for simplicity in this test
        expect(typeToZod(type)).toBe('z.object({ "id": z.string(), "count": z.number() })');
    });

    it('maps optional object properties correctly', () => {
        const type = getTypeFromCode(`
            export type TestType = {
                name?: string;
            };
        `);
        expect(typeToZod(type)).toBe('z.object({ "name": z.string().optional() })');
    });

    it('maps union types correctly', () => {
        const type = getTypeFromCode(`export type TestType = string | number;`);
        expect(typeToZod(type)).toBe('z.union([z.string(), z.number()])');
    });

    it('maps string literal unions to z.enum', () => {
        const type = getTypeFromCode(`export type TestType = 'open' | 'closed' | 'resolved';`);
        expect(typeToZod(type)).toBe('z.enum(["open", "closed", "resolved"])');
    });

    it('maps Record<string, T> types correctly', () => {
        const type = getTypeFromCode(`export type TestType = Record<string, number>;`);
        expect(typeToZod(type)).toBe('z.record(z.string(), z.number())');
    });
});
