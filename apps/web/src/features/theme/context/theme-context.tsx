/**
 * =====================================
 * Eraxis
 * Module: Theme Context
 *
 * Purpose:
 * Global theme management.
 *
 * Technical Debt:
 * - TD-011
 * =====================================
 */

import {
  createContext,
  useEffect,
  useState,
} from "react";

import type { ThemeMode } from "../types/theme";
import { THEME_STORAGE_KEY } from "../constants/theme.constants";

type ThemeContextValue = {
  theme: ThemeMode;
  toggleTheme: () => void;
};

export const ThemeContext =
  createContext<ThemeContextValue>({
    theme: "light",
    toggleTheme: () => {},
  });

type Props = {
  children: React.ReactNode;
};

export function ThemeProvider({
  children,
}: Props) {
  const [theme, setTheme] =
    useState<ThemeMode>("light");

  useEffect(() => {
    const savedTheme =
      localStorage.getItem(
        THEME_STORAGE_KEY
      );

    if (
      savedTheme === "light" ||
      savedTheme === "dark"
    ) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem(
      THEME_STORAGE_KEY,
      theme
    );
  }, [theme]);

  function toggleTheme() {
    setTheme((current) =>
      current === "light"
        ? "dark"
        : "light"
    );
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}