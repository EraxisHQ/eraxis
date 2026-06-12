export type HealthCheck = {
  id: string;

  service: string;

  status: "healthy" | "warning" | "error";
};
