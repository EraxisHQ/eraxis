/**
 * =====================================
 * Eraxis Persistence
 *
 * Purpose:
 * Tenant persistence mapping.
 *
 * Milestone:
 * M003-09-01
 * =====================================
 */

import type {
  ProviderType,
} from "./provider-type";

import type {
  ProviderMode,
} from "./provider-mode";

export type TenantProviderConfig = {

  tenantId: string;

  provider:
    ProviderType;

  mode:
    ProviderMode;
};

