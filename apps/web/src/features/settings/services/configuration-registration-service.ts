/**
 * =====================================
 * Eraxis
 * Module: Configuration Registration
 *
 * Purpose:
 * Runtime registration of
 * configuration entries.
 *
 * Milestone:
 * M001-05-02
 * =====================================
 */

import {
  CONFIGURATION_REGISTRY,
} from "../registry/configuration-registry";

export function registerConfiguration(
  configuration: {
    key: string;
    value: string;
  }
) {
  CONFIGURATION_REGISTRY.push(
    configuration
  );
}
