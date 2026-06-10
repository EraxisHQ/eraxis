import {
  UserContext,
} from "../context/user-context";

import {
  DEFAULT_USER,
} from "../constants/default-user";

type Props = {
  children:
    React.ReactNode;
};

export function UserProvider({
  children,
}: Props) {
  return (
    <UserContext.Provider
      value={DEFAULT_USER}
    >
      {children}
    </UserContext.Provider>
  );
}