import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import {
  useLocalization,
} from "../../features/localization/hooks/use-localization";

export default function
CustomerAddressesPage() {

  const {
    translations,
  } = useLocalization();

  return (
    <DashboardLayout>

      <h1>
        {
          translations
            .customerAddresses
        }
      </h1>

      <p>
        {
          translations
            .customerAddressFoundation
        }
      </p>

    </DashboardLayout>
  );
}
