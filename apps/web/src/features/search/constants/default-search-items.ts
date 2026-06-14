import type {
  SearchItem,
} from "../types/search-item";

import {
  searchRegistry,
} from "../services/search-registry";

export const DEFAULT_SEARCH_ITEMS:
  SearchItem[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      route: "/dashboard",
    },

    {
      id: "settings",
      label: "Settings",
      route: "/settings",
    },

    {
      id: "profile",
      label: "Profile",
      route: "/profile",
    },
  ];

  DEFAULT_SEARCH_ITEMS.forEach(
  (item) => {
    searchRegistry
      .register(item);
  }
);