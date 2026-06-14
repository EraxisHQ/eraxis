import {
  healthRegistry,
} from "./health-registry";

export class HealthService {

  getChecks() {

    return healthRegistry
      .getAll();
  }

  getHealthyCount() {

    return healthRegistry
      .getAll()
      .filter(
        (item) =>
          item.status ===
          "healthy"
      )
      .length;
  }
}

export const
  healthService =
    new HealthService();
