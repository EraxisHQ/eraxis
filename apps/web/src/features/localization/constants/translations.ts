import type {
  Language,
} from "../types/language";

import { en } from "../translations/en";
import { hi } from "../translations/hi";
import { od } from "../translations/od";
import { ru } from "../translations/ru";

export const TRANSLATIONS:
  Record<Language, typeof en> = {
    en,
    hi,
    od,
    ru,
  };