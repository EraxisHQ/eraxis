import type { RuntimeRoute } from "../types/runtime-route";

const ROUTES: RuntimeRoute[] = [];

export function registerRoute(route: RuntimeRoute) {
  ROUTES.push(route);
}

export function getRoutes() {
  return ROUTES;
}
