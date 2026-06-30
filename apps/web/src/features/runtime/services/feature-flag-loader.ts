import {
  getFeatureFlags,
} from "../feature-flags/feature-flag-registry";

export function loadFeatureFlags() {
  return getFeatureFlags();
}
