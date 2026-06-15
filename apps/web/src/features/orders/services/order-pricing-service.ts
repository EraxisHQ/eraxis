import {
  getPrice,
} from "../../pricing/services/price-resolution-service";

export function getUnitPrice(
  productId: string
) {
  const price =
    getPrice(
      productId
    );

  return price?.amount ?? 0;
}
