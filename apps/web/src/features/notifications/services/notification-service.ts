import {
  notificationRegistry,
} from "./notification-registry";

export class NotificationService {

  getNotifications() {

    return notificationRegistry
      .getAll();
  }

  getUnreadCount() {

    return notificationRegistry
      .getAll()
      .filter(
        (item) =>
          !item.read
      )
      .length;
  }
}

export const
  notificationService =
    new NotificationService();
