// import {
//   UserManagementContext,
// } from "../context/user-management-context";

// import {
//   DEFAULT_USERS,
// } from "../constants/default-users";

// type Props = {
//   children: React.ReactNode;
// };

// export function UserManagementProvider({
//   children,
// }: Props) {

//   return (
//     <UserManagementContext.Provider
//       value={DEFAULT_USERS}
//     >
//       {children}
//     </UserManagementContext.Provider>
//   );
// }


import {
  useEffect,
  useState,
} from "react";

import {
  UserManagementContext,
} from "../context/user-management-context";

import {
  getUsers,
} from "../services/user.service";

import type {
  ManagedUser,
} from "../types/managed-user";

type Props = {
  children:
    React.ReactNode;
};

export function UserManagementProvider({
  children,
}: Props) {

  const [
    users,
    setUsers,
  ] = useState<
    ManagedUser[]
  >([]);

  useEffect(() => {

    async function loadUsers() {

      const result =
        await getUsers();

      setUsers(
        result
      );
    }

    loadUsers();

  }, []);

  return (
    <UserManagementContext.Provider
      value={users}
    >
      {children}
    </UserManagementContext.Provider>
  );
}