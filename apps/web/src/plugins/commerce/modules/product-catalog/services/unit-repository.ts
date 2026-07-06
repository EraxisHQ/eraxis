import { BaseRepository } from "../../../../../features/persistence/repositories/base-repository";
import type { Unit } from "../types/unit";

export class UnitRepository extends BaseRepository<Unit> {
  constructor() {
    super("units");
  }
}