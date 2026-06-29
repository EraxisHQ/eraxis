import {
  PRODUCT_CATALOG_MANIFEST,
} from "../modules/product-catalog";

import {
  bootstrapProductCatalog,
} from "../modules/product-catalog";

export const COMMERCE_REGISTRY = [
  {
    manifest: PRODUCT_CATALOG_MANIFEST,
    bootstrap: bootstrapProductCatalog,
  },
];
