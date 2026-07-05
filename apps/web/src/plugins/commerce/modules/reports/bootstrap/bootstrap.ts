import { registerRoute } from "../../../../../features/runtime/routes/route-registry";

import { REPORTS_ROUTE } from "../routes/reports.routes";

export function bootstrapReports() {
  registerRoute(REPORTS_ROUTE);
}
