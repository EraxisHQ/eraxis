import type {
  PersistenceConfig,
} from "../types/persistence-config";

const CONFIG:
  PersistenceConfig = {

  provider:
    "local",

  mode:
    "single",
};
export function
getPersistenceConfig() {

  return CONFIG;
}
