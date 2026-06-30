import {
  loadModules,
} from "../services/module-loader";

import {
  registerRoute,
} from "../routes/route-registry";

export function bootstrapRoutes() {
  const modules =
    loadModules() as Record<string, unknown>[];

  for (const module of modules) {

    const route =
      module["route"];

    if (route) {
      registerRoute(route as never);
    }
  }
}
