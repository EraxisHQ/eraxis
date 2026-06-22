import type { ManagedLocation } from "../types/managed-location";

const locations: ManagedLocation[] = [
  {
    id: "1",
    tenantId: "1",
    brandId: "brand-001",
    code: "LKO",
    name: "Lucknow Shop",
    address: "Lucknow",
    phone: "9999999999",
    email: "lucknow@eraxis.com",
    manager: "Manager 1",
    active: true,
  },
  {
    id: "2",
    tenantId: "1",
    brandId: "brand-002",
    code: "DEL",
    name: "Delhi Shop",
    address: "Delhi",
    phone: "8888888888",
    email: "delhi@eraxis.com",
    manager: "Manager 2",
    active: true,
  },
];

export function getLocations() {
  return locations;
}

export function createLocation(location: ManagedLocation) {
  locations.push(location);
}

export function updateLocation(updatedLocation: ManagedLocation) {
  const index = locations.findIndex(
    (location) => location.id === updatedLocation.id,
  );

  if (index >= 0) {
    locations[index] = updatedLocation;
  }
}

export function deleteLocation(locationId: string) {
  const index = locations.findIndex((location) => location.id === locationId);

  if (index >= 0) {
    locations.splice(index, 1);
  }
}
