import {
  useManagedTenants,
} from "../hooks/use-managed-tenants";

export default function TenantTable() {

  const tenants =
    useManagedTenants();

  return (
    <div>

      <h2>
        Tenants
      </h2>

      {tenants.map(
        (tenant) => (
          <div
            key={tenant.id}
          >

            <strong>
              {tenant.code}
            </strong>

            {" - "}

            {tenant.name}

          </div>
        )
      )}

    </div>
  );
}
