// import {
//   BranchContext,
// } from "../context/branch-context";

// import {
//   DEFAULT_BRANCHES,
// } from "../constants/default-branches";

// type Props = {
//   children: React.ReactNode;
// };

// export function BranchProvider({
//   children,
// }: Props) {

//   return (
//     <BranchContext.Provider
//       value={DEFAULT_BRANCHES}
//     >
//       {children}
//     </BranchContext.Provider>
//   );
// }


import {
  useEffect,
  useState,
} from "react";

import {
  BranchContext,
} from "../context/branch-context";

import {
  getBranches,
} from "../services/branch.service";

import type {
  Branch,
} from "../types/branch";

type Props = {
  children:
    React.ReactNode;
};

export function BranchProvider({
  children,
}: Props) {

  const [
    branches,
    setBranches,
  ] = useState<
    Branch[]
  >([]);

  useEffect(() => {

    async function loadBranches() {

      const result =
        await getBranches();

      setBranches(
        result
      );
    }

    loadBranches();

  }, []);

  return (
    <BranchContext.Provider
      value={branches}
    >
      {children}
    </BranchContext.Provider>
  );
}
