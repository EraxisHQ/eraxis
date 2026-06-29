import {
  bootstrapPlugins,
} from "./plugin-bootstrap";

import {
  bootstrapModules,
} from "./module-bootstrap";

export function bootstrapRuntime() {
  bootstrapPlugins();
  bootstrapModules();
}
