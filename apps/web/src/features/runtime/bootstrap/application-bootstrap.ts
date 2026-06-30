import {
  loadModules,
} from "../services/module-loader";

export function bootstrapApplications() {
  const modules = loadModules();

  for (const module of modules as Record<string, unknown>[]) {
    if ("application" in module) {
      // Registration later
    }
  }
}
