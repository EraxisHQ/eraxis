// import {
//   useHealth,
// } from "../hooks/use-health";

// export default function HealthDashboard() {

//   const checks =
//     useHealth();

//   return (
//     <div>

//       <h2>
//         System Health
//       </h2>

//       {checks.map(
//         (check) => (
//           <div
//             key={check.id}
//           >
//             {check.service}
//             {" - "}
//             {check.status}
//           </div>
//         )
//       )}

//     </div>
//   );
// }


import {
  useHealth,
} from "../hooks/use-health";

export default function HealthDashboard() {

  const health =
    useHealth();

  const checks =
    health.getChecks();

  return (
    <div>

      <h2>
        System Health
      </h2>

      {checks.map(
        (check) => (
          <div
            key={check.id}
          >
            {check.service}
            {" - "}
            {check.status}
          </div>
        )
      )}

    </div>
  );
}