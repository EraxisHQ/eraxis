import type { Brand } from "../types/brand";

export function mapBrandToForm(
  brand: Brand,
): Record<string, unknown> {
  return {
    code: brand.code,
    name: brand.name,
    description: brand.description,
    active: brand.active,
  };
}
