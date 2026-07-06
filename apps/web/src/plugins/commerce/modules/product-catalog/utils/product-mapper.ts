import type { Product } from "../../../../../features/products/types/product";

export function mapFormToProduct(
  id: string,
  values: Record<string, unknown>,
): Product {
  return {
    id,
    sku: String(values.sku),
    name: String(values.name),
    description: String(values.description ?? ""),
    categoryId: String(values.category ?? ""),
    brandId: "",
    price: Number(values.price ?? 0),
    active: Boolean(values.active),
    isGstRegistered: Boolean(values.isGstRegistered),
    gstNumber: String(values.gstNumber ?? ""),
    warrantyMonths: Number(values.warrantyMonths ?? 0),
    variantIds: [],
  };
}

export function mapProductToForm(product: Product) {
  return {
    sku: product.sku,
    name: product.name,
    description: product.description,
    category: product.categoryId,
    price: product.price,
    active: product.active,
    isGstRegistered: product.isGstRegistered,
    gstNumber: product.gstNumber,
    warrantyMonths: product.warrantyMonths,
  };
}