import {
  useActivities,
} from "../hooks/use-activities";

export default function ActivityFeed() {

  const activities =
    useActivities();

  return (
    <div>

      {activities.map(
        (activity) => (
          <div
            key={activity.id}
          >

            <strong>
              {activity.message}
            </strong>

            <div>
              {activity.timestamp}
            </div>

          </div>
        )
      )}

    </div>
  );
}
