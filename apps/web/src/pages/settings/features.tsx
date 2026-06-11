import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import FeatureFlagPanel
  from "../../features/feature-flags/components/feature-flag-panel";

export default function FeatureSettingsPage() {

  return (
    <DashboardLayout>

      <h1>
        Feature Management
      </h1>

      <FeatureFlagPanel />

    </DashboardLayout>
  );
}
