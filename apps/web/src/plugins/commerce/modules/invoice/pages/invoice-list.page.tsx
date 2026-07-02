import { FormPage } from "../../../../../features/form-runtime/components/form-page";

import InvoiceTable from "../components/invoice-table";

export function InvoiceListPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Invoice Management
      </h1>
    <>
      <FormPage formId="invoice" />
        <InvoiceTable />
        </>
    </div>
  );
}
