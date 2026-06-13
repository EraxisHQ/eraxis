import {
  useAuth,
} from "../../../providers/auth-provider";

import {
  can as canPermission,
  hasRole as hasRolePermission,
} from "../services/permission.service";

export function usePermission() {

  const {
    user,
  } = useAuth();

  return {
    can: (
      permission: string
    ) =>
      canPermission(
        user,
        permission
      ),

    hasRole: (
      role: string
    ) =>
      hasRolePermission(
        user,
        role
      ),
  };
}
