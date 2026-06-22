import { DEFAULT_BRANDS } from "../constants/default-brands";

import type { Brand } from "../types/brand";

const brands: Brand[] = [...DEFAULT_BRANDS];

export function getBrands() {
  return brands;
}

export function createBrand(brand: Brand) {
  brands.push(brand);
}

export function updateBrand(updatedBrand: Brand) {
  const index = brands.findIndex((brand) => brand.id === updatedBrand.id);

  if (index >= 0) {
    brands[index] = updatedBrand;
  }
}

export function deleteBrand(brandId: string) {
  const index = brands.findIndex((brand) => brand.id === brandId);

  if (index >= 0) {
    brands.splice(index, 1);
  }
}
