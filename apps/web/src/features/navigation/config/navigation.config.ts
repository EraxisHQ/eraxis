


/**
 * =====================================
 * Eraxis Navigation Registry
 *
 * Purpose:
 * Central runtime navigation registry.
 *
 * Applications:
 * - CORE
 * - COMMERCE
 * - HRMS
 * - FLEET
 * - INVENTORY
 *
 * Milestone:
 * M001-03-01
 * =====================================
 */
import { ROUTES }
  from "../constants/routes";

import type {
  NavigationItem,
} from "../types/navigation-item";

export const NAVIGATION_ITEMS:
  NavigationItem[] = [
    {
      id: "dashboard",

      label: "Dashboard",

      path: ROUTES.DASHBOARD,

      group: "General",

      permission: "dashboard:view",

      applicationId: "CORE",

      order: 1,
    },
    {
      id: "applications",

      label: "Applications",

      path: ROUTES.APPLICATIONS,

      group: "Applications",

      permission: "applications:view",

      applicationId: "CORE",

      order: 2,
    },
    {
      id: "administration",

      label: "Administration",

      path: ROUTES.ADMINISTRATION,

      group: "Administration",

      permission: "administration:view",

      applicationId: "CORE",

      order: 3,
    },
    {
      id: "settings",

      label: "Settings",

      path: ROUTES.SETTINGS,

      group: "Administration",

      permission: "settings:view",

      applicationId: "CORE",

      order: 4,
    },
    {
      id: "commerce",

      label: "Commerce",

      path: "/commerce",

      group: "Applications",

      applicationId: "COMMERCE",

      order: 10,
    },

    {
      id: "products",

      label: "Products",

      path: "/products",

      group: "Applications",

      applicationId: "COMMERCE",

      order: 11,
    },

    {
      id: "categories",

      label: "Categories",

      path: "/categories",

      group: "Applications",

      applicationId: "COMMERCE",

      order: 12,
    },

  ];

