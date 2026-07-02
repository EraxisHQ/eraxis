import { FormPage } from "../../../../../features/form-runtime/components/form-page";

export function UnitListPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Unit Management
      </h1>

      <FormPage formId="unit" />
    </div>
  );
}
