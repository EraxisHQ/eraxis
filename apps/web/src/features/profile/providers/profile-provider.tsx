import {
  ProfileContext,
} from "../context/profile-context";

import {
  DEFAULT_PROFILE,
} from "../constants/default-profile";

type Props = {
  children:
    React.ReactNode;
};

export function ProfileProvider({
  children,
}: Props) {
  return (
    <ProfileContext.Provider
      value={DEFAULT_PROFILE}
    >
      {children}
    </ProfileContext.Provider>
  );
}