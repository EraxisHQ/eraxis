/**
 * =====================================
 * Eraxis
 * Module: Topbar
 *
 * Purpose:
 * Global application header.
 *
 * Technical Debt:
 * - TD-010
 * =====================================
 */

import "./topbar.css";

export default function Topbar() {
    return (
        <header className="topbar">
            {/* <div>
        Search
      </div> */}

            <input
                className="search-box"
                placeholder="Search modules..."
            />

            <div className="topbar-actions">
                <button>Theme</button>
                <button>Language</button>
                <button>User</button>
            </div>
        </header>
    );
}