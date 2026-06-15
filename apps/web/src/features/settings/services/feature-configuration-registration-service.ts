/**
 * =====================================
 * Eraxis
 * Module: Feature Configuration Registration
 *
 * Purpose:
 * Runtime registration of
 * feature settings.
 *
 * Milestone:
 * M001-05-05
 * =====================================
 */

import type {
  FeatureConfiguration,
} from "../types/feature-configuration";

import {
  FEATURE_CONFIGURATION_REGISTRY,
} from "../registry/feature-configuration-registry";

export function registerFeatureConfiguration(
  configuration:
    FeatureConfiguration
) {

  FEATURE_CONFIGURATION_REGISTRY.push(
    configuration
  );
}
