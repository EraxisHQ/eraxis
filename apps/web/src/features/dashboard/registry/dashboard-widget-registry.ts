/**
 * =====================================
 * Eraxis
 * Module: Dashboard Widget Registry
 *
 * Purpose:
 * Central runtime widget registry.
 *
 * Milestone:
 * M001-04-01
 * =====================================
 */

import type {
  DashboardWidget,
} from "../types/dashboard-widget";

export const DASHBOARD_WIDGET_REGISTRY:
  DashboardWidget[] = [
    {
      id: "applications",
      title: "Applications",
      value: "1",
    },

    {
      id: "users",
      title: "Users",
      value: "1",
    },

    {
      id: "tenants",
      title: "Tenants",
      value: "1",
    },
  ];
