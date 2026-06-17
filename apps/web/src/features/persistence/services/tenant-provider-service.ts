import type {
  TenantProviderConfig,
} from "../types/tenant-provider-config";

const CONFIGS:
  TenantProviderConfig[] = [];

export function
registerTenantProvider(
  config:
    TenantProviderConfig,
) {

  CONFIGS.push(
    config,
  );
}

export function
getTenantProvider(
  tenantId: string,
) {

  return CONFIGS.find(
    config =>
      config.tenantId ===
      tenantId,
  );
}
