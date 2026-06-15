/**
 * =====================================
 * Eraxis
 * Module: Module Configuration Registry
 *
 * Purpose:
 * Stores module-specific
 * configuration.
 *
 * Milestone:
 * M001-05-04
 * =====================================
 */

import type {
  ModuleConfiguration,
} from "../types/module-configuration";

export const MODULE_CONFIGURATION_REGISTRY:
  ModuleConfiguration[] = [
    {
      moduleId: "core",

      key: "dashboard.enabled",

      value: "true",
    },
  ];
