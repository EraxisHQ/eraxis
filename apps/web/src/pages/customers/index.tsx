import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import {
  useLocalization,
} from "../../features/localization/hooks/use-localization";

export default function CustomersPage() {

  const {
    translations,
  } = useLocalization();

  return (
    <DashboardLayout>

      <h1>
        {translations.customers}
      </h1>

      <p>
        {
          translations
            .customerFoundation
        }
      </p>

    </DashboardLayout>
  );
}