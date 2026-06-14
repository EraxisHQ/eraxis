import {
  NAVIGATION_ITEMS,
} from "../config/navigation.config";

class NavigationRegistry {

  getAll() {

    console.log(
    "Navigation Registry:",
    NAVIGATION_ITEMS
  );
  
    return NAVIGATION_ITEMS;
  }
}

export const
  navigationRegistry =
    new NavigationRegistry();