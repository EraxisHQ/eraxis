import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import "./settings.css";

export default function LocalizationSettingsPage() {
  return (
    <DashboardLayout>

      <h1>
        Localization Settings
      </h1>

      <div className="settings-card">

        <h2>
          Language
        </h2>

        <p>
          Configure application language.
        </p>

      </div>

    </DashboardLayout>
  );
}