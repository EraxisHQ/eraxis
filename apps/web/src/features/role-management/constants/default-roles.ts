import type {
  Role,
} from "../types/role";

export const DEFAULT_ROLES:
  Role[] = [
    {
      id: "1",
      name: "Super Admin",
      description:
        "Full system access",
    },

    {
      id: "2",
      name: "Admin",
      description:
        "Administrative access",
    },
  ];
