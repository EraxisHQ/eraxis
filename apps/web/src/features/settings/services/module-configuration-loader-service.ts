/**
 * =====================================
 * Eraxis
 * Module: Module Configuration Loader
 *
 * Purpose:
 * Loads module settings.
 *
 * Milestone:
 * M001-05-04
 * =====================================
 */

import {
  MODULE_CONFIGURATION_REGISTRY,
} from "../registry/module-configuration-registry";

export function loadModuleConfiguration(
  moduleId: string
) {

  return MODULE_CONFIGURATION_REGISTRY
    .filter(
      (configuration) =>
        configuration.moduleId ===
        moduleId
    );
}
