import {
  PRODUCT_CATALOG_MANIFEST,
} from "../modules/product-catalog";

import {
  bootstrapProductCatalog,
} from "../modules/product-catalog";

import type {
  RuntimeModule,
} from "../../../features/runtime/types/runtime-module";

export const COMMERCE_REGISTRY: RuntimeModule[] = [ 
  {
    manifest: PRODUCT_CATALOG_MANIFEST,
    bootstrap: bootstrapProductCatalog,
  },
];
