/**
 * =====================================
 * Eraxis
 * Module: Routing
 *
 * Purpose:
 * Central route configuration.
 *
 * Technical Debt:
 * - TD-004
 *
 * =====================================
 */
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LoginPage from "../../pages/login";
import DashboardPage from "../../pages/dashboard";
import ApplicationsPage from "../../pages/applications";
import AdministrationPage from "../../pages/administration";
import SettingsPage from "../../pages/settings";
import ProfilePage from "../../pages/profile";
import AppearanceSettingsPage
  from "../../pages/settings/appearance";

import LocalizationSettingsPage
  from "../../pages/settings/localization";

import ProfileSettingsPage
  from "../../pages/settings/profile";

import TenantSettingsPage
  from "../../pages/settings/tenant";

import SystemSettingsPage
  from "../../pages/settings/system";

import FeatureSettingsPage
  from "../../pages/settings/features";
  
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LoginPage />}
        />

        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />

        <Route
          path="/applications"
          element={<ApplicationsPage />}
        />

        <Route
          path="/administration"
          element={<AdministrationPage />}
        />

        <Route
          path="/profile"
          element={<ProfilePage />}
        />


        <Route
          path="/settings"
          element={<SettingsPage />}
        />

        <Route
          path="/settings/appearance"
          element={
            <AppearanceSettingsPage />
          }
        />

        <Route
          path="/settings/localization"
          element={
            <LocalizationSettingsPage />
          }
        />

        <Route
          path="/settings/profile"
          element={
            <ProfileSettingsPage />
          }
        />

        <Route
          path="/settings/tenant"
          element={
            <TenantSettingsPage />
          }
        />

        <Route
          path="/settings/system"
          element={
            <SystemSettingsPage />
          }
        />
        <Route
          path="/settings/features"
          element={
            <FeatureSettingsPage />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}