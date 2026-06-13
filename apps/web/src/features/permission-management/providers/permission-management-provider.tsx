// import {
//   PermissionManagementContext,
// } from "../context/permission-context";

// import {
//   DEFAULT_PERMISSIONS,
// } from "../constants/default-permissions";

// type Props = {
//   children: React.ReactNode;
// };

// export function PermissionManagementProvider({
//   children,
// }: Props) {

//   return (
//     <PermissionManagementContext.Provider
//       value={DEFAULT_PERMISSIONS}
//     >
//       {children}
//     </PermissionManagementContext.Provider>
//   );
// }


import {
  useEffect,
  useState,
} from "react";

import {
  PermissionManagementContext,
} from "../context/permission-context";

import {
  getPermissions,
} from "../services/permission.service";

import type {
  Permission,
} from "../types/permission";

type Props = {
  children:
    React.ReactNode;
};

export function PermissionManagementProvider({
  children,
}: Props) {

  const [
    permissions,
    setPermissions,
  ] = useState<
    Permission[]
  >([]);

  useEffect(() => {

    async function loadPermissions() {

      const result =
        await getPermissions();

      setPermissions(
        result
      );
    }

    loadPermissions();

  }, []);

  return (
    <PermissionManagementContext.Provider
      value={permissions}
    >
      {children}
    </PermissionManagementContext.Provider>
  );
}