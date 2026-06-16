import type {
  ProductVariant,
} from "../../products/types/product-variant";

export const PRODUCT_VARIANT_REGISTRY:
  ProductVariant[] = [
    {
      id: "variant-001",

      productId: "product-001",

      sku: "ERAXIS-128",

      name: "128 GB",

      active: true,

      price: 100,

      inventoryQuantity: 50,
    },
  ];
