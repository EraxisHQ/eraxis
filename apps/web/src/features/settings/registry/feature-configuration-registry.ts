/**
 * =====================================
 * Eraxis
 * Module: Feature Configuration Registry
 *
 * Purpose:
 * Stores feature-specific
 * configuration.
 *
 * Milestone:
 * M001-05-05
 * =====================================
 */

import type {
  FeatureConfiguration,
} from "../types/feature-configuration";

export const FEATURE_CONFIGURATION_REGISTRY:
  FeatureConfiguration[] = [
    {
      featureId:
        "dashboard",

      key:
        "enabled",

      value:
        "true",
    },
  ];
