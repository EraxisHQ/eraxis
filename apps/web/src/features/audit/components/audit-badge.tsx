// import "./audit-badge.css";

// import {
//   useAudit,
// } from "../hooks/use-audit";

// export default function AuditBadge() {

//   const logs =
//     useAudit();

//   return (
//     <button
//       className="audit-badge"
//     >
//       📋 {logs.length}
//     </button>
//   );
// }

import "./audit-badge.css";

import {
  useAudit,
} from "../hooks/use-audit";

export default function AuditBadge() {

  const audit =
    useAudit();

  const count =
    audit.getLogCount();

  return (
    <button
      className="audit-badge"
    >
      📋 {count}
    </button>
  );
}