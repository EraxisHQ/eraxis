import {
  pluginRegistry,
} from "./plugin-registry";

export class PluginService {

  getPlugins() {

    return pluginRegistry
      .getAll()
      .filter(
        (plugin) =>
          plugin.enabled
      );
  }
}

export const
  pluginService =
    new PluginService();