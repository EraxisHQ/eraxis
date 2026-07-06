import { useEffect, useState } from "react";
import type { Inventory } from "../types/inventory";

import {
  getInventory,
  isInventoryLoaded,
  refreshInventory,
  subscribeInventory,
} from "../services/inventory-store";

export function useInventory() {
  const [inventory, setInventory] =
    useState<Inventory[]>(getInventory());

  useEffect(() => {
    if (!isInventoryLoaded()) {
      refreshInventory();
    }

    const unsubscribe =
      subscribeInventory(() => {
        setInventory(getInventory());
      });

    return unsubscribe;
  }, []);

  return inventory;
}
