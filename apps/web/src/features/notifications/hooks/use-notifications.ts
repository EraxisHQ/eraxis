import {
  useContext,
} from "react";

import {
  NotificationContext,
} from "../context/notification-context";

export function useNotifications() {
  return useContext(
    NotificationContext
  );
}