import {
  ApplicationContext,
} from "../context/application-context";

import {
  loadApplications,
} from "../services/application-loader-service";

type Props = {
  children:
    React.ReactNode;
};

export function ApplicationProvider({
  children,
}: Props) {

  const applications =
    loadApplications();

  return (
    <ApplicationContext.Provider
      value={applications}
    >
      {children}
    </ApplicationContext.Provider>
  );
}