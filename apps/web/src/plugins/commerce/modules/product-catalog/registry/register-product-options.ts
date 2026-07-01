import { registerOptionsProvider } from "../../../../../features/form-runtime/services/form-options-registry";

import { categoryService } from "../../category/services/category-service";
import { brandService } from "../services/brand-service";
import { unitService } from "../services/unit-service";

export function registerProductOptions() {

  registerOptionsProvider(
    "product-categories",
    async () => {
      const categories =
        await categoryService.findAll();

      return categories.map(category => ({
        label: category.name,
        value: category.id,
      }));
    },
  );

  registerOptionsProvider(
    "product-brands",
    async () => {
      const brands =
        await brandService.findAll();

      return brands.map(brand => ({
        label: brand.name,
        value: brand.id,
      }));
    },
  );

  registerOptionsProvider(
    "product-units",
    async () => {
      const units =
        await unitService.findAll();

      return units.map(unit => ({
        label: unit.name,
        value: unit.id,
      }));
    },
  );

}