import type {
  StorageFile,
} from "../types/storage-file";

import {
  storageRegistry,
} from "../services/storage-registry";

export const DEFAULT_STORAGE_FILES:
  StorageFile[] = [];

DEFAULT_STORAGE_FILES.forEach(
  (item) => {
    storageRegistry
      .register(item);
  }
);