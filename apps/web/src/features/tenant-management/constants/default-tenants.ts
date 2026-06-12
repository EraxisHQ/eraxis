import type {
  ManagedTenant,
} from "../types/managed-tenant";

export const DEFAULT_TENANTS:
  ManagedTenant[] = [
    {
      id: "1",
      code: "ERAXIS",
      name: "Eraxis Demo Tenant",
      active: true,
    },
  ];
