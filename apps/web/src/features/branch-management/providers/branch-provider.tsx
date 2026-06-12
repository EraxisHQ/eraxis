import {
  BranchContext,
} from "../context/branch-context";

import {
  DEFAULT_BRANCHES,
} from "../constants/default-branches";

type Props = {
  children: React.ReactNode;
};

export function BranchProvider({
  children,
}: Props) {

  return (
    <BranchContext.Provider
      value={DEFAULT_BRANCHES}
    >
      {children}
    </BranchContext.Provider>
  );
}
