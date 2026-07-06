import type { FormSchema } from "../../../../../features/form-runtime/types/form-schema";

export const INVENTORY_FORM: FormSchema = {
  id: "inventory",
  title: "Inventory",
  fields: [
    {
      id: "productId",
      label: "Product",
      type: "select",
      required: true,
      optionsProvider: "products",
    },
    {
      id: "quantity",
      label: "Quantity",
      type: "number",
      required: true,
    },
    {
      id: "reservedQuantity",
      label: "Reserved Quantity",
      type: "number",
      required: true,
    },
    {
      id: "availableQuantity",
      label: "Available Quantity",
      type: "number",
      required: true,
    },
    {
      id: "reorderLevel",
      label: "Reorder Level",
      type: "number",
      required: true,
    },
  ],
  onSubmit: async () => {},
};
