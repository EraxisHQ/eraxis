import {
  activityRegistry,
} from "./activity-registry";

export class ActivityService {

  getActivities() {

    return activityRegistry
      .getAll();
  }

  getRecentActivities(
    limit = 10
  ) {

    return activityRegistry
      .getAll()
      .slice(
        0,
        limit
      );
  }
}

export const
  activityService =
    new ActivityService();
