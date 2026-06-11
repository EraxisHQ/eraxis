import type {
  UserMenuItem,
} from "../types/user-menu-item";

export const USER_MENU_ITEMS:
  UserMenuItem[] = [
    {
      id: "profile",
      label: "Profile",
      route: "/profile",
    },

    {
      id: "settings",
      label: "Settings",
      route: "/settings",
    },

    {
      id: "logout",
      label: "Logout",
      route: "/",
    },
  ];