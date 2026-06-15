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

    dependencies: [],
  },

  {
    id: "settings",

    applicationCode: "CORE",

    code: "SETTINGS",

    name: "Settings",

    route: "/settings",

    enabled: true,

    dependencies: [
      "DASHBOARD",
    ],
  },

  {
    id: "administration",

    applicationCode: "CORE",

    code: "ADMINISTRATION",

    name: "Administration",

    route: "/administration",

    enabled: true,

    dependencies: [
      "DASHBOARD",
      "SETTINGS",
    ],
  },

  {
    id: "commerce",

    applicationCode: "COMMERCE",

    code: "COMMERCE",

    name: "Commerce",

    route: "/commerce",

    enabled: true,

    dependencies: [
      "DASHBOARD",
    ],
  },
];

PLUGINS.forEach(
  (plugin) => {
    pluginRegistry
      .register(plugin);
  }
);