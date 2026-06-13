import { supabase }
  from "../../../lib/supabase";

import type {
  Branch,
} from "../types/branch";

export async function getBranches():
Promise<Branch[]> {

  const {
    data,
    error,
  } = await supabase
    .from("branches")
    .select("*");

  console.log(
    "Branch Data:",
    data
  );

  console.log(
    "Branch Error:",
    error
  );

  if (
    error ||
    !data
  ) {
    return [];
  }

  return data.map(
    (branch) => ({
      id: branch.id,
      code: branch.code,
      name: branch.name,
      active: branch.active,
    })
  );
}
