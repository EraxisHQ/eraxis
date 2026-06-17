import {
  LocalFileStorageProvider,
} from "../storage/local/local-file-storage-provider";

import {
  getStorageConfig,
} from "./storage-config-service";

export function
createStorageProvider() {

  const config =
    getStorageConfig();

  switch (
    config.provider
  ) {

    case "local":

      return new
        LocalFileStorageProvider();

    default:

      throw new Error(
        "Storage provider not supported",
      );
  }
}
