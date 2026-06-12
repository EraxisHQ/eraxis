import {
  createContext,
} from "react";

import type {
  ManagedUser,
} from "../types/managed-user";

export const UserManagementContext =
  createContext<ManagedUser[]>([]);
