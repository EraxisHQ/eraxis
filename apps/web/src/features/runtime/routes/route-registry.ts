import type {
  RouteObject,
} from "react-router-dom";

const ROUTES:
  RouteObject[] = [];

export function
registerRoute(
  route: RouteObject,
) {
  ROUTES.push(route);
}

export function
getRoutes() {
  return ROUTES;
}
