/**
 * =====================================
 * Eraxis
 * Module: Settings
 *
 * Purpose:
 * System configuration.
 * =====================================
 */

/**
 * =====================================
 * Eraxis
 * Module: Settings
 *
 * Purpose:
 * Centralized platform configuration.
 *
 * Status:
 * Placeholder Page
 * =====================================
 */

import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import SettingsNavigation
  from "../../features/settings/components/settings-navigation";

import "./settings.css";

export default function SettingsPage() {
 return (
  <DashboardLayout>

    <h1>Settings</h1>

    <div className="settings-layout">

      <aside className="settings-sidebar">
        <SettingsNavigation />
      </aside>

      <section className="settings-content">

        <h2>
          Welcome to Settings
        </h2>

        <p>
          Select a settings section
          from the left menu.
        </p>

      </section>

    </div>

  </DashboardLayout>
);
}