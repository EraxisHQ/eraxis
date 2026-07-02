import { FormPage } from "../../../../../features/form-runtime/components/form-page";

import SalesTable from "../components/sales-table";

export function SalesListPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Sales Management
      </h1>
       <>
      <FormPage formId="sales" />
      <SalesTable />
      </>
    </div>
  );
}
