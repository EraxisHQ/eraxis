import { ROUTES }
  from "../constants/routes";

import type {
  NavigationItem,
} from "../types/navigation-item";



/**
 * =====================================
 * Eraxis Navigation Config
 *
 * Future plugins will
 * register here.
 * =====================================
 */

export const NAVIGATION_ITEMS:
  NavigationItem[] = [
  // {
  //   label: "Dashboard",
  //   path: ROUTES.DASHBOARD,
  //   group: "General",
  //   permission: "dashboard:view",
  // },

  // {
  //   label: "Applications",
  //   path: ROUTES.APPLICATIONS,
  //   group: "Applications",
  //   permission: "applications:view",
  // },

  // {
  //   label: "Administration",
  //   path: ROUTES.ADMINISTRATION,
  //   group: "Administration",
  //   permission: "administration:view",
  // },

  // {
  //   label: "Settings",
  //   path: ROUTES.SETTINGS,
  //   group: "Administration",
  //   permission: "settings:view",
  // },

  {
  id: "dashboard",

  label: "Dashboard",

  path: ROUTES.DASHBOARD,

  group: "General",

  permission: "dashboard:view",

  order: 1,
},
{
  id: "applications",

  label: "Applications",

  path: ROUTES.APPLICATIONS,

  group: "Applications",

  permission: "applications:view",

  order: 2,
},
{
  id: "administration",

  label: "Administration",

  path: ROUTES.ADMINISTRATION,

  group: "Administration",

  permission: "administration:view",

  order: 3,
},
{
  id: "settings",

  label: "Settings",

  path: ROUTES.SETTINGS,

  group: "Administration",

  permission: "settings:view",

  order: 4,
},

];

