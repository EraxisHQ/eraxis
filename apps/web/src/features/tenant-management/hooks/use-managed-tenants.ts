import {
  useContext,
} from "react";

import {
  TenantManagementContext,
} from "../context/tenant-management-context";

export function useManagedTenants() {

  return useContext(
    TenantManagementContext
  );
}
