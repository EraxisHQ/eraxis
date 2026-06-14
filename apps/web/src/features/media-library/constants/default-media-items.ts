import type {
  MediaItem,
} from "../types/media-item";

import {
  mediaRegistry,
} from "../services/media-registry";


export const DEFAULT_MEDIA_ITEMS:
  MediaItem[] = [];

DEFAULT_MEDIA_ITEMS.forEach(
  (item) => {
    mediaRegistry
      .register(item);
  }
);
