import { COMMERCE_MANIFEST } from "./manifest";
import { COMMERCE_REGISTRY } from "./registry/commerce-registry";

export const commercePlugin = {
  manifest: COMMERCE_MANIFEST,
  modules: COMMERCE_REGISTRY,
};
