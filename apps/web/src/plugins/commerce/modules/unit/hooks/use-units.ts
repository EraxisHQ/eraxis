import { useEffect, useState } from "react";
import type { Unit } from "../types/unit";

import {
  getUnits,
  isUnitsLoaded,
  refreshUnits,
  subscribeUnits,
} from "../services/unit-store";

export function useUnits() {
  const [units, setUnits] =
    useState<Unit[]>(getUnits());

  useEffect(() => {
    if (!isUnitsLoaded()) {
      refreshUnits();
    }

    const unsubscribe =
      subscribeUnits(() => {
        setUnits(getUnits());
      });

    return unsubscribe;
  }, []);

  return units;
}
