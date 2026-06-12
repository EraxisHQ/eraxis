import {
  createContext,
} from "react";

import type {
  ManagedTenant,
} from "../types/managed-tenant";

export const TenantManagementContext =
  createContext<ManagedTenant[]>([]);
