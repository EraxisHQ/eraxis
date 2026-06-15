/**
 * =====================================
 * Eraxis
 * Module: Feature Configuration Loader
 *
 * Purpose:
 * Loads feature settings.
 *
 * Milestone:
 * M001-05-05
 * =====================================
 */

import {
  FEATURE_CONFIGURATION_REGISTRY,
} from "../registry/feature-configuration-registry";

export function loadFeatureConfiguration(
  featureId: string
) {

  return FEATURE_CONFIGURATION_REGISTRY
    .filter(
      (configuration) =>
        configuration.featureId ===
        featureId
    );
}
