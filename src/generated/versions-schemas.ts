import { z } from "zod/v4-mini";

// Generated Zod Schemas
export const ZodVersionsRevertsListRequest = z.object({ "landscapeId": z.string() });

export const ZodVersionsRevertsListResponse = z.object({ "versionReverts": z.array(z.object({ "notes": z.string(), "versionId": z.string(), "createdAt": z.string(), "createdBy": z.enum(["user", "api-key", "notification-key", "service"]), "createdById": z.string(), "diagramHandleIds": z.array(z.string()), "id": z.string(), "landscapeId": z.string(), "updatedAt": z.string(), "updatedBy": z.enum(["user", "api-key", "notification-key", "service"]), "updatedById": z.string() })) });

export const ZodVersionsRevertsCreateRequest = z.object({ "landscapeId": z.string(), "body": z.object({ "notes": z.string(), "versionId": z.string() }) });

export const ZodVersionsRevertsCreateResponse = z.object({ "versionRevert": z.object({ "notes": z.string(), "versionId": z.string(), "createdAt": z.string(), "createdBy": z.enum(["user", "api-key", "notification-key", "service"]), "createdById": z.string(), "diagramHandleIds": z.array(z.string()), "id": z.string(), "landscapeId": z.string(), "updatedAt": z.string(), "updatedBy": z.enum(["user", "api-key", "notification-key", "service"]), "updatedById": z.string() }) });

export const ZodVersionsRevertsGetRequest = z.object({ "landscapeId": z.string(), "versionRevertId": z.string() });

export const ZodVersionsRevertsGetResponse = z.object({ "versionRevert": z.object({ "notes": z.string(), "versionId": z.string(), "createdAt": z.string(), "createdBy": z.enum(["user", "api-key", "notification-key", "service"]), "createdById": z.string(), "diagramHandleIds": z.array(z.string()), "id": z.string(), "landscapeId": z.string(), "updatedAt": z.string(), "updatedBy": z.enum(["user", "api-key", "notification-key", "service"]), "updatedById": z.string() }) });

export const ZodVersionsRevertsUpdateRequest = z.object({ "landscapeId": z.string(), "versionRevertId": z.string(), "body": z.object({ "notes": z.optional(z.string()) }) });

export const ZodVersionsRevertsUpdateResponse = z.object({ "versionRevert": z.object({ "notes": z.string(), "versionId": z.string(), "createdAt": z.string(), "createdBy": z.enum(["user", "api-key", "notification-key", "service"]), "createdById": z.string(), "diagramHandleIds": z.array(z.string()), "id": z.string(), "landscapeId": z.string(), "updatedAt": z.string(), "updatedBy": z.enum(["user", "api-key", "notification-key", "service"]), "updatedById": z.string() }) });

export const ZodVersionsListRequest = z.object({ "landscapeId": z.string() });

export const ZodVersionsListResponse = z.object({ "versions": z.array(z.object({ "modelHandleId": z.union([z.null(), z.string()]), "name": z.string(), "notes": z.string(), "completedAt": z.optional(z.string()), "createdAt": z.string(), "createdBy": z.enum(["user", "api-key", "notification-key", "service"]), "createdById": z.string(), "diagramHandleIds": z.array(z.string()), "id": z.string(), "landscapeId": z.string(), "tags": z.array(z.string()), "updatedAt": z.string(), "updatedBy": z.enum(["user", "api-key", "notification-key", "service"]), "updatedById": z.string() })) });

export const ZodVersionsCreateRequest = z.object({ "landscapeId": z.string(), "body": z.object({ "modelHandleId": z.union([z.null(), z.string()]), "name": z.string(), "notes": z.string() }) });

export const ZodVersionsCreateResponse = z.object({ "version": z.object({ "modelHandleId": z.union([z.null(), z.string()]), "name": z.string(), "notes": z.string(), "completedAt": z.optional(z.string()), "createdAt": z.string(), "createdBy": z.enum(["user", "api-key", "notification-key", "service"]), "createdById": z.string(), "diagramHandleIds": z.array(z.string()), "id": z.string(), "landscapeId": z.string(), "tags": z.array(z.string()), "updatedAt": z.string(), "updatedBy": z.enum(["user", "api-key", "notification-key", "service"]), "updatedById": z.string() }) });

export const ZodVersionsGetRequest = z.object({ "landscapeId": z.string(), "versionId": z.string() });

export const ZodVersionsGetResponse = z.object({ "version": z.object({ "modelHandleId": z.union([z.null(), z.string()]), "name": z.string(), "notes": z.string(), "completedAt": z.optional(z.string()), "createdAt": z.string(), "createdBy": z.enum(["user", "api-key", "notification-key", "service"]), "createdById": z.string(), "diagramHandleIds": z.array(z.string()), "id": z.string(), "landscapeId": z.string(), "tags": z.array(z.string()), "updatedAt": z.string(), "updatedBy": z.enum(["user", "api-key", "notification-key", "service"]), "updatedById": z.string() }) });

export const ZodVersionsDeleteRequest = z.object({ "landscapeId": z.string(), "versionId": z.string() });

export const ZodVersionsDeleteResponse = z.any();

export const ZodVersionsUpdateRequest = z.object({ "landscapeId": z.string(), "versionId": z.string(), "body": z.object({ "modelHandleId": z.optional(z.union([z.null(), z.string()])), "name": z.optional(z.string()), "notes": z.optional(z.string()) }) });

export const ZodVersionsUpdateResponse = z.object({ "version": z.object({ "modelHandleId": z.union([z.null(), z.string()]), "name": z.string(), "notes": z.string(), "completedAt": z.optional(z.string()), "createdAt": z.string(), "createdBy": z.enum(["user", "api-key", "notification-key", "service"]), "createdById": z.string(), "diagramHandleIds": z.array(z.string()), "id": z.string(), "landscapeId": z.string(), "tags": z.array(z.string()), "updatedAt": z.string(), "updatedBy": z.enum(["user", "api-key", "notification-key", "service"]), "updatedById": z.string() }) });
