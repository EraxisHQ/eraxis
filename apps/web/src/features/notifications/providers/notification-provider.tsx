import {
  NotificationContext,
} from "../context/notification-context";

import {
  DEFAULT_NOTIFICATIONS,
} from "../constants/default-notifications";

type Props = {
  children: React.ReactNode;
};

export function NotificationProvider({
  children,
}: Props) {
  return (
    <NotificationContext.Provider
      value={DEFAULT_NOTIFICATIONS}
    >
      {children}
    </NotificationContext.Provider>
  );
}