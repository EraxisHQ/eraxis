import {
  useRealtime,
} from "../hooks/use-realtime";

export default function RealtimeFeed() {

  const events =
    useRealtime();

  return (
    <div>

      <h2>
        Realtime Events
      </h2>

      {events.map(
        (event) => (
          <div
            key={event.id}
          >

            <strong>
              {event.event}
            </strong>

            <div>
              {event.timestamp}
            </div>

          </div>
        )
      )}

    </div>
  );
}
