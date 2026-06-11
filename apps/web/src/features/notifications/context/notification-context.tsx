import {
  createContext,
} from "react";

import type {
  Notification,
} from "../types/notification";

export const NotificationContext =
  createContext<Notification[]>([]);