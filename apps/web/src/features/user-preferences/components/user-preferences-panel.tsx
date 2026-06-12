import {
  useUserPreferences,
} from "../hooks/use-user-preferences";

export default function UserPreferencesPanel() {

  const preferences =
    useUserPreferences();

  return (
    <div>

      <h2>
        User Preferences
      </h2>

      <div>
        Theme:
        {" "}
        {preferences.theme}
      </div>

      <div>
        Language:
        {" "}
        {preferences.language}
      </div>

    </div>
  );
}
