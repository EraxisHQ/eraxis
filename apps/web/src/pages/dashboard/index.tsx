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

import DashboardGrid
  from "../../features/dashboard/components/dashboard-grid";

import ActivityFeed
  from "../../features/activity-center/components/activity-feed";

import {
  getCommerceMetrics,
} from "../../features/dashboard/services/commerce-dashboard-service";

import {
  getRevenue,
} from "../../features/orders/services/revenue-service";

export default function DashboardPage() {
  const {
    translations,
  } = useLocalization();

  const metrics =
    getCommerceMetrics();

  const revenue =
    getRevenue();

  return (
    <DashboardLayout>
      <div className="dashboard-page">

        <section className="dashboard-header">
          <h1>
            {translations.welcome}
          </h1>
          <p>Core Platform Ready</p>
        </section>

        {/* <section className="stats-grid">
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
        </section> */}
        <DashboardGrid />

        <section className="info-grid">

          <div className="panel">
            <h2>System Status</h2>

            <p>Platform operational.</p>
          </div>

          <div className="panel">
            <h2>Recent Activity</h2>

            {/* <p>No activity available.</p> */}
            <ActivityFeed />
          </div>

        </section>

        <h2>
          Commerce Metrics
        </h2>

        <p>
          Products:
          {metrics.products}
        </p>

        <p>
          Categories:
          {metrics.categories}
        </p>

        <p>
          Customers:
          {metrics.customers}
        </p>

        <p>
          Orders:
          {metrics.orders}
        </p>

        <p>
          Revenue:
          ₹{revenue}
        </p>

      </div>
    </DashboardLayout>
  );
}