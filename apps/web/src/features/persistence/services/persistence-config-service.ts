import type {
  PersistenceConfig,
} from "../types/persistence-config";

const CONFIG:
  PersistenceConfig = {

  provider:
    "local",
};

export function
getPersistenceConfig() {

  return CONFIG;
}
