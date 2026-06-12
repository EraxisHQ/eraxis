import {
  createContext,
} from "react";

import type {
  Role,
} from "../types/role";

export const RoleContext =
  createContext<Role[]>([]);
