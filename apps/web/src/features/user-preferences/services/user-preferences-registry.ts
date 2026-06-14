import type {
  UserPreferences,
} from "../types/user-preferences";

class UserPreferencesRegistry {

  private preferences:
    UserPreferences | null = null;

  register(
    preferences: UserPreferences
  ) {
    this.preferences =
      preferences;
  }

  get() {
    return this.preferences;
  }
}

export const
  userPreferencesRegistry =
    new UserPreferencesRegistry();
