import {
  useContext,
} from "react";

import {
  BranchContext,
} from "../context/branch-context";

export function useBranches() {

  return useContext(
    BranchContext
  );
}
