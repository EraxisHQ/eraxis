import type {
  Command,
} from "../types/command";

export const DEFAULT_COMMANDS:
  Command[] = [
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