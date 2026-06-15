/**
 * =====================================
 * Eraxis
 * Module: Tenant Configuration Loader
 *
 * Purpose:
 * Loads tenant settings.
 *
 * Milestone:
 * M001-05-03
 * =====================================
 */

import {
  TENANT_CONFIGURATION_REGISTRY,
} from "../registry/tenant-configuration-registry";

export function loadTenantConfiguration(
  tenantId: string
) {

  return TENANT_CONFIGURATION_REGISTRY
    .filter(
      (configuration) =>
        configuration.tenantId ===
        tenantId
    );
}
