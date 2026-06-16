import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import {
  useLocalization,
} from "../../features/localization/hooks/use-localization";

export default function ProductVariantsPage() {

  const {
    translations,
  } = useLocalization();

  return (
    <DashboardLayout>

      <h1>
        {translations.productVariants}
      </h1>

      <p>
        {translations.productVariantFoundation}
      </p>

    </DashboardLayout>
  );
}
