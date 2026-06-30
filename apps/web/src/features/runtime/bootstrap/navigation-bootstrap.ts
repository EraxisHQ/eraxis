import {
  loadModules,
} from "../services/module-loader";

export function bootstrapNavigation() {
  const modules = loadModules();

  for (const module of modules as Record<string, unknown>[]) {
    if ("navigation" in module) {
      // Registration comes next milestone
    }
  }
}
