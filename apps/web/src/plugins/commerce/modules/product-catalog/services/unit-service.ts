import type { Unit } from "../types/unit";
import { UnitRepository } from "./unit-repository";

const repository = new UnitRepository();

export const unitService = {
  findAll: () => repository.findAll(),

  findById: (id: string) =>
    repository.findById(id),

  create: (unit: Unit) =>
    repository.create(unit),

  update: (
    id: string,
    unit: Unit,
  ) =>
    repository.update(id, unit),

  delete: (id: string) =>
    repository.delete(id),
};