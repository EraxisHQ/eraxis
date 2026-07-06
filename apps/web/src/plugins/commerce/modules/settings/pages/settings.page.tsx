import { useState } from "react";

import {
  getCommerceSettings,
  saveCommerceSettings,
} from "../services/settings-service";

export function SettingsPage() {
  const [settings, setSettings] = useState(
    getCommerceSettings(),
  );

  function update<K extends keyof typeof settings>(
    key: K,
    value: (typeof settings)[K],
  ) {
    setSettings({
      ...settings,
      [key]: value,
    });
  }

  return (
    <div>
      <h1>Commerce Settings</h1>

      <div style={{ display: "grid", gap: "16px", maxWidth: "500px" }}>
        <label>
          Currency
          <input
            value={settings.currency}
            onChange={(e) =>
              update("currency", e.target.value)
            }
          />
        </label>

        <label>
          Invoice Prefix
          <input
            value={settings.invoicePrefix}
            onChange={(e) =>
              update("invoicePrefix", e.target.value)
            }
          />
        </label>

        <label>
          Purchase Prefix
          <input
            value={settings.purchasePrefix}
            onChange={(e) =>
              update("purchasePrefix", e.target.value)
            }
          />
        </label>

        <label>
          Sales Prefix
          <input
            value={settings.salesPrefix}
            onChange={(e) =>
              update("salesPrefix", e.target.value)
            }
          />
        </label>

        <label>
          Decimal Places
          <input
            type="number"
            value={settings.decimalPlaces}
            onChange={(e) =>
              update(
                "decimalPlaces",
                Number(e.target.value),
              )
            }
          />
        </label>

        <button
          type="button"
          onClick={() => saveCommerceSettings(settings)}
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}
