/**
 * =====================================
 * Eraxis
 * Module: Module Configuration Registration
 *
 * Purpose:
 * Runtime registration of
 * module settings.
 *
 * Milestone:
 * M001-05-04
 * =====================================
 */

import type {
  ModuleConfiguration,
} from "../types/module-configuration";

import {
  MODULE_CONFIGURATION_REGISTRY,
} from "../registry/module-configuration-registry";

export function registerModuleConfiguration(
  configuration:
    ModuleConfiguration
) {

  MODULE_CONFIGURATION_REGISTRY.push(
    configuration
  );
}
