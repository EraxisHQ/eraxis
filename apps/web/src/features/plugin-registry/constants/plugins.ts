import type {
  Plugin,
} from "../types/plugin";

import {
  pluginRegistry,
} from "../services/plugin-registry";

export const PLUGINS: Plugin[] = [
  {
    id: "dashboard",

    applicationCode: "CORE",

    code: "DASHBOARD",

    name: "Dashboard",

    route: "/dashboard",

    enabled: true,
  },

  {
    id: "settings",

    applicationCode: "CORE",

    code: "SETTINGS",

    name: "Settings",

    route: "/settings",

    enabled: true,
  },

  {
    id: "administration",

    applicationCode: "CORE",

    code: "ADMINISTRATION",

    name: "Administration",

    route: "/administration",

    enabled: true,
  },
];

PLUGINS.forEach(
  (plugin) => {
    pluginRegistry
      .register(plugin);
  }
);