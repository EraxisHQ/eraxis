import type {
  SearchItem,
} from "../types/search-item";

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