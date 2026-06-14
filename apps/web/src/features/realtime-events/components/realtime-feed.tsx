// import {
//   useRealtime,
// } from "../hooks/use-realtime";

// export default function RealtimeFeed() {

//   const events =
//     useRealtime();

//   return (
//     <div>

//       <h2>
//         Realtime Events
//       </h2>

//       {events.map(
//         (event) => (
//           <div
//             key={event.id}
//           >

//             <strong>
//               {event.event}
//             </strong>

//             <div>
//               {event.timestamp}
//             </div>

//           </div>
//         )
//       )}

//     </div>
//   );
// }


import {
  useRealtime,
} from "../hooks/use-realtime";

export default function RealtimeFeed() {

  const realtime =
    useRealtime();

  const events =
    realtime.getEvents();

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