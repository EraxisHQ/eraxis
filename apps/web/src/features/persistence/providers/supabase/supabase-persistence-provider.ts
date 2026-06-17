/**
 * =====================================
 * Eraxis Persistence
 *
 * Purpose:
 * Supabase provider.
 *
 * Milestone:
 * M003-04-01
 * =====================================
 */

import type {
  PersistenceProvider,
} from "../../types/persistence-provider";

export class
SupabasePersistenceProvider
implements PersistenceProvider {

  async find<T>(
    _collection: string,
  ): Promise<T[]> {

    throw new Error(
      "Not implemented",
    );
  }

  async findById<T>(
    _collection: string,
    _id: string,
  ): Promise<T | null> {

    throw new Error(
      "Not implemented",
    );
  }

  async create<T>(
    _collection: string,
    _entity: T,
  ): Promise<void> {

    throw new Error(
      "Not implemented",
    );
  }

  async update<T>(
    _collection: string,
    _id: string,
    _entity: T,
  ): Promise<void> {

    throw new Error(
      "Not implemented",
    );
  }

  async delete(
    _collection: string,
    _id: string,
  ): Promise<void> {

    throw new Error(
      "Not implemented",
    );
  }
}