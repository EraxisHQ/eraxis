import {
  getPermissions,
} from "../permissions/permission-registry";

export function loadPermissions() {
  return getPermissions();
}
