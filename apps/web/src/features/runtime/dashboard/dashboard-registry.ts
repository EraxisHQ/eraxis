import type {
  RuntimeDashboard,
} from "../types/runtime-dashboard";

const DASHBOARDS: RuntimeDashboard[] = [];

export function registerDashboard(
  dashboard: RuntimeDashboard,
) {
  DASHBOARDS.push(dashboard);
}

export function getDashboards() {
  return DASHBOARDS;
}
