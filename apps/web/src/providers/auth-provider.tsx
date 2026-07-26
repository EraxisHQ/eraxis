
import { supabase } from "../lib/supabase";

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
    setLoading(true);

    const result = await getCurrentUser();

    setUser(result);
    setLoading(false);
  }

  loadUser();

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange(async (event) => {
    switch (event) {
      case "SIGNED_OUT":
        setUser(null);
        setLoading(false);
        break;

      case "INITIAL_SESSION":
      case "SIGNED_IN":
      case "TOKEN_REFRESHED":
      case "USER_UPDATED":
        await loadUser();
        break;

      default:
        break;
    }
  });

  return () => {
    subscription.unsubscribe();
  };
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
