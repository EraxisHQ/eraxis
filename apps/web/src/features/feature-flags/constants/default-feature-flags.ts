import type {
  FeatureFlag,
} from "../types/feature-flag";

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
