/**
 * =====================================
 * Eraxis
 * Module: Configuration Loader
 *
 * Purpose:
 * Loads runtime configuration.
 *
 * Milestone:
 * M001-05-01
 * =====================================
 */

import {
  CONFIGURATION_REGISTRY,
} from "../registry/configuration-registry";

export function loadConfiguration() {

  return CONFIGURATION_REGISTRY;
}
