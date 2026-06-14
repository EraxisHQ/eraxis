import type {
  UserPreferences,
} from "../types/user-preferences";

import {
  userPreferencesRegistry,
} from "../services/user-preferences-registry";

export const DEFAULT_USER_PREFERENCES:
  UserPreferences = {
    theme: "light",

    language: "en",
  };

  userPreferencesRegistry
  .register(
    DEFAULT_USER_PREFERENCES
  );