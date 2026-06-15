import {
  PRODUCT_REGISTRY,
} from "../registry/product-registry";

export function loadProducts() {

  return PRODUCT_REGISTRY
    .filter(
      (product) =>
        product.active
    );
}
