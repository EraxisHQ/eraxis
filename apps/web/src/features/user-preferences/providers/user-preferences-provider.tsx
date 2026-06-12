import {
  UserPreferencesContext,
} from "../context/user-preferences-context";

import {
  DEFAULT_USER_PREFERENCES,
} from "../constants/default-user-preferences";

type Props = {
  children: React.ReactNode;
};

export function UserPreferencesProvider({
  children,
}: Props) {

  return (
    <UserPreferencesContext.Provider
      value={DEFAULT_USER_PREFERENCES}
    >
      {children}
    </UserPreferencesContext.Provider>
  );
}