import {
  bootstrapPlugins,
} from "./plugin-bootstrap";

import {
  bootstrapModules,
} from "./module-bootstrap";

import {
  bootstrapRoutes,
} from "./route-bootstrap";

export function bootstrapRuntime() {
  bootstrapPlugins();
  bootstrapModules();
  bootstrapRoutes();
}
