import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import {
  useLocalization,
} from "../../features/localization/hooks/use-localization";

export default function
OrderItemsPage() {

  const {
    translations,
  } = useLocalization();

  return (
    <DashboardLayout>

      <h1>
        {translations.orderItems}
      </h1>

      <p>
        {
          translations
            .orderItemFoundation
        }
      </p>

    </DashboardLayout>
  );
}
