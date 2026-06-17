import type {
  FileStorageProvider,
} from "../types/file-storage-provider";

let provider:
  FileStorageProvider;

export function
setStorageProvider(
  storageProvider:
    FileStorageProvider,
) {

  provider =
    storageProvider;
}

export function
getStorageProvider() {

  return provider;
}
