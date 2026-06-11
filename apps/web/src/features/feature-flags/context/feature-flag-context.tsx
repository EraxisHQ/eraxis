import {
  createContext,
} from "react";

import type {
  FeatureFlag,
} from "../types/feature-flag";

export const FeatureFlagContext =
  createContext<FeatureFlag[]>([]);
