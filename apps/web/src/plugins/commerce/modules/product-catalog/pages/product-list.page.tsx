import ProductTable
from "../components/product-table";

import {
  FormPage,
} from "../../../../../features/form-runtime/components/form-page";

export function
ProductListPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Product Catalog
      </h1>

      <FormPage
        formId="product"
      />

      <ProductTable />
    </div>
  );
}
