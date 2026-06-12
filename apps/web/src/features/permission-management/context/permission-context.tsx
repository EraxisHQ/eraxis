import {
  createContext,
} from "react";

import type {
  Permission,
} from "../types/permission";

export const PermissionManagementContext =
  createContext<Permission[]>([]);
