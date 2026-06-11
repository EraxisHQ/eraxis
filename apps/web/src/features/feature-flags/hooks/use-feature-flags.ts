import {
  useContext,
} from "react";

import {
  FeatureFlagContext,
} from "../context/feature-flag-context";

export function useFeatureFlags() {
  return useContext(
    FeatureFlagContext
  );
}
