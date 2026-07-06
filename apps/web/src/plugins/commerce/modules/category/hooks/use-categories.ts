import { useEffect, useState } from "react";

import type { Category } from "../types/category";

import {
  getCategories,
  isCategoriesLoaded,
  refreshCategories,
  subscribeCategories,
} from "../services/category-store";

export function useCategories() {
  const [categories, setCategories] =
    useState<Category[]>(getCategories());

  useEffect(() => {
    if (!isCategoriesLoaded()) {
      refreshCategories();
    }

    const unsubscribe =
      subscribeCategories(() => {
        setCategories(getCategories());
      });

    return unsubscribe;
  }, []);

  return categories;
}
