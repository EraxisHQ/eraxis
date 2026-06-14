import {
  useStorage,
} from "../hooks/use-storage";

export default function StorageFileList() {

  // const files =
  //   useStorage();
  const storage =
  useStorage();

const files =
  storage.getFiles();

  return (
    <div>

      <h2>
        Files
      </h2>

      {files.length === 0 && (
        <p>
          No files available.
        </p>
      )}

      {files.map(
        (file) => (
          <div
            key={file.id}
          >
            {file.name}
          </div>
        )
      )}

    </div>
  );
}
