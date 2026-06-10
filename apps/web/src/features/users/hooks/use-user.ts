import {
  useContext,
} from "react";

import {
  UserContext,
} from "../context/user-context";

export function useUser() {
  const user =
    useContext(
      UserContext
    );

  if (!user) {
    throw new Error(
      "UserProvider missing"
    );
  }

  return user;
}