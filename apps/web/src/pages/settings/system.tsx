import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import "./settings.css";

export default function SystemSettingsPage() {
  return (
    <DashboardLayout>

      <h1>
        System Settings
      </h1>

      <div className="settings-card">

        <h2>
          Application Information
        </h2>

        <p>
          Application:
          {" "}
          Eraxis
        </p>

        <p>
          Version:
          {" "}
          0.1.0
        </p>

        <p>
          Environment:
          {" "}
          Development
        </p>

      </div>

    </DashboardLayout>
  );
}