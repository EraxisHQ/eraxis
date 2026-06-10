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
          path="/settings"
          element={<SettingsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}