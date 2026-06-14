import type {
  MediaItem,
} from "../types/media-item";

class MediaRegistry {

  private items:
    MediaItem[] = [];

  register(
    item: MediaItem
  ) {
    this.items.push(
      item
    );
  }

  getAll() {
    return this.items;
  }
}

export const
  mediaRegistry =
    new MediaRegistry();
