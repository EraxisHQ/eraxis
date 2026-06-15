/**
 * =====================================
 * Eraxis
 * Module: Tenant Configuration Registry
 *
 * Purpose:
 * Stores tenant-specific
 * configuration.
 *
 * Milestone:
 * M001-05-03
 * =====================================
 */

import type {
  TenantConfiguration,
} from "../types/tenant-configuration";

export const TENANT_CONFIGURATION_REGISTRY:
  TenantConfiguration[] = [
    {
      tenantId: "default",

      key: "theme",

      value: "dark",
    },

    {
      tenantId: "default",

      key: "language",

      value: "en",
    },
  ];
