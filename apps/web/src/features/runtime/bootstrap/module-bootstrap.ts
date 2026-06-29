import {
  loadModules,
} from "../services/module-loader";

export function bootstrapModules() {
  return loadModules();
}
