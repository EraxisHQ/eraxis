/**
 * =====================================
 * Eraxis Persistence
 *
 * Purpose:
 * Generic repository
 * contract.
 *
 * Milestone:
 * M003-01-04
 * =====================================
 */

export interface Repository<T> {

  findAll():
    Promise<T[]>;

  findById(
    id: string,
  ): Promise<T | null>;

  create(
    entity: T,
  ): Promise<void>;

  update(
    id: string,
    entity: T,
  ): Promise<void>;

  delete(
    id: string,
  ): Promise<void>;
}
