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
    .select("*")
    .limit(1)
    .single();

  if (error) {
    console.error(
      "Tenant fetch failed",
      error
    );

    return null;
  }

  return {
    id: data.id,
    code: data.code,
    name: data.name,
    status: data.status,
  };
}