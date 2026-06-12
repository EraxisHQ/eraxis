import {
  UserManagementContext,
} from "../context/user-management-context";

import {
  DEFAULT_USERS,
} from "../constants/default-users";

type Props = {
  children: React.ReactNode;
};

export function UserManagementProvider({
  children,
}: Props) {

  return (
    <UserManagementContext.Provider
      value={DEFAULT_USERS}
    >
      {children}
    </UserManagementContext.Provider>
  );
}
