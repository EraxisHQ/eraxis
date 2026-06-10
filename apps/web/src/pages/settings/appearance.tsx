import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import {
  useTheme,
} from "../../features/theme/hooks/use-theme";

import "./settings.css";

export default function AppearanceSettingsPage() {

  const {
    theme,
    toggleTheme,
  } = useTheme();

  return (
    <DashboardLayout>

      <h1>
        Appearance Settings
      </h1>

      <div className="settings-card">

        <h2>
          Theme
        </h2>

        <p>
          Current Theme:
          {" "}
          {theme}
        </p>

        <button
          onClick={toggleTheme}
        >
          Switch Theme
        </button>

      </div>

    </DashboardLayout>
  );
}