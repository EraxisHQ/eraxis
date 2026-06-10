import {
  useContext,
} from "react";

import {
  ApplicationContext,
} from "../context/application-context";

export function useApplications() {
  return useContext(
    ApplicationContext
  );
}