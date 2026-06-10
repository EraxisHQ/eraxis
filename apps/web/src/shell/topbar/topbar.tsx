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

import {
    useUser,
} from "../../features/users/hooks/use-user";

import {
  useTenant,
} from "../../features/tenants/hooks/use-tenant";

export default function Topbar() {

    const {
        theme,
        toggleTheme,
    } = useTheme();

    const {
        language,
        setLanguage,
    } = useLocalization();

    const user =
        useUser();

        const tenant =
  useTenant();

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

                    <option value="ru">
                        Russian
                    </option>
                </select>
                {/* <button>User</button> */}
                <button>
  {tenant.code}
</button>
                <button>
                    {user.firstName}
                </button>
            </div>
        </header>
    );
}