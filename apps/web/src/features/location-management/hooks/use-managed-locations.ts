import { getLocations } from "../services/location.service";

export function useManagedLocations() {
  return getLocations();
}
