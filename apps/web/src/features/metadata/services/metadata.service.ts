import { METADATA_REGISTRY } from "../registry/metadata-registry";

export const metadataService = {
  getAll() {
    return METADATA_REGISTRY;
  },

  getById(id: string) {
    return METADATA_REGISTRY.find((entity) => entity.id === id);
  },
};
