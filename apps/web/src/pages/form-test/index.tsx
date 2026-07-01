import "../../features/form-runtime/registry/register-submit-handlers";

import "../../plugins/commerce/modules/product-catalog";

import DashboardLayout from "../../shell/dashboard-layout/dashboard-layout";

import { FormRenderer } from "../../features/form-runtime/components/form-renderer";

// import { getForm } from "../../features/form-runtime/registry/form-registry";

import { loadForm } from "../../features/form-runtime/services/form-service";

export default function FormTestPage() {
  const form = loadForm("product");

  if (!form) {
    return <div>Form not found</div>;
  }

  return (
    <DashboardLayout>
      <FormRenderer schema={form} />
    </DashboardLayout>
  );
}
