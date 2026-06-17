/**
 * =====================================
 * Eraxis Persistence
 *
 * Purpose:
 * Local provider implementation.
 *
 * Milestone:
 * M003-01-05
 * =====================================
 */

import type {
  PersistenceProvider,
} from "../../types/persistence-provider";

export class
LocalPersistenceProvider
implements PersistenceProvider {

  private storage =
    new Map<
      string,
      Map<string, unknown>
    >();

  async find<T>(
    collection: string,
  ): Promise<T[]> {

    const records =
      this.storage.get(
        collection
      );

    return (
      Array.from(
        records?.values() ?? []
      ) as T[]
    );
  }

  async findById<T>(
    collection: string,
    id: string,
  ): Promise<T | null> {

    const records =
      this.storage.get(
        collection
      );

    return (
      records?.get(
        id
      ) as T
    ) ?? null;
  }

  async create<T>(
    collection: string,
    entity: T,
  ): Promise<void> {

    const records =
      this.storage.get(
        collection
      ) ??
      new Map();

    const id =
      (
        entity as {
          id: string;
        }
      ).id;

    records.set(
      id,
      entity
    );

    this.storage.set(
      collection,
      records
    );
  }

  async update<T>(
    collection: string,
    id: string,
    entity: T,
  ): Promise<void> {

    const records =
      this.storage.get(
        collection
      );

    records?.set(
      id,
      entity
    );
  }

  async delete(
    collection: string,
    id: string,
  ): Promise<void> {

    const records =
      this.storage.get(
        collection
      );

    records?.delete(
      id
    );
  }
}
