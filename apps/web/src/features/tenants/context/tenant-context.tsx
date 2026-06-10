import {
  createContext,
} from "react";

import type {
  Tenant,
} from "../types/tenant";

export const TenantContext =
  createContext<
    Tenant | undefined
  >(undefined);