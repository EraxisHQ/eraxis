import type {
  StorageConfig,
} from "../types/storage-config";

const CONFIG:
  StorageConfig = {

  provider:
    "local",
};

export function
getStorageConfig() {

  return CONFIG;
}
