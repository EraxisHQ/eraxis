/**
 * =====================================
 * Eraxis
 * Permission Hook
 * =====================================
 */

import {
  usePermissionContext,
} from "../providers/permission-provider";

export function usePermission(
  permission: string
) {
  const {
    permissions,
  } =
    usePermissionContext();

  return permissions.includes(
    permission as any
  );
}