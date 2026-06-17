import type {
  FileStorageProvider,
} from "../../types/file-storage-provider";

export class
LocalFileStorageProvider
implements FileStorageProvider {

  async upload(
    _path: string,
    _file: File,
  ): Promise<string> {

    throw new Error(
      "Not implemented",
    );
  }

  async delete(
    _path: string,
  ): Promise<void> {

    throw new Error(
      "Not implemented",
    );
  }

  async getUrl(
    _path: string,
  ): Promise<string> {

    throw new Error(
      "Not implemented",
    );
  }
}
