import DashboardLayout
from "../../shell/dashboard-layout/dashboard-layout";

import {
  FormRenderer,
} from "../../features/form-runtime/components/form-renderer";

import {
  PRODUCT_FORM,
} from "../../features/form-runtime/registry/product-form";

export default function
FormTestPage() {

  return (

    <DashboardLayout>

      <FormRenderer
        schema={
          PRODUCT_FORM
        }
      />

    </DashboardLayout>
  );
}
