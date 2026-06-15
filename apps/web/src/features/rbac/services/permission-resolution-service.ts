/**
 * =====================================
 * Eraxis
 * Module: Permission Resolution
 *
 * Purpose:
 * Resolves runtime permissions.
 *
 * Milestone:
 * M001-09-03
 * =====================================
 */

import type {
  Permission,
} from "../types/permission";

export function hasPermission(
  userPermissions:
    Permission[],

  permission:
    Permission
) {

  return userPermissions
    .includes(
      permission
    );
}
