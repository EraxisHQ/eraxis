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

import { NavLink }
  from "react-router-dom";

import {
  useNavigation,
} from "../../features/navigation/hooks/use-navigation";

export default function Sidebar() {
  const items =
    useNavigation();

const groups = [
  ...new Set(
    items.map(
      (item) =>
        item.group
    )
  ),
];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        Eraxis
      </div>

      <nav className="sidebar-nav">
        {groups.map((group) => (
          <div key={group}>
            <h4>{group}</h4>

            <ul>
              {items
                .filter(
                  (item) =>
                    item.group ===
                    group
                )
                .map((item) => (
                 
                  <li key={item.path}>
  <NavLink
    to={item.path}
    className={({ isActive }) =>
      isActive
        ? "nav-link active"
        : "nav-link"
    }
  >
    {item.label}
  </NavLink>
</li>
                ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}