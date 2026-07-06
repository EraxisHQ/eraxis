import { useEffect, useState } from "react";

import type { Sale } from "../types/sale";

import {
  getSales,
  isSalesLoaded,
  refreshSales,
  subscribeSales,
} from "../services/sales-store";

export function useSales() {
  const [sales, setSales] =
    useState<Sale[]>(getSales());

  useEffect(() => {
    if (!isSalesLoaded()) {
      refreshSales();
    }

    const unsubscribe =
      subscribeSales(() => {
        setSales(getSales());
      });

    return unsubscribe;
  }, []);

  return sales;
}
