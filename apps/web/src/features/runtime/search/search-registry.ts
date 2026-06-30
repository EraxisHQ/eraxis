import type {
  RuntimeSearch,
} from "../types/runtime-search";

const SEARCH_ITEMS: RuntimeSearch[] = [];

export function registerSearch(
  item: RuntimeSearch,
) {
  SEARCH_ITEMS.push(item);
}

export function getSearchItems() {
  return SEARCH_ITEMS;
}
