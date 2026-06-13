/**
 * Authenticated user information.
 */
export interface AuthUser {
  id: string;

  authUserId: string;

  email: string;

  firstName: string;

  lastName: string;

  roles: string[];

  permissions: string[];
}