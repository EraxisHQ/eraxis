import {
  useFeatureFlags,
} from "../hooks/use-feature-flags";

export default function FeatureFlagPanel() {

  const flags =
    useFeatureFlags();

  return (
    <div>

      <h2>
        Feature Flags
      </h2>

      {flags.map(
        (flag) => (
          <div
            key={flag.key}
          >
            {flag.key}
            {" : "}
            {flag.enabled
              ? "✅"
              : "❌"}
          </div>
        )
      )}

    </div>
  );
}
