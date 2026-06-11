import {
  CommandContext,
} from "../context/command-context";

import {
  DEFAULT_COMMANDS,
} from "../constants/default-commands";

type Props = {
  children: React.ReactNode;
};

export function CommandProvider({
  children,
}: Props) {
  return (
    <CommandContext.Provider
      value={DEFAULT_COMMANDS}
    >
      {children}
    </CommandContext.Provider>
  );
}