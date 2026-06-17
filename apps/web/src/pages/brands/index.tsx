import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import {
  useLocalization,
} from "../../features/localization/hooks/use-localization";

export default function BrandsPage() {

  const {
    translations,
  } = useLocalization();

  return (
    <DashboardLayout>

      <h1>
        {translations.brands}
      </h1>

      <p>
        {
          translations
            .brandFoundation
        }
      </p>

    </DashboardLayout>
  );
}