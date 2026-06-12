import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import MediaGallery
  from "../../features/media-library/components/media-gallery";

export default function MediaPage() {

  return (
    <DashboardLayout>

      <h1>
        Media Library
      </h1>

      <MediaGallery />

    </DashboardLayout>
  );
}
