import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import UploadPanel
  from "../../features/file-storage/components/upload-panel";

import StorageFileList
  from "../../features/file-storage/components/storage-file-list";

export default function StoragePage() {

  return (
    <DashboardLayout>

      <h1>
        File Storage
      </h1>

      <UploadPanel />

      <StorageFileList />

    </DashboardLayout>
  );
}
