import type {
  FeatureFlag,
} from "../types/feature-flag";

import {
  featureFlagRegistry,
} from "../services/feature-flag-registry";

export const DEFAULT_FEATURE_FLAGS:
  FeatureFlag[] = [
    {
      key: "inventory",
      enabled: true,
    },

    {
      key: "hrms",
      enabled: false,
    },

    {
      key: "fleet",
      enabled: false,
    },
  ];

  DEFAULT_FEATURE_FLAGS.forEach(
  (flag) => {
    featureFlagRegistry.register(
      flag
    );
  }
);