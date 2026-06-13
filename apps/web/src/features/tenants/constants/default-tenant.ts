/**
 * TD-039
 *
 * Temporary mock tenant.
 *
 * Replace after
 * tenant persistence rollout.
 */

import type {
  Tenant,
} from "../types/tenant";

export const DEFAULT_TENANT:
  Tenant = {
  id: "1",

  code: "ERAXIS",

  name:
    "Eraxis Demo Tenant",

  status:
    "active",
};