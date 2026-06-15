import {
  PRICE_REGISTRY,
} from "../registry/price-registry";

export function getPrice(
  productId: string
) {

  return PRICE_REGISTRY.find(
    (price) =>
      price.productId ===
      productId
  );
}
