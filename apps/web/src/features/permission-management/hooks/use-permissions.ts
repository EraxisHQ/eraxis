import {
  useContext,
} from "react";

import {
  PermissionManagementContext,
} from "../context/permission-context";

export function usePermissions() {

  return useContext(
    PermissionManagementContext
  );
}
