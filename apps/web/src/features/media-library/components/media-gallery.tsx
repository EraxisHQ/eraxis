import {
  useMedia,
} from "../hooks/use-media";

export default function MediaGallery() {

  const media =
    useMedia();

  return (
    <div>

      <h2>
        Media Gallery
      </h2>

      {media.length === 0 && (
        <p>
          No media available.
        </p>
      )}

      {media.map(
        (item) => (
          <div
            key={item.id}
          >
            {item.name}
          </div>
        )
      )}

    </div>
  );
}
