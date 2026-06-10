/**
 * =====================================
 * Eraxis
 * Module: Dashboard
 *
 * Purpose:
 * Main dashboard landing page.
 *
 * Technical Debt:
 * - TD-006
 * =====================================
 */

import DashboardLayout from "../../shell/dashboard-layout/dashboard-layout";
import "./dashboard.css";
import {
  useLocalization,
} from "../../features/localization/hooks/use-localization";


export default function DashboardPage() {
  const {
    translations,
  } = useLocalization();



  return (
    <DashboardLayout>
      <div className="dashboard-page">

        <section className="dashboard-header">
          {/* <h1>Welcome to Eraxis</h1> */}
          <h1>
            {translations.welcome}
          </h1>
          <p>Core Platform Ready</p>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <h3>Applications</h3>
            <p>0</p>
          </div>

          <div className="stat-card">
            <h3>Users</h3>
            <p>0</p>
          </div>

          <div className="stat-card">
            <h3>Tenants</h3>
            <p>0</p>
          </div>
        </section>

        <section className="info-grid">

          <div className="panel">
            <h2>System Status</h2>

            <p>Platform operational.</p>
          </div>

          <div className="panel">
            <h2>Recent Activity</h2>

            <p>No activity available.</p>
          </div>

        </section>



      </div>
    </DashboardLayout>
  );
}