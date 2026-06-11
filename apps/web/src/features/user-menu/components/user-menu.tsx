import {
  Link,
} from "react-router-dom";

import {
  useUserMenu,
} from "../hooks/use-user-menu";

import "./user-menu.css";

export default function UserMenu() {

  const items =
    useUserMenu();

  return (
    <div className="user-menu">

      {items.map(
        (item) => (
          <Link
            key={item.id}
            to={item.route}
          >
            {item.label}
          </Link>
        )
      )}

    </div>
  );
}