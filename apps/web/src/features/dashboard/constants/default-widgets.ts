import type {
  DashboardWidget,
} from "../types/dashboard-widget";

export const DEFAULT_WIDGETS:
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