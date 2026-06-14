import {
  featureFlagService,
} from "../services/feature-flag-service";

export function useFeatureFlags() {

  return featureFlagService
    .getFlags();
}