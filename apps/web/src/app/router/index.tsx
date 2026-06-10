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
      </Routes>

      <Route
        path="/settings"
        element={<SettingsPage />}
      />
    </BrowserRouter>
  );
}