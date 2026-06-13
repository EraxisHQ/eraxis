import type {
  ReactNode,
} from "react";

import {
  usePermission,
} from "../hooks/use-permission";

type PermissionGuardProps = {
  permission?: string;

  role?: string;

  children: ReactNode;
};

export default function PermissionGuard({
  permission,
  role,
  children,
}: PermissionGuardProps) {

  const {
    can,
    hasRole,
  } = usePermission();

  if (
    permission &&
    !can(permission)
  ) {
    return null;
  }

  if (
    role &&
    !hasRole(role)
  ) {
    return null;
  }

  return <>{children}</>;
}
