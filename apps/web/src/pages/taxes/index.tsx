import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import {
  useLocalization,
} from "../../features/localization/hooks/use-localization";

export default function
TaxesPage() {

  const {
    translations,
  } = useLocalization();

  return (
    <DashboardLayout>

      <h1>
        {translations.taxes}
      </h1>

      <p>
        {
          translations
            .taxFoundation
        }
      </p>

    </DashboardLayout>
  );
}
