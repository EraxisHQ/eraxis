import { BrandContext } from "../context/brand-context";

import { getBrands } from "../services/brand.service";

export function BrandProvider({ children }: { children: React.ReactNode }) {
  return (
    <BrandContext.Provider value={getBrands()}>
      {children}
    </BrandContext.Provider>
  );
}
