export interface BaseService<TEntity> {
  getById(id: string): Promise<TEntity | null>;

  getAll(): Promise<TEntity[]>;

  create(entity: TEntity): Promise<TEntity>;

  update(
    id: string,
    entity: Partial<TEntity>
  ): Promise<TEntity>;

  delete(id: string): Promise<void>;
}