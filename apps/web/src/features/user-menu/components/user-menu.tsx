// import {
//   Link,
// } from "react-router-dom";

// import {
//   useUserMenu,
// } from "../hooks/use-user-menu";

// import "./user-menu.css";

// export default function UserMenu() {

//   const items =
//     useUserMenu();

//   return (
//     <div className="user-menu">

//       {items.map(
//         (item) => (
//           <Link
//             key={item.id}
//             to={item.route}
//           >
//             {item.label}
//           </Link>
//         )
//       )}

//     </div>
//   );
// }

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  useUserMenu,
} from "../hooks/use-user-menu";

import {
  authService,
} from "../../auth";

import "./user-menu.css";

export default function UserMenu() {

  const items =
    useUserMenu();

  const navigate =
    useNavigate();

  async function handleLogout() {

    await authService.signOut();

    navigate("/");
  }

  return (
    <div className="user-menu">

      {items.map(
        (item) => {

          if (
            item.id === "logout"
          ) {
            return (
              <button
                key={item.id}
                onClick={
                  handleLogout
                }
              >
                {item.label}
              </button>
            );
          }

          return (
            <Link
              key={item.id}
              to={item.route}
            >
              {item.label}
            </Link>
          );
        }
      )}

    </div>
  );
}