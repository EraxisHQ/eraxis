import {
  PRODUCT_VARIANT_REGISTRY,
} from "../registry/product-variant-registry";

export function loadProductVariants() {

  return PRODUCT_VARIANT_REGISTRY
    .filter(
      (variant) =>
        variant.active
    );
}
