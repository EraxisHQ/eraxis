import {
  usePermissions,
} from "../hooks/use-permissions";

export default function PermissionTable() {

  const permissions =
    usePermissions();

  return (
    <div>

      <h2>
        Permissions
      </h2>

      {permissions.map(
        (permission) => (
          <div
            key={permission.id}
          >

            <strong>
              {permission.key}
            </strong>

            {" - "}

            {permission.description}

          </div>
        )
      )}

    </div>
  );
}
