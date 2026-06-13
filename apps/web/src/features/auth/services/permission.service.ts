import type {
  AuthUser,
} from "../types/auth-user";

export function hasRole(
  user: AuthUser | null,
  role: string
): boolean {
  if (!user) {
    return false;
  }

  return (
    user.roles?.includes(
      role
    ) ?? false
  );
}

export function can(
  user: AuthUser | null,
  permission: string
): boolean {
  if (!user) {
    return false;
  }

  return (
    user.permissions?.includes(
      permission
    ) ?? false
  );
}
