import {
  PRODUCT_CATALOG_MANIFEST,
} from "../modules/product-catalog";

import {
  bootstrapProductCatalog,
} from "../modules/product-catalog";

import type {
  RuntimeModule,
} from "../../../features/runtime/types/runtime-module";

import {
  CATEGORY_MANIFEST,
} from "../modules/category";

import {
  bootstrapCategory,
} from "../modules/category";

export const COMMERCE_REGISTRY: RuntimeModule[] = [ 
  {
    manifest: PRODUCT_CATALOG_MANIFEST,
    bootstrap: bootstrapProductCatalog,
  },
  {
  manifest: CATEGORY_MANIFEST,
  bootstrap: bootstrapCategory,
},
];

