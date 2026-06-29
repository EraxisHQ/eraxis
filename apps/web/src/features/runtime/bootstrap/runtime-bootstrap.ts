import {
  bootstrapPlugins,
} from "./plugin-bootstrap";

import {
  bootstrapModules,
} from "./module-bootstrap";

import {
  bootstrapRoutes,
} from "./route-bootstrap";

import {
  bootstrapNavigation,
} from "./navigation-bootstrap";

export function bootstrapRuntime() {
  bootstrapPlugins();
  bootstrapModules();
  bootstrapRoutes();
  bootstrapNavigation();
}
