import type {
  FeatureFlag,
} from "../types/feature-flag";

class FeatureFlagRegistry {

  private flags:
    FeatureFlag[] = [];

  register(
    flag: FeatureFlag
  ) {
    this.flags.push(
      flag
    );
  }

  getAll() {
    return this.flags;
  }
}

export const
  featureFlagRegistry =
    new FeatureFlagRegistry();