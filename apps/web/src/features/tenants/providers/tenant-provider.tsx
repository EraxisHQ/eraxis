// import {
//   TenantContext,
// } from "../context/tenant-context";

// import {
//   DEFAULT_TENANT,
// } from "../constants/default-tenant";

// type Props = {
//   children:
//     React.ReactNode;
// };

// export function TenantProvider({
//   children,
// }: Props) {
//   return (
//     <TenantContext.Provider
//       value={DEFAULT_TENANT}
//     >
//       {children}
//     </TenantContext.Provider>
//   );
// }


import {
  useEffect,
  useState,
} from "react";

import {
  TenantContext,
} from "../context/tenant-context";

import {
  getTenant,
} from "../services/tenant.service";

import type {
  Tenant,
} from "../types/tenant";

type Props = {
  children:
    React.ReactNode;
};

export function TenantProvider({
  children,
}: Props) {

  const [
    tenant,
    setTenant,
  ] = useState<
    Tenant | undefined
  >(undefined);

  useEffect(() => {

    async function loadTenant() {

      const result =
        await getTenant();

      if (result) {
        setTenant(result);
      }
    }

    loadTenant();

  }, []);

  if (!tenant) {
    return null;
  }

  return (
    <TenantContext.Provider
      value={tenant}
    >
      {children}
    </TenantContext.Provider>
  );
}