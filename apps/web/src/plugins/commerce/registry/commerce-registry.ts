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

import {
  CUSTOMER_MANIFEST,
} from "../modules/customer";

import {
  bootstrapCustomer,
} from "../modules/customer";

import { SUPPLIER_MANIFEST } from "../modules/supplier";
import { bootstrapSupplier } from "../modules/supplier";

import {
  PURCHASE_MANIFEST,
} from "../modules/purchase";

import {
  bootstrapPurchase,
} from "../modules/purchase";

import {
  INVENTORY_MANIFEST,
} from "../modules/inventory";

import {
  bootstrapInventory,
} from "../modules/inventory";

import {
  SALES_MANIFEST,
} from "../modules/sales";

import {
  bootstrapSales,
} from "../modules/sales";

import {
  INVOICE_MANIFEST,
} from "../modules/invoice";

import {
  bootstrapInvoice,
} from "../modules/invoice";

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
  },
  {
    manifest: CUSTOMER_MANIFEST,
    bootstrap: bootstrapCustomer,
  },
  {
  manifest: SUPPLIER_MANIFEST,
  bootstrap: bootstrapSupplier,
},
{
  manifest: PURCHASE_MANIFEST,
  bootstrap: bootstrapPurchase,
},
{
  manifest: INVENTORY_MANIFEST,
  bootstrap: bootstrapInventory,
},
{
  manifest: SALES_MANIFEST,
  bootstrap: bootstrapSales,
},
{
  manifest: INVOICE_MANIFEST,
  bootstrap: bootstrapInvoice,
}
];

