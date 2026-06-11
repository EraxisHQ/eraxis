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

import {
    useTheme,
} from "../../features/theme/hooks/use-theme";

import {
    useLocalization,
} from "../../features/localization/hooks/use-localization";

import {
    useTenant,
} from "../../features/tenants/hooks/use-tenant";

import UserMenu
    from "../../features/user-menu/components/user-menu";

export default function Topbar() {

    const {
        theme,
        toggleTheme,
    } = useTheme();

    const {
        language,
        setLanguage,
    } = useLocalization();

    const tenant =
        useTenant();

    return (
        <header className="topbar">

            <input
                className="search-box"
                placeholder="Search modules..."
            />

            <div className="topbar-actions">

                <button onClick={toggleTheme}>
                    {theme === "light"
                        ? "🌙 Dark"
                        : "☀️ Light"}
                </button>

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

                    <option value="ru">
                        Russian
                    </option>
                </select>

                <button>
                    {tenant.code}
                </button>

                <UserMenu />

            </div>

        </header>
    );
}