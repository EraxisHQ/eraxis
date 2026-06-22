import DashboardLayout from "../../shell/dashboard-layout/dashboard-layout";

import { useLocalization } from "../../features/localization/hooks/use-localization";

import BrandTable from "../../features/brands/components/brand-table";

export default function BrandsPage() {
  const { translations } = useLocalization();

  return (
    <DashboardLayout>
      <h1>{translations.brands}</h1>
      <BrandTable />
      <p>{translations.brandFoundation}</p>
    </DashboardLayout>
  );
}
