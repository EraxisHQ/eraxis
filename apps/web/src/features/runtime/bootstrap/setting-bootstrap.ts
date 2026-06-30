import {
  loadModules,
} from "../services/module-loader";

export function bootstrapSettings() {
  const modules = loadModules();

  for (const module of modules as Record<string, unknown>[]) {
    if ("settings" in module) {
      // Module settings registration
      // will be connected later.
    }
  }
}
