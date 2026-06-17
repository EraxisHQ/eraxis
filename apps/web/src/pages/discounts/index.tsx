import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import {
  useLocalization,
} from "../../features/localization/hooks/use-localization";

export default function
DiscountsPage() {

  const {
    translations,
  } = useLocalization();

  return (
    <DashboardLayout>

      <h1>
        {translations.discounts}
      </h1>

      <p>
        {
          translations
            .discountFoundation
        }
      </p>

    </DashboardLayout>
  );
}
