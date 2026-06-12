import {
  useRoles,
} from "../hooks/use-roles";

export default function RoleTable() {

  const roles =
    useRoles();

  return (
    <div>

      <h2>
        Roles
      </h2>

      {roles.map(
        (role) => (
          <div
            key={role.id}
          >

            <strong>
              {role.name}
            </strong>

            {" - "}

            {role.description}

          </div>
        )
      )}

    </div>
  );
}
