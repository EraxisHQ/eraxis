// import {
//   useContext,
// } from "react";

// import {
//   HealthContext,
// } from "../context/health-context";

// export function useHealth() {

//   return useContext(
//     HealthContext
//   );
// }

import {
  healthService,
} from "../services/health-service";

export function useHealth() {

  return healthService;
}