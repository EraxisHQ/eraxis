import { FormPage } from "../../../../../features/form-runtime/components/form-page";

import CustomerTable from "../components/customer-table";

export function CustomerListPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Customer Management
      </h1>
<>
      <FormPage formId="customer" />
      <CustomerTable />
      </>
    </div>
  );
}
