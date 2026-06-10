import {
  useContext,
} from "react";

import {
  ProfileContext,
} from "../context/profile-context";

export function useProfile() {
  const profile =
    useContext(
      ProfileContext
    );

  if (!profile) {
    throw new Error(
      "ProfileProvider missing"
    );
  }

  return profile;
}