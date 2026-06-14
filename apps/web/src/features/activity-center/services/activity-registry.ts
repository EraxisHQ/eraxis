import type {
  Activity,
} from "../types/activity";

class ActivityRegistry {

  private items:
    Activity[] = [];

  register(
    item: Activity
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
  activityRegistry =
    new ActivityRegistry();
