import {
  PRICE_REGISTRY,
} from "../registry/price-registry";

export function loadPrices() {

  return PRICE_REGISTRY
    .filter(
      (price) =>
        price.active
    );
}
