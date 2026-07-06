import { registerRoute } from "../../../../../features/runtime/routes/route-registry";

import { DASHBOARD_ROUTE } from "../routes/dashboard.routes";

export function bootstrapDashboard() {
  registerRoute(DASHBOARD_ROUTE);
}
