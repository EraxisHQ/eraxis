// import "./notification-badge.css";

// import {
//   useNotifications,
// } from "../hooks/use-notifications";

// export default function NotificationBadge() {

//   const notifications =
//     useNotifications();

//   const unreadCount =
//     notifications.filter(
//       (notification) =>
//         !notification.read
//     ).length;

//   return (
//     <button
//       className="notification-badge"
//     >
//       🔔 {unreadCount}
//     </button>
//   );
// }

import "./notification-badge.css";

import {
  useNotifications,
} from "../hooks/use-notifications";

export default function NotificationBadge() {

  const notifications =
    useNotifications();

  const unreadCount =
    notifications
      .getUnreadCount();

  return (
    <button
      className="notification-badge"
    >
      🔔 {unreadCount}
    </button>
  );
}