import {
  useContext,
} from "react";

import {
  TenantContext,
} from "../context/tenant-context";

export function useTenant() {
  const tenant =
    useContext(
      TenantContext
    );

  if (!tenant) {
    throw new Error(
      "TenantProvider missing"
    );
  }

  return tenant;
}