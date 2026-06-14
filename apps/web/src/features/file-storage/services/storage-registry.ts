import type {
  StorageFile,
} from "../types/storage-file";

class StorageRegistry {

  private items:
    StorageFile[] = [];

  register(
    item: StorageFile
  ) {
    this.items.push(
      item
    );
  }

  getAll() {
    return this.items;
  }
}

export const
  storageRegistry =
    new StorageRegistry();
