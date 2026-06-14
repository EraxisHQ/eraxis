import {
  featureFlagRegistry,
} from "./feature-flag-registry";

export class FeatureFlagService {

  getFlags() {
    return featureFlagRegistry
      .getAll();
  }

  isEnabled(
    key: string
  ) {
    return featureFlagRegistry
      .getAll()
      .some(
        (flag) =>
          flag.key === key &&
          flag.enabled
      );
  }
}

export const
  featureFlagService =
    new FeatureFlagService();
