/**
 * =====================================
 * Eraxis
 * Module: RBAC
 *
 * Purpose:
 * Provide role and permissions.
 * =====================================
 */

import {
  createContext,
  useContext,
} from "react";

import type {
  Permission,
} from "../types/permission";

import type {
  Role,
} from "../types/role";

type PermissionContextType = {
  role: Role;

  permissions:
    Permission[];
};

const PermissionContext =
  createContext<
    PermissionContextType | undefined
  >(undefined);

/**
 * Temporary Role
 *
 * Future:
 * Auth Module
 * will populate this.
 */

const defaultValue = {
  role: "super_admin" as Role,

  permissions: [
    "dashboard:view",
    "applications:view",
    "administration:view",
    "settings:view",
  ] as Permission[],
};

type Props = {
  children:
    React.ReactNode;
};

export function PermissionProvider({
  children,
}: Props) {
  return (
    <PermissionContext.Provider
      value={defaultValue}
    >
      {children}
    </PermissionContext.Provider>
  );
}

export function usePermissionContext() {
  const context =
    useContext(
      PermissionContext
    );

  if (!context) {
    throw new Error(
      "PermissionProvider missing"
    );
  }

  return context;
}