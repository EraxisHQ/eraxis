import {
  createContext,
} from "react";

import type {
  UserPreferences,
} from "../types/user-preferences";

export const UserPreferencesContext =
  createContext<UserPreferences | null>(
    null
  );