import {
  createStorageProvider,
} from "./storage-factory";

import {
  setStorageProvider,
} from "./storage-service";

export function
initializeStorage() {

  const provider =
    createStorageProvider();

  setStorageProvider(
    provider,
  );
}
