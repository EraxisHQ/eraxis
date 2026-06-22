import { useContext } from "react";

import { BrandContext } from "../context/brand-context";

export function useBrands() {
  return useContext(BrandContext);
}
