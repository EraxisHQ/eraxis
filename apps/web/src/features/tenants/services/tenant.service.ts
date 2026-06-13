
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