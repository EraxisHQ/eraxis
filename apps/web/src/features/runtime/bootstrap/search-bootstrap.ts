import {
  loadModules,
} from "../services/module-loader";

export function bootstrapSearch() {
  const modules = loadModules();

  for (const module of modules as Record<string, unknown>[]) {
    if ("search" in module) {
      // Registration comes later.
    }
  }
}
