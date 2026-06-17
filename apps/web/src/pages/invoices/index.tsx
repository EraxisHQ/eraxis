import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import {
  useLocalization,
} from "../../features/localization/hooks/use-localization";

export default function
InvoicesPage() {

  const {
    translations,
  } = useLocalization();

  return (
    <DashboardLayout>

      <h1>
        {translations.invoices}
      </h1>

      <p>
        {
          translations
            .invoiceFoundation
        }
      </p>

    </DashboardLayout>
  );
}
