import type {
  PersistenceConfig,
} from "../types/persistence-config";

const CONFIG:
  PersistenceConfig = {

  // provider:
  //   "local",

    provider:
  "supabase",

  mode:
    "single",
};
export function
getPersistenceConfig() {

  return CONFIG;
}
