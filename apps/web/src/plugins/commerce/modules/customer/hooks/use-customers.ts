import { useEffect, useState } from "react";
import type { Customer } from "../types/customer";

import {
  getCustomers,
  isCustomersLoaded,
  refreshCustomers,
  subscribeCustomers,
} from "../services/customer-store";

export function useCustomers() {
  const [customers, setCustomers] =
    useState<Customer[]>(getCustomers());

  useEffect(() => {
    if (!isCustomersLoaded()) {
      refreshCustomers();
    }

    const unsubscribe =
      subscribeCustomers(() => {
        setCustomers(getCustomers());
      });

    return unsubscribe;
  }, []);

  return customers;
}
