import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import {
  useLocalization,
} from "../../features/localization/hooks/use-localization";

export default function PricingPage() {

  const {
    translations,
  } = useLocalization();

  return (
    <DashboardLayout>

      <h1>
        {translations.pricing}
      </h1>

      <p>
        {
          translations
            .pricingFoundation
        }
      </p>

    </DashboardLayout>
  );
}