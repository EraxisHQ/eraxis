import type {
  Notification,
} from "../types/notification";

class NotificationRegistry {

  private items:
    Notification[] = [];

  register(
    item: Notification
  ) {
    this.items.push(
      item
    );
  }

  getAll() {
    return this.items;
  }
}

export const
  notificationRegistry =
    new NotificationRegistry();

