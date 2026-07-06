import { useEffect, useState } from "react";

import type { Invoice } from "../types/invoice";

import {
  getInvoices,
  isInvoicesLoaded,
  refreshInvoices,
  subscribeInvoices,
} from "../services/invoice-store";

export function useInvoices() {
  const [invoices, setInvoices] =
    useState<Invoice[]>(getInvoices());

  useEffect(() => {
    if (!isInvoicesLoaded()) {
      refreshInvoices();
    }

    const unsubscribe =
      subscribeInvoices(() => {
        setInvoices(getInvoices());
      });

    return unsubscribe;
  }, []);

  return invoices;
}
