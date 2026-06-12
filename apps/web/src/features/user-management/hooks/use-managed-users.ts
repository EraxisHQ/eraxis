import {
  useContext,
} from "react";

import {
  UserManagementContext,
} from "../context/user-management-context";

export function useManagedUsers() {

  return useContext(
    UserManagementContext
  );
}
