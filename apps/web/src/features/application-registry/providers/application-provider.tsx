import {
  ApplicationContext,
} from "../context/application-context";

import {
  APPLICATIONS,
} from "../constants/applications";

type Props = {
  children:
    React.ReactNode;
};

export function ApplicationProvider({
  children,
}: Props) {
  return (
    <ApplicationContext.Provider
      value={APPLICATIONS}
    >
      {children}
    </ApplicationContext.Provider>
  );
}