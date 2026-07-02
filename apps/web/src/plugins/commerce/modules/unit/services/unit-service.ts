import { unitRepository } from "./unit-repository";
import type { Unit } from "../types/unit";

export const unitService = {
  findAll() {
    return unitRepository.findAll();
  },

  findById(id: string) {
    return unitRepository.findById(id);
  },

  create(unit: Unit) {
    return unitRepository.create(unit);
  },

  update(id: string, unit: Unit) {
    return unitRepository.update(id, unit);
  },

  delete(id: string) {
    return unitRepository.delete(id);
  },
};
