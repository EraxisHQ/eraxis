/**
 * =====================================
 * Eraxis
 * Module: Localization Context
 *
 * Purpose:
 * Global language management.
 *
 * Technical Debt:
 * - TD-012
 * =====================================
 */

import {
  createContext,
  useEffect,
  useState,
} from "react";

import type { Language }
  from "../types/language";

import {
  LANGUAGE_STORAGE_KEY,
} from "../constants/localization.constants";

import { en } from "../translations/en";
import { hi } from "../translations/hi";
import { od } from "../translations/od";
import { ru } from "../translations/ru";

type TranslationDictionary =
  typeof en;

type LocalizationContextValue = {
  language: Language;
  setLanguage: (
    language: Language
  ) => void;
  translations:
    TranslationDictionary;
};

export const LocalizationContext =
  createContext<LocalizationContextValue>({
    language: "en",
    setLanguage: () => {},
    translations: en,
  });

type Props = {
  children: React.ReactNode;
};

export function LocalizationProvider({
  children,
}: Props) {
  const [language, setLanguage] =
    useState<Language>("en");

  useEffect(() => {
    const savedLanguage =
      localStorage.getItem(
        LANGUAGE_STORAGE_KEY
      );

    if (
      savedLanguage === "en" ||
      savedLanguage === "hi" ||
      savedLanguage === "od" ||
      savedLanguage === "ru"
    ) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LANGUAGE_STORAGE_KEY,
      language
    );
  }, [language]);

  const translations =
    language === "hi"
      ? hi
      : language === "od"
      ? od
      : language === "ru"
      ? ru
      : en;

  return (
    <LocalizationContext.Provider
      value={{
        language,
        setLanguage,
        translations,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
}