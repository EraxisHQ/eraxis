import { useManagedUsers } from "../hooks/use-managed-users";

export default function UserTable() {
  const users = useManagedUsers();
  console.log("USERS", users);
  console.log("COUNT", users.length);
  console.log("USERS", users);

  return (
    <div>
      <h2>Users</h2>

      {users.map((user) => (
        <div key={user.id}>
          {user.firstName} {user.lastName}
          {" - "}
          {user.email}
        </div>
      ))}
    </div>
  );
}
