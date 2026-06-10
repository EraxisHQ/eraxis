import {
  PluginContext,
} from "../context/plugin-context";

import {
  PLUGINS,
} from "../constants/plugins";

type Props = {
  children:
    React.ReactNode;
};

export function PluginProvider({
  children,
}: Props) {
  return (
    <PluginContext.Provider
      value={PLUGINS}
    >
      {children}
    </PluginContext.Provider>
  );
}