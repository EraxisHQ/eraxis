import {
  FeatureFlagContext,
} from "../context/feature-flag-context";

import {
  DEFAULT_FEATURE_FLAGS,
} from "../constants/default-feature-flags";

type Props = {
  children: React.ReactNode;
};

export function FeatureFlagProvider({
  children,
}: Props) {
  return (
    <FeatureFlagContext.Provider
      value={DEFAULT_FEATURE_FLAGS}
    >
      {children}
    </FeatureFlagContext.Provider>
  );
}
