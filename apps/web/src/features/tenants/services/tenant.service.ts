// import { supabase }
//   from "../../../lib/supabase";

// import type {
//   Tenant,
// } from "../types/tenant";

// export async function getTenant():
// Promise<Tenant | null> {

// //   const {
// //     data,
// //     error,
// //   } = await supabase
// //     .from("tenants")
// //     .select("*")
// //     .limit(1)
// //     .single();

// const {
//   data,
//   error,
// } = await supabase
//   .from("tenants")
//   .select("*") as {
//     data: any[] | null;
//     error: any;
//   };

// console.log(
//     "Tenant Data:",
//      data
//     );

// console.log(
//     "Tenant Error:",
//      error
//     );

//   if (error) {
//     console.error(
//       "Tenant fetch failed",
//       error
//     );

//  if (!data || data.length === 0) {
//   return null;
// }

//   const tenant = data[0];

// //   return {
// //     id: data.id,
// //     code: data.code,
// //     name: data.name,
// //     status: data.status,
// //   };

// const tenant = data[0];

// return {
//   id: tenant.id,
//   code: tenant.code,
//   name: tenant.name,
//   status: tenant.status,
// };
// }

import { supabase }
  from "../../../lib/supabase";

import type {
  Tenant,
} from "../types/tenant";

export async function getTenant():
Promise<Tenant | null> {

  const {
    data,
    error,
  } = await supabase
    .from("tenants")
    .select("*");

  console.log(
    "Tenant Data:",
    data
  );

  console.log(
    "Tenant Error:",
    error
  );

  if (error) {
    return null;
  }

  if (!data || data.length === 0) {
    return null;
  }

  const tenant = data[0];

  return {
    id: tenant.id,
    code: tenant.code,
    name: tenant.name,
    status: tenant.status,
  };
}