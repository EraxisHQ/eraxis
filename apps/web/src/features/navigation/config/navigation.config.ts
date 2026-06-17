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

    {
      id: "inventory",

      label: "Inventory",

      path: "/inventory",

      group: "Applications",

      applicationId: "COMMERCE",

      order: 13,
    },

    {
      id: "customers",

      label: "Customers",

      path: "/customers",

      group: "Applications",

      applicationId: "COMMERCE",

      order: 14,
    },

    {
      id: "orders",

      label: "Orders",

      path: "/orders",

      group: "Applications",

      applicationId: "COMMERCE",

      order: 15,
    },

    {
      id: "pricing",

      label: "Pricing",

      path: "/pricing",

      group: "Applications",

      applicationId: "COMMERCE",

      order: 16,
    },

    {
      id: "brands",

      label: "Brands",

      path: "/brands",

      group: "Applications",

      applicationId: "COMMERCE",

      order: 17,
    },

    {
      id: "product-variants",

      label: "Product Variants",

      path: "/product-variants",

      group: "Applications",

      applicationId: "COMMERCE",

      order: 18,
    },

    {
      id: "customer-addresses",

      label:
        "Customer Addresses",

      path:
        "/customer-addresses",

      group:
        "Applications",

      applicationId:
        "COMMERCE",

      order: 19,
    },

    {
      id: "order-lifecycle",

      label:
        "Order Lifecycle",

      path:
        "/order-lifecycle",

      group:
        "Applications",

      applicationId:
        "COMMERCE",

      order: 20,
    },

    {
      id: "order-items",

      label: "Order Items",

      path: "/order-items",

      group: "Applications",

      applicationId: "COMMERCE",

      order: 21,
    },

    {
      id: "invoices",

      label: "Invoices",

      path: "/invoices",

      group: "Applications",

      applicationId: "COMMERCE",

      order: 22,
    },

    {
      id: "payments",

      label: "Payments",

      path: "/payments",

      group: "Applications",

      applicationId: "COMMERCE",

      order: 23,
    },

    {
      id: "taxes",

      label: "Taxes",

      path: "/taxes",

      group: "Applications",

      applicationId: "COMMERCE",

      order: 24,
    },

    {
      id: "discounts",

      label: "Discounts",

      path: "/discounts",

      group: "Applications",

      applicationId: "COMMERCE",

      order: 25,
    },

    {
      id: "shipping",

      label: "Shipping",

      path: "/shipping",

      group: "Applications",

      applicationId: "COMMERCE",

      order: 26,
    },

  ];

