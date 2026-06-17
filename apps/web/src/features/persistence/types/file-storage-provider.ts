/**
 * =====================================
 * Eraxis Storage
 *
 * Milestone:
 * M003-06-04
 * =====================================
 */

export interface FileStorageProvider {

  upload(
    path: string,
    file: File,
  ): Promise<string>;

  delete(
    path: string,
  ): Promise<void>;

  getUrl(
    path: string,
  ): Promise<string>;
}