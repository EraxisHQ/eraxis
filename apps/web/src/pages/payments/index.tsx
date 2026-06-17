import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import {
  useLocalization,
} from "../../features/localization/hooks/use-localization";

export default function
PaymentsPage() {

  const {
    translations,
  } = useLocalization();

  return (
    <DashboardLayout>

      <h1>
        {translations.payments}
      </h1>

      <p>
        {
          translations
            .paymentFoundation
        }
      </p>

    </DashboardLayout>
  );
}
