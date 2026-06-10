/**
 * =====================================
 * Eraxis
 * Module: Dashboard Shell
 *
 * Purpose:
 * Main application layout.
 *
 * Technical Debt:
 * - TD-009
 * - TD-010
 * =====================================
 */

import "./dashboard-layout.css";

import Sidebar from "../sidebar/sidebar";
import Topbar from "../topbar/topbar";
import Breadcrumbs from "../../features/breadcrumbs/components/breadcrumbs";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({
  children,
}: Props) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="layout-main">
        <Topbar />

        <main className="layout-content">
          {children}
        </main>

        <main className="layout-content">
          <Breadcrumbs />
          {children}
        </main>
        
      </div>
    </div>
  );
}