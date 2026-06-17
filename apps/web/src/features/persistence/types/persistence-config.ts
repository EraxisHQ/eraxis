import type {
  ProviderType,
} from "./provider-type";

import type {
  ProviderMode,
} from "./provider-mode";

export type PersistenceConfig = {

  provider:
    ProviderType;

  mode:
    ProviderMode;
};