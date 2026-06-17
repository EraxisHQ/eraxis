import type {
  FileStorageProvider,
} from "../types/file-storage-provider";

import {
  LocalFileStorageProvider,
} from "../storage/local/local-file-storage-provider";

export function
createStorageProvider():
FileStorageProvider {

  return new
    LocalFileStorageProvider();
}
