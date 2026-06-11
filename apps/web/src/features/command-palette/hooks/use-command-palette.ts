import {
  useContext,
} from "react";

import {
  CommandContext,
} from "../context/command-context";

export function useCommandPalette() {
  return useContext(
    CommandContext
  );
}