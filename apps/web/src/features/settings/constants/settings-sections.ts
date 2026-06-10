import type {
  SettingsSection,
} from "../types/settings-section";

export const SETTINGS_SECTIONS:
  SettingsSection[] = [
    {
      id: "appearance",
      name: "Appearance",
      route: "/settings/appearance",
    },

    {
      id: "localization",
      name: "Localization",
      route: "/settings/localization",
    },

    {
      id: "profile",
      name: "Profile",
      route: "/settings/profile",
    },

    {
      id: "tenant",
      name: "Tenant",
      route: "/settings/tenant",
    },

    {
      id: "system",
      name: "System",
      route: "/settings/system",
    },
  ];