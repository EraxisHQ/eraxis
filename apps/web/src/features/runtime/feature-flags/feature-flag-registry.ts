import type {
  RuntimeFeatureFlag,
} from "../types/runtime-feature-flag";

const FEATURE_FLAGS: RuntimeFeatureFlag[] = [];

export function registerFeatureFlag(
  featureFlag: RuntimeFeatureFlag,
) {
  FEATURE_FLAGS.push(featureFlag);
}

export function getFeatureFlags() {
  return FEATURE_FLAGS;
}
