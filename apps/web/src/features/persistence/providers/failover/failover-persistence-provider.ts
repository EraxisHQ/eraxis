/**
 * =====================================
 * Eraxis Persistence
 *
 * Purpose:
 * Failover provider.
 *
 * Milestone:
 * M003-08-01
 * =====================================
 */

import type {
  PersistenceProvider,
} from "../../types/persistence-provider";

export class
FailoverPersistenceProvider
implements PersistenceProvider {

  constructor(
    primary:
      PersistenceProvider,

    secondary:
      PersistenceProvider,
  ) {

    this.primary =
      primary;

    this.secondary =
      secondary;
  }

  private primary:
    PersistenceProvider;

  private secondary:
    PersistenceProvider;

  async find<T>(
    collection: string,
  ): Promise<T[]> {

    try {

      return await
        this.primary.find<T>(
          collection,
        );

    } catch {

      return this.secondary
        .find<T>(
          collection,
        );
    }
  }

  async findById<T>(
    collection: string,
    id: string,
  ): Promise<T | null> {

    try {

      return await
        this.primary.findById<T>(
          collection,
          id,
        );

    } catch {

      return this.secondary
        .findById<T>(
          collection,
          id,
        );
    }
  }

  async create<T>(
    collection: string,
    entity: T,
  ): Promise<void> {

    return this.primary
      .create(
        collection,
        entity,
      );
  }

  async update<T>(
    collection: string,
    id: string,
    entity: T,
  ): Promise<void> {

    return this.primary
      .update(
        collection,
        id,
        entity,
      );
  }

  async delete(
    collection: string,
    id: string,
  ): Promise<void> {

    return this.primary
      .delete(
        collection,
        id,
      );
  }
}
