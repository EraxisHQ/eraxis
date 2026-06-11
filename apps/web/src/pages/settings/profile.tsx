import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import {
  useProfile,
} from "../../features/profile/hooks/use-profile";

import "./settings.css";

export default function ProfileSettingsPage() {

  const profile =
    useProfile();

  return (
    <DashboardLayout>

      <h1>
        Profile Settings
      </h1>

      <div className="settings-card">

        <h2>
          Account Information
        </h2>

        <p>
          Name:
          {" "}
          {profile.displayName}
        </p>

        <p>
          Email:
          {" "}
          {profile.email}
        </p>

        <p>
          Avatar:
          {" "}
          Not Configured
        </p>

      </div>

    </DashboardLayout>
  );
}