import {
  activityService,
} from "../services/activity-service";

export function useActivities() {

  return activityService;
}