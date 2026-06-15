/**
 * =====================================
 * Eraxis
 * Module: Tenant Configuration Registration
 *
 * Purpose:
 * Runtime registration of
 * tenant settings.
 *
 * Milestone:
 * M001-05-03
 * =====================================
 */

import type {
  TenantConfiguration,
} from "../types/tenant-configuration";

import {
  TENANT_CONFIGURATION_REGISTRY,
} from "../registry/tenant-configuration-registry";

export function registerTenantConfiguration(
  configuration:
    TenantConfiguration
) {

  TENANT_CONFIGURATION_REGISTRY.push(
    configuration
  );
}
