import {
  searchRegistry,
} from "./search-registry";

export class SearchService {

  getItems() {
    return searchRegistry
      .getAll();
  }

  search(
    query: string
  ) {
    return searchRegistry
      .getAll()
      .filter(
        (item) =>
          item.label
            .toLowerCase()
            .includes(
              query
                .toLowerCase()
            )
      );
  }
}

export const
  searchService =
    new SearchService();
