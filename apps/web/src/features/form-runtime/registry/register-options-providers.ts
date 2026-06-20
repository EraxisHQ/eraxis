import { registerOptionsProvider } from "../services/form-options-registry";

registerOptionsProvider("product-categories", async () => [
  {
    label: "Electronics",
    value: "electronics",
  },
  {
    label: "Food",
    value: "food",
  },
  {
    label: "Fashion",
    value: "fashion",
  },
]);
