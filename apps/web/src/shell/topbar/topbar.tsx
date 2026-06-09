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

import { useTheme }
    from "../../features/theme/hooks/use-theme";

export default function Topbar() {

    const {
        theme,
        toggleTheme,
    } = useTheme();


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
                {/* <button>Theme</button> */}
                <button onClick={toggleTheme}>
                    {theme === "light"
                        ? "🌙 Dark"
                        : "☀️ Light"}
                </button>
                <button>Language</button>
                <button>User</button>
            </div>
        </header>
    );
}