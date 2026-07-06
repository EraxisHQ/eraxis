import { FormPage } from "../../../../../features/form-runtime/components/form-page";
import BrandTable from "../components/brand-table";
export function BrandListPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Brand Management
      </h1>
    <>
      <FormPage formId="brand" />
        <BrandTable />
        </>
    </div>
  );
}
