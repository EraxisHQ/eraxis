import {
  userPreferencesRegistry,
} from "./user-preferences-registry";

export class UserPreferencesService {

  getPreferences() {

    return userPreferencesRegistry
      .get();
  }
}

export const
  userPreferencesService =
    new UserPreferencesService();
