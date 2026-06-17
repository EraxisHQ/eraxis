import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import {
  useLocalization,
} from "../../features/localization/hooks/use-localization";

export default function CategoriesPage() {

  const {
    translations,
  } = useLocalization();

  return (
    <DashboardLayout>

      <h1>
        {translations.categories}
      </h1>

      <p>
        {
          translations
            .categoryFoundation
        }
      </p>

    </DashboardLayout>
  );
}