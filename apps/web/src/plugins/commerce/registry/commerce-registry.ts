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

import {
  BRAND_MANIFEST,
} from "../modules/brand";

import {
  bootstrapBrand,
} from "../modules/brand";

import {
  UNIT_MANIFEST,
} from "../modules/unit";

import {
  bootstrapUnit,
} from "../modules/unit";

export const COMMERCE_REGISTRY: RuntimeModule[] = [ 
  {
    manifest: PRODUCT_CATALOG_MANIFEST,
    bootstrap: bootstrapProductCatalog,
  },
  {
  manifest: CATEGORY_MANIFEST,
  bootstrap: bootstrapCategory,
},
  {
    manifest: BRAND_MANIFEST,
    bootstrap: bootstrapBrand,
  },
  {
    manifest: UNIT_MANIFEST,
    bootstrap: bootstrapUnit,
  }
];

