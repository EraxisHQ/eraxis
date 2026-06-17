export interface PersistenceProvider {

  find<T>(
    collection: string,
  ): Promise<T[]>;

  findById<T>(
    collection: string,
    id: string,
  ): Promise<T | null>;

  create<T>(
    collection: string,
    entity: T,
  ): Promise<void>;

  update<T>(
    collection: string,
    id: string,
    entity: T,
  ): Promise<void>;

  delete(
    collection: string,
    id: string,
  ): Promise<void>;
}
