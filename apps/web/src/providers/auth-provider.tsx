import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import type {
  ReactNode,
} from "react";

import type {
  AuthUser,
} from "../features/auth/types/auth-user";

import {
  getCurrentUser,
} from "../features/auth/services/current-user.service";

type AuthContextValue = {
  user: AuthUser | null;

  loading: boolean;
};

const AuthContext =
  createContext<
    AuthContextValue | undefined
  >(undefined);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [
    user,
    setUser,
  ] = useState<
    AuthUser | null
  >(null);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {

    async function loadUser() {

      const result =
        await getCurrentUser();
console.log(
  "Current User:",
  result
);
      setUser(result);

      setLoading(false);
    }

    loadUser();

  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {

  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "AuthProvider missing"
    );
  }

  return context;
}