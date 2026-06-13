import { supabase }
  from "../../../lib/supabase";

import type {
  Permission,
} from "../types/permission";

export async function getPermissions():
Promise<Permission[]> {

  const {
    data,
    error,
  } = await supabase
    .from("permissions")
    .select("*");

  console.log(
    "Permission Data:",
    data
  );

  console.log(
    "Permission Error:",
    error
  );

  if (
    error ||
    !data
  ) {
    return [];
  }

  return data.map(
    (permission) => ({
      id: permission.id,

      key: permission.code,

      description:
        permission.description,
    })
  );
}
