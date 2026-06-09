import { useContext }
  from "react";

import {
  LocalizationContext,
} from "../context/localization-context";

export function useLocalization() {
  return useContext(
    LocalizationContext
  );
}