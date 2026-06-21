// import {
//   useContext,
// } from "react";

// import {
//   TenantManagementContext,
// } from "../context/tenant-management-context";

// export function useManagedTenants() {

//   return useContext(
//     TenantManagementContext
//   );
// }

import { getTenants } from "../services/tenant.service";

export function useManagedTenants() {
  return getTenants();
}
