import {
  storageRegistry,
} from "./storage-registry";

export class StorageService {

  getFiles() {

    return storageRegistry
      .getAll();
  }

  getFileCount() {

    return storageRegistry
      .getAll()
      .length;
  }
}

export const
  storageService =
    new StorageService();
