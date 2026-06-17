import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import {
  useLocalization,
} from "../../features/localization/hooks/use-localization";

export default function
ShippingPage() {

  const {
    translations,
  } = useLocalization();

  return (
    <DashboardLayout>

      <h1>
        {translations.shipping}
      </h1>

      <p>
        {
          translations
            .shippingFoundation
        }
      </p>

    </DashboardLayout>
  );
}
