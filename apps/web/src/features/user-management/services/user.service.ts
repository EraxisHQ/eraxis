import { supabase }
  from "../../../lib/supabase";

import type {
  ManagedUser,
} from "../types/managed-user";

export async function getUsers():
Promise<ManagedUser[]> {

  const {
    data,
    error,
  } = await supabase
    .from("users")
    .select("*");

   if (
    error ||
    !data
  ) {
    return [];
  }

  return data.map(
    (user) => ({
      id: user.id,
      firstName:
        user.first_name,

      lastName:
        user.last_name,

      email:
        user.email,

      active:
        user.active,
    })
  );
}
