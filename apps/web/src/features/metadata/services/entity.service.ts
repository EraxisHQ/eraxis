import { ENTITY_REGISTRY }
from "../registry/entity-registry";

export const entityService = {
  getAll() {
    return ENTITY_REGISTRY;
  },

  getById(id: string) {
    return ENTITY_REGISTRY.find(
      entity => entity.id === id,
    );
  },
};
