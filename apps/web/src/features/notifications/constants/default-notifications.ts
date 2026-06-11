import type {
  Notification,
} from "../types/notification";

export const DEFAULT_NOTIFICATIONS:
  Notification[] = [
    {
      id: "1",
      title: "Welcome to Eraxis",
      read: false,
    },

    {
      id: "2",
      title: "Profile Module Created",
      read: false,
    },
  ];