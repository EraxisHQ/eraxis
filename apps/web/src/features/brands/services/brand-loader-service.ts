import {
  BRAND_REGISTRY,
} from "../registry/brand-registry";

export function loadBrands() {

  return BRAND_REGISTRY
    .filter(
      (brand) =>
        brand.active
    );
}
