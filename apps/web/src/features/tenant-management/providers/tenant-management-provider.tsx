import {
  TenantManagementContext,
} from "../context/tenant-management-context";

import {
  DEFAULT_TENANTS,
} from "../constants/default-tenants";

type Props = {
  children: React.ReactNode;
};

export function TenantManagementProvider({
  children,
}: Props) {

  return (
    <TenantManagementContext.Provider
      value={DEFAULT_TENANTS}
    >
      {children}
    </TenantManagementContext.Provider>
  );
}
