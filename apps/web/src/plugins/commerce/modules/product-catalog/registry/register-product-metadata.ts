import {
  METADATA_REGISTRY,
} from "../../../../../features/metadata/registry/metadata-registry";

import {
  PRODUCT_ENTITY,
} from "../metadata/product.entity";

export function
registerProductMetadata() {
  METADATA_REGISTRY.push(
    PRODUCT_ENTITY,
  );
}
