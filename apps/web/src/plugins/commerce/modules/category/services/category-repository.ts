import { BaseRepository } from "../../../../../features/persistence/repositories/base-repository";
import type { Category } from "../types/category";

export class CategoryRepository extends BaseRepository<Category> {
  constructor() {
    super("categories");
  }
}