import { useEffect, useState } from "react";

import type { Purchase } from "../types/purchase";

import {
  getPurchases,
  isPurchasesLoaded,
  refreshPurchases,
  subscribePurchases,
} from "../services/purchase-store";

export function usePurchases() {
  const [purchases, setPurchases] =
    useState<Purchase[]>(getPurchases());

  useEffect(() => {
    if (!isPurchasesLoaded()) {
      refreshPurchases();
    }

    const unsubscribe =
      subscribePurchases(() => {
        setPurchases(getPurchases());
      });

    return unsubscribe;
  }, []);

  return purchases;
}
