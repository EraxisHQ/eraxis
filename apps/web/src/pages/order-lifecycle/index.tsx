import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import {
  useLocalization,
} from "../../features/localization/hooks/use-localization";

export default function
OrderLifecyclePage() {

  const {
    translations,
  } = useLocalization();

  return (
    <DashboardLayout>

      <h1>
        {
          translations
            .orderLifecycle
        }
      </h1>

      <p>
        {
          translations
            .orderLifecycleFoundation
        }
      </p>

    </DashboardLayout>
  );
}
