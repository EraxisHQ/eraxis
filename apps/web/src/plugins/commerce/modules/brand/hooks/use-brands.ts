import { useEffect, useState } from "react";

import type { Brand } from "../types/brand";

import {
  getBrands,
  isBrandsLoaded,
  refreshBrands,
  subscribeBrands,
} from "../services/brand-store";

export function useBrands() {
  const [brands, setBrands] =
    useState<Brand[]>(getBrands());

  useEffect(() => {
    if (!isBrandsLoaded()) {
      refreshBrands();
    }

    const unsubscribe =
      subscribeBrands(() => {
        setBrands(getBrands());
      });

    return unsubscribe;
  }, []);

  return brands;
}
