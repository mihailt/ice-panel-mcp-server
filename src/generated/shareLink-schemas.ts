import { z } from "zod/v4-mini";

// Generated Zod Schemas
export const ZodShareLinkGetRequest = z.object({ "landscapeId": z.string(), "versionId": z.string() });

export const ZodShareLinkGetResponse = z.object({ "shareLink": z.object({ "password": z.optional(z.string()), "protected": z.boolean(), "draftId": z.optional(z.union([z.null(), z.string()])), "createdAt": z.string(), "createdBy": z.enum(["user", "api-key", "notification-key", "service"]), "createdById": z.string(), "id": z.string(), "landscapeId": z.string(), "shortId": z.string(), "updatedAt": z.string(), "updatedBy": z.enum(["user", "api-key", "notification-key", "service"]), "updatedById": z.string(), "versionId": z.string() }), "stats": z.object({ "totalVisitorCount": z.number(), "viewedAt": z.optional(z.string()) }), "url": z.string() });

export const ZodShareLinkCreateRequest = z.object({ "landscapeId": z.string(), "versionId": z.string(), "body": z.object({ "password": z.optional(z.string()), "protected": z.boolean(), "draftId": z.optional(z.union([z.null(), z.string()])) }) });

export const ZodShareLinkCreateResponse = z.object({ "shareLink": z.object({ "password": z.optional(z.string()), "protected": z.boolean(), "draftId": z.optional(z.union([z.null(), z.string()])), "createdAt": z.string(), "createdBy": z.enum(["user", "api-key", "notification-key", "service"]), "createdById": z.string(), "id": z.string(), "landscapeId": z.string(), "shortId": z.string(), "updatedAt": z.string(), "updatedBy": z.enum(["user", "api-key", "notification-key", "service"]), "updatedById": z.string(), "versionId": z.string() }), "url": z.string() });

export const ZodShareLinkDeleteRequest = z.object({ "landscapeId": z.string(), "versionId": z.string() });

export const ZodShareLinkDeleteResponse = z.record(z.string(), z.any());

export const ZodShareLinkUpdateRequest = z.object({ "landscapeId": z.string(), "versionId": z.string(), "resetShortId": z.optional(z.union([z.literal(false), z.literal(true)])), "body": z.object({ "password": z.optional(z.string()), "protected": z.optional(z.union([z.literal(false), z.literal(true)])) }) });

export const ZodShareLinkUpdateResponse = z.object({ "shareLink": z.object({ "password": z.optional(z.string()), "protected": z.boolean(), "draftId": z.optional(z.union([z.null(), z.string()])), "createdAt": z.string(), "createdBy": z.enum(["user", "api-key", "notification-key", "service"]), "createdById": z.string(), "id": z.string(), "landscapeId": z.string(), "shortId": z.string(), "updatedAt": z.string(), "updatedBy": z.enum(["user", "api-key", "notification-key", "service"]), "updatedById": z.string(), "versionId": z.string() }) });
