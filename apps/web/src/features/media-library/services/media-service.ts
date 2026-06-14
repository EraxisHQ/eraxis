import {
  mediaRegistry,
} from "./media-registry";

export class MediaService {

  getItems() {

    return mediaRegistry
      .getAll();
  }

  getItemCount() {

    return mediaRegistry
      .getAll()
      .length;
  }
}

export const
  mediaService =
    new MediaService();
