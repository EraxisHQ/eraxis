import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import type { AuthUser } from "../types/auth-user";

interface AuthContextValue {
  user: AuthUser | null;
  setUser: (
    user: AuthUser | null
  ) => void;
}

const AuthContext =
  createContext<AuthContextValue | null>(
    null
  );

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] =
    useState<AuthUser | null>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used within AuthProvider"
    );
  }

  return context;
}