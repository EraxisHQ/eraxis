/**
 * =====================================
 * Eraxis
 * Module: Dashboard Layout
 *
 * Purpose:
 * Dashboard content layout rendered
 * inside Application Shell.
 *
 * Milestone:
 * M001-01-02
 *
 * Technical Debt:
 * - None
 * =====================================
 */

import "./dashboard-layout.css";

import Breadcrumbs
  from "../../features/breadcrumbs/components/breadcrumbs";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({
  children,
}: Props) {

  return (
    <main
      className="layout-content"
    >

      <Breadcrumbs />

      {children}

    </main>
  );
}