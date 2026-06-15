import {
  CATEGORY_REGISTRY,
} from "../registry/category-registry";

export function loadCategories() {

  return CATEGORY_REGISTRY
    .filter(
      (category) =>
        category.active
    );
}
