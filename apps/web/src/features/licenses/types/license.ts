import type { LicenseStatus } from "./license-status";

import type { LicenseEntitlement } from "./license-entitlement";

export type License = {
  id: string;

  tenantId: string;

  subscriptionId: string;

  status: LicenseStatus;

  entitlement: LicenseEntitlement;

  active: boolean;
};
