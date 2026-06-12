import {
  useContext,
} from "react";

import {
  ActivityContext,
} from "../context/activity-context";

export function useActivities() {

  return useContext(
    ActivityContext
  );
}
