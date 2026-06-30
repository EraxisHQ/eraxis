import type {
  RuntimePermission,
} from "../types/runtime-permission";

const PERMISSIONS: RuntimePermission[] = [];

export function registerPermission(
  permission: RuntimePermission,
) {
  PERMISSIONS.push(permission);
}

export function getPermissions() {
  return PERMISSIONS;
}
