import type {
  Command,
} from "../types/command";

import {
  commandRegistry,
} from "../services/command-registry";

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

  DEFAULT_COMMANDS.forEach(
  (item) => {
    commandRegistry
      .register(item);
  }
);