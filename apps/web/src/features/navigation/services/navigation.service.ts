import {
  navigationRegistry,
} from "./navigation-registry";

export class NavigationService {

  getItems() {

    return navigationRegistry
      .getAll()
      .sort(
        (a, b) =>
          (a.order ?? 0) -
          (b.order ?? 0)
      );
  }
}

export const
  navigationService =
    new NavigationService();
