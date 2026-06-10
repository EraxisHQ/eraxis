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
  {
    label: "Dashboard",
    path: ROUTES.DASHBOARD,
    group: "General",
  },

  {
    label: "Applications",
    path: ROUTES.APPLICATIONS,
    group: "Applications",
  },

  {
    label: "Administration",
    path: ROUTES.ADMINISTRATION,
    group: "Administration",
  },

  {
    label: "Settings",
    path: ROUTES.SETTINGS,
    group: "Administration",
  },

];