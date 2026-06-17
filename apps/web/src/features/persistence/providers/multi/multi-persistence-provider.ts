/**
 * =====================================
 * Eraxis Persistence
 *
 * Purpose:
 * Multi provider runtime.
 *
 * Milestone:
 * M003-05-01
 * =====================================
 */

import type {
  PersistenceProvider,
} from "../../types/persistence-provider";

export class
MultiPersistenceProvider
implements PersistenceProvider {

  private readonly providers:
  PersistenceProvider[];

constructor(
  providers:
    PersistenceProvider[],
) {

  this.providers =
    providers;
}
  async find<T>(
    collection: string,
  ): Promise<T[]> {

    return this.providers[0]
      .find<T>(
        collection,
      );
  }

  async findById<T>(
    collection: string,
    id: string,
  ): Promise<T | null> {

    return this.providers[0]
      .findById<T>(
        collection,
        id,
      );
  }

  async create<T>(
    collection: string,
    entity: T,
  ): Promise<void> {

    await Promise.all(
      this.providers.map(
        provider =>
          provider.create(
            collection,
            entity,
          ),
      ),
    );
  }

  async update<T>(
    collection: string,
    id: string,
    entity: T,
  ): Promise<void> {

    await Promise.all(
      this.providers.map(
        provider =>
          provider.update(
            collection,
            id,
            entity,
          ),
      ),
    );
  }

  async delete(
    collection: string,
    id: string,
  ): Promise<void> {

    await Promise.all(
      this.providers.map(
        provider =>
          provider.delete(
            collection,
            id,
          ),
      ),
    );
  }
}
