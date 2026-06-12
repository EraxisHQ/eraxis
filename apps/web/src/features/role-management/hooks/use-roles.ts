import {
  useContext,
} from "react";

import {
  RoleContext,
} from "../context/role-context";

export function useRoles() {

  return useContext(
    RoleContext
  );
}
