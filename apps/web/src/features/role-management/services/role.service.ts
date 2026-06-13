import { supabase }
  from "../../../lib/supabase";

import type {
  Role,
} from "../types/role";

export async function getRoles():
Promise<Role[]> {

  const {
    data,
    error,
  } = await supabase
    .from("roles")
    .select("*");

 
  if (
    error ||
    !data
  ) {
    return [];
  }

  return data.map(
    (role) => ({
      id: role.id,
      name: role.name,
      description:
        role.description,
    })
  );
}
