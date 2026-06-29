import type {
  Plugin,
} from "../../plugin-registry/types/plugin";

const PLUGINS: Plugin[] = [];

export function registerPlugin(
  plugin: Plugin,
) {
  PLUGINS.push(plugin);
}

export function getPlugins() {
  return PLUGINS;
}
