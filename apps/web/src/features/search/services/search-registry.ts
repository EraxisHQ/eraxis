import type {
  SearchItem,
} from "../types/search-item";

class SearchRegistry {

  private items:
    SearchItem[] = [];

  register(
    item: SearchItem
  ) {
    this.items.push(
      item
    );
  }

  getAll() {
    return this.items;
  }
}

export const
  searchRegistry =
    new SearchRegistry();
