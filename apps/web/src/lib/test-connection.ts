import { supabase } from "./supabase";

export async function testConnection() {
  const { error } = await supabase
    .from("_health_check")
    .select("*");

  return error;
}