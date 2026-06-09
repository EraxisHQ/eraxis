// /**
//  * =====================================
//  * Eraxis
//  * Module: Dashboard
//  *
//  * Purpose:
//  * Main dashboard page.
//  *
//  * Technical Debt:
//  * - TD-006
//  *
//  * =====================================
//  */

// export default function DashboardPage() {
//   return (
//     <div style={{ padding: "24px" }}>
//       <h1>Welcome to Eraxis</h1>

//       <p>Core Platform Ready</p>

//       <p>Current Tenant: Not Assigned</p>
//     </div>
//   );
// }

/**
 * =====================================
 * Eraxis
 * Module: Dashboard
 *
 * Purpose:
 * Main dashboard landing page.
 *
 * Technical Debt:
 * - TD-006
 * =====================================
 */

import DashboardLayout from "../../shell/dashboard-layout/dashboard-layout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <h1>Welcome to Eraxis</h1>

      <p>Core Platform Ready</p>

      <p>Current Tenant: Not Assigned</p>
    </DashboardLayout>
  );
}