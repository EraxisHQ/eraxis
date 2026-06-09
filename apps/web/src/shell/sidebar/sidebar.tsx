/**
 * =====================================
 * Eraxis
 * Module: Sidebar
 *
 * Purpose:
 * Main platform navigation.
 *
 * Technical Debt:
 * - TD-009
 * =====================================
 */

import "./sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        Eraxis
      </div>

      <nav className="sidebar-nav">
        <h4>General</h4>

        <ul>
          <li>Dashboard</li>
        </ul>

        <h4>Applications</h4>

        <ul>
          <li>Applications</li>
        </ul>

        <h4>Administration</h4>

        <ul>
          <li>Administration</li>
          <li>Settings</li>
        </ul>
      </nav>
    </aside>
  );
}