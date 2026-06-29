import type {
  Plugin,
} from "../../features/plugin-registry/types/plugin";

import {
  COMMERCE_MANIFEST,
} from "./manifest";

import {
  COMMERCE_REGISTRY,
} from "./registry/commerce-registry";

export const commercePlugin: Plugin = {
  id: COMMERCE_MANIFEST.id,
  applicationCode: "commerce",
  code: COMMERCE_MANIFEST.id,
  name: COMMERCE_MANIFEST.name,
  route: "/commerce",
  enabled: true,

  manifest: COMMERCE_MANIFEST,
  modules: COMMERCE_REGISTRY,
};
