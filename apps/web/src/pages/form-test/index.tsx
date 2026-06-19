import "../../features/form-runtime/registry/register-forms";

import DashboardLayout from "../../shell/dashboard-layout/dashboard-layout";

import { FormRenderer } from "../../features/form-runtime/components/form-renderer";

import { getForm } from "../../features/form-runtime/registry/form-registry";

export default function FormTestPage() {
  const form = getForm("product");

  if (!form) {
    return <div>Form not found</div>;
  }

  return (
    <DashboardLayout>
      <FormRenderer schema={form} />
    </DashboardLayout>
  );
}
