/**
 * =====================================
 * Eraxis
 * Module: Plugin Dependency Service
 *
 * Purpose:
 * Validates plugin
 * dependencies.
 *
 * Milestone:
 * M001-09-02
 * =====================================
 */

import type {
  Plugin,
} from "../types/plugin";

export function validateDependencies(
  plugins: Plugin[]
) {

  const pluginCodes =
    plugins.map(
      (plugin) =>
        plugin.code
    );

  return plugins.every(
    (plugin) =>
      (plugin.dependencies ?? [])
        .every(
          (dependency) =>
            pluginCodes.includes(
              dependency
            )
        )
  );
}
