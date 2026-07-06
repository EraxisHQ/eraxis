import { FormPage } from "../../../../../features/form-runtime/components/form-page";

import CategoryTable from "../components/category-table";

export function CategoryListPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Category Management
      </h1>
      <>
      <FormPage
        formId="category"
      />
      <CategoryTable />
</>
    </div>
  );
}
