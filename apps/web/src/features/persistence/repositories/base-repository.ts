/**
 * =====================================
 * Eraxis Persistence
 *
 * Purpose:
 * Generic repository runtime.
 *
 * Milestone:
 * M003-13-01
 * =====================================
 */

import {
  getPersistenceProvider,
} from "../services/persistence-service";

export abstract class BaseRepository<T> {

  protected collection: string;

  constructor(
    collection: string,
  ) {

    this.collection =
      collection;
  }
  
  async findAll() {

    return getPersistenceProvider()
      .find<T>(
        this.collection,
      );
  }

  async findById(
    id: string,
  ) {

    return getPersistenceProvider()
      .findById<T>(
        this.collection,
        id,
      );
  }

  async create(
    entity: T,
  ) {

    return getPersistenceProvider()
      .create(
        this.collection,
        entity,
      );
  }

  async update(
    id: string,
    entity: T,
  ) {

    return getPersistenceProvider()
      .update(
        this.collection,
        id,
        entity,
      );
  }

  async delete(
    id: string,
  ) {

    return getPersistenceProvider()
      .delete(
        this.collection,
        id,
      );
  }
}
