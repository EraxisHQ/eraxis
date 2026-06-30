import {
  loadModules,
} from "../services/module-loader";

export function bootstrapPermissions() {
  const modules = loadModules();

  for (const module of modules as Record<string, unknown>[]) {
    if ("permissions" in module) {
      // Registration will be added later.
    }
  }
}
