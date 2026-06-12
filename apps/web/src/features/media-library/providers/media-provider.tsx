import {
  MediaContext,
} from "../context/media-context";

import {
  DEFAULT_MEDIA_ITEMS,
} from "../constants/default-media-items";

type Props = {
  children: React.ReactNode;
};

export function MediaProvider({
  children,
}: Props) {

  return (
    <MediaContext.Provider
      value={DEFAULT_MEDIA_ITEMS}
    >
      {children}
    </MediaContext.Provider>
  );
}
