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

import {
    useLocalization,
} from "../../features/localization/hooks/use-localization";

export default function Topbar() {

    const {
        theme,
        toggleTheme,
    } = useTheme();

    const {
        language,
        setLanguage,
    } = useLocalization();

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
                {/* <button>Language</button> */}
                <select
                    value={language}
                    onChange={(event) =>
                        setLanguage(
                            event.target.value as any
                        )
                    }
                >
                    <option value="en">
                        English
                    </option>

                    <option value="hi">
                        Hindi
                    </option>

                    <option value="od">
                        Odia
                    </option>
                </select>
                <button>User</button>
            </div>
        </header>
    );
}