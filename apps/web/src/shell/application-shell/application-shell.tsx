/**
 * =====================================
 * Eraxis
 * Module: Application Shell
 *
 * Purpose:
 * Master runtime container for all
 * Eraxis applications.
 *
 * Milestone:
 * M001-01-01
 * M001-01-02
 *
 * Technical Debt:
 * - None
 * =====================================
 */

import "./application-shell.css";

import Sidebar
  from "../sidebar/sidebar";

import Topbar
  from "../topbar/topbar";

type Props = {
  children: React.ReactNode;
};

export default function ApplicationShell({
  children,
}: Props) {

  return (
    <div className="application-shell">

      <Sidebar />

      <div
        className="application-content"
      >

        <Topbar />

        {children}

      </div>

    </div>
  );
}