import type {
  ManagedUser,
} from "../types/managed-user";

export const DEFAULT_USERS:
  ManagedUser[] = [
    {
      id: "1",
      firstName: "Admin",
      lastName: "User",
      email: "admin@eraxis.local",
      active: true,
    },
  ];
