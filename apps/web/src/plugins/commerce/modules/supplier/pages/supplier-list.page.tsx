import { FormPage } from "../../../../../features/form-runtime/components/form-page";

import SupplierTable from "../components/supplier-table";

export function SupplierListPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Supplier Management
      </h1>
<>
      <FormPage formId="supplier" />
        <SupplierTable />
        </>
    </div>
  );
}
