import { CategoryRepository } from "./category-repository";
import type { Category } from "../types/category";

const repository = new CategoryRepository();

export const categoryService = {
  findAll: () => repository.findAll(),

  findById: (id: string) =>
    repository.findById(id),

  create: (category: Category) =>
    repository.create(category),

  update: (
    id: string,
    category: Category,
  ) =>
    repository.update(id, category),

  delete: (id: string) =>
    repository.delete(id),
};