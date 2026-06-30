import {
  getDashboards,
} from "../dashboard/dashboard-registry";

export function loadDashboards() {
  return getDashboards();
}
