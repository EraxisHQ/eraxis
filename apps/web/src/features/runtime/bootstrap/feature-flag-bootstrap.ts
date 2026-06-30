import {
  loadModules,
} from "../services/module-loader";

export function bootstrapFeatureFlags() {
  const modules = loadModules();

  for (const module of modules as Record<string, unknown>[]) {
    if ("featureFlags" in module) {
      // Registration will be added later.
    }
  }
}
