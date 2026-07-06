import { registerRoute } from "../../../../../features/runtime/routes/route-registry";

import { SETTINGS_ROUTE } from "../routes/settings.routes";

export function bootstrapSettings() {
  registerRoute(SETTINGS_ROUTE);
}
