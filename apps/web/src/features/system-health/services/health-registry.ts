import type {
  HealthCheck,
} from "../types/health-check";

class HealthRegistry {

  private items:
    HealthCheck[] = [];

  register(
    item: HealthCheck
  ) {
    this.items.push(
      item
    );
  }

  getAll() {
    return this.items;
  }
}

export const
  healthRegistry =
    new HealthRegistry();
