import {
  createContext,
} from "react";

import type {
  Command,
} from "../types/command";

export const CommandContext =
  createContext<Command[]>([]);