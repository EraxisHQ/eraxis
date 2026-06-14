import type {
  Plugin,
} from "../types/plugin";

class PluginRegistry {

  private plugins:
    Plugin[] = [];

  register(
    plugin: Plugin
  ) {
    this.plugins.push(
      plugin
    );
  }

  getAll() {

    console.log(
  "Plugin Registry:",
  this.plugins
);
    return this.plugins;
  }
}

export const
  pluginRegistry =
    new PluginRegistry();
