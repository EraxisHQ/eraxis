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

export default function SettingsPage() {
  return (
    <DashboardLayout>

      <h1>Settings</h1>

      <SettingsNavigation />

    </DashboardLayout>
  );
}