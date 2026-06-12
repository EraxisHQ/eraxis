import {
  createContext,
} from "react";

import type {
  Branch,
} from "../types/branch";

export const BranchContext =
  createContext<Branch[]>([]);
