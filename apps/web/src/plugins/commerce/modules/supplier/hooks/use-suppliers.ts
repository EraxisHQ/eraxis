import { useEffect, useState } from "react";
import type { Supplier } from "../types/supplier";

import {
  getSuppliers,
  isSuppliersLoaded,
  refreshSuppliers,
  subscribeSuppliers,
} from "../services/supplier-store";

export function useSuppliers() {
  const [suppliers, setSuppliers] =
    useState<Supplier[]>(getSuppliers());

  useEffect(() => {
    if (!isSuppliersLoaded()) {
      refreshSuppliers();
    }

    const unsubscribe =
      subscribeSuppliers(() => {
        setSuppliers(getSuppliers());
      });

    return unsubscribe;
  }, []);

  return suppliers;
}
