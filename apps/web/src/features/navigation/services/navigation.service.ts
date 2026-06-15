import {
  navigationRegistry,
} from "./navigation-registry";

import {
  filterNavigation,
} from "./navigation-filter-service";

export class NavigationService {

  getItems() {

    const items =
      navigationRegistry
        .getAll();

    return filterNavigation(
      items
    ).sort(
      (a, b) =>
        (a.order ?? 0) -
        (b.order ?? 0)
    );
  }
}

export const
  navigationService =
    new NavigationService();
