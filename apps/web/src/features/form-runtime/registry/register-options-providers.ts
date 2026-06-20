import { registerOptionsProvider } from "../services/form-options-registry";

import { fetchCategories } from "../services/form-data-source";

registerOptionsProvider("product-categories", async () => {
  return fetchCategories();
});
