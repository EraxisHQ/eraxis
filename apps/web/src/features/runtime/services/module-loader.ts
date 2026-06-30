import {
  loadPlugins,
} from "./plugin-loader";

export function loadModules() {
  return loadPlugins().flatMap((plugin) => {
    if (!plugin.modules) {
      return [];
    }

    return plugin.modules;
  });
}
