import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import {
  useLocalization,
} from "../../features/localization/hooks/use-localization";

export default function ProductsPage() {

  const {
    translations,
  } = useLocalization();

  return (
    <DashboardLayout>

      <h1>
        {translations.products}
      </h1>

      <p>
        {
          translations
            .productFoundation
        }
      </p>

    </DashboardLayout>
  );
}