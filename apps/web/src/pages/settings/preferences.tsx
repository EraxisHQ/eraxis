import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import UserPreferencesPanel
  from "../../features/user-preferences/components/user-preferences-panel";

export default function PreferencesPage() {

  return (
    <DashboardLayout>

      <h1>
        Preferences
      </h1>

      <UserPreferencesPanel />

    </DashboardLayout>
  );
}
