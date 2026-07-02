import { FormPage } from "../../../../../features/form-runtime/components/form-page";

import InventoryTable from "../components/inventory-table";

export function InventoryListPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Inventory Management
      </h1>
<>
      <FormPage formId="inventory" />
<InventoryTable/>
      </>
    </div>
  );
}
