import type {
  Permission,
} from "../types/permission";

export const DEFAULT_PERMISSIONS:
  Permission[] = [
    {
      id: "1",
      key: "users.read",
      description:
        "View users",
    },

    {
      id: "2",
      key: "users.create",
      description:
        "Create users",
    },
  ];
