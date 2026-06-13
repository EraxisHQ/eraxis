// import {
//   RoleContext,
// } from "../context/role-context";

// import {
//   DEFAULT_ROLES,
// } from "../constants/default-roles";

// type Props = {
//   children: React.ReactNode;
// };

// export function RoleProvider({
//   children,
// }: Props) {

//   return (
//     <RoleContext.Provider
//       value={DEFAULT_ROLES}
//     >
//       {children}
//     </RoleContext.Provider>
//   );
// }

import {
  useEffect,
  useState,
} from "react";

import {
  RoleContext,
} from "../context/role-context";

import {
  getRoles,
} from "../services/role.service";

import type {
  Role,
} from "../types/role";

type Props = {
  children:
    React.ReactNode;
};

export function RoleProvider({
  children,
}: Props) {

  const [
    roles,
    setRoles,
  ] = useState<
    Role[]
  >([]);

  useEffect(() => {

    async function loadRoles() {

      const result =
        await getRoles();

      setRoles(
        result
      );
    }

    loadRoles();

  }, []);

  return (
    <RoleContext.Provider
      value={roles}
    >
      {children}
    </RoleContext.Provider>
  );
}