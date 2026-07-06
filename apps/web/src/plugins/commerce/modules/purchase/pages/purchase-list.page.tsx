import { FormPage } from "../../../../../features/form-runtime/components/form-page";

import PurchaseTable from "../components/purchase-table";

export function PurchaseListPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Purchase Management
      </h1>
<>
      <FormPage formId="purchase" />
      <PurchaseTable />
</>   
    </div>
  );
}
