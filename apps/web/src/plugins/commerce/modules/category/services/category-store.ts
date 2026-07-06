import type { Category } from "../types/category";
import { categoryService } from "./category-service";

type Listener = () => void;

let categories: Category[] = [];
let loaded = false;

const listeners = new Set<Listener>();

function notify() {
  listeners.forEach(listener => listener());
}

export function getCategories() {
  return categories;
}

export async function refreshCategories() {
  categories = await categoryService.findAll();
  loaded = true;
  notify();
}

export function isCategoriesLoaded() {
  return loaded;
}

export function subscribeCategories(listener: Listener) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}
