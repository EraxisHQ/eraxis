import type { Category } from "../types/category";

export function mapCategoryToForm(
  category: Category,
): Record<string, unknown> {
  return {
    code: category.code,
    name: category.name,
    description: category.description,
    active: category.active,
  };
}
