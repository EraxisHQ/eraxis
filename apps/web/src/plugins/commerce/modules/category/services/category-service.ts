import { categoryRepository } from "./category-repository";
import type { Category } from "../types/category";

export const categoryService = {
  findAll() {
    return categoryRepository.findAll();
  },

  findById(id: string) {
    return categoryRepository.findById(id);
  },

  create(category: Category) {
    return categoryRepository.create(category);
  },

  update(id: string, category: Category) {
    return categoryRepository.update(id, category);
  },

  delete(id: string) {
    return categoryRepository.delete(id);
  },
};
