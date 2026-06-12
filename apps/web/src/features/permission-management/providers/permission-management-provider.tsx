import {
  PermissionManagementContext,
} from "../context/permission-context";

import {
  DEFAULT_PERMISSIONS,
} from "../constants/default-permissions";

type Props = {
  children: React.ReactNode;
};

export function PermissionManagementProvider({
  children,
}: Props) {

  return (
    <PermissionManagementContext.Provider
      value={DEFAULT_PERMISSIONS}
    >
      {children}
    </PermissionManagementContext.Provider>
  );
}
