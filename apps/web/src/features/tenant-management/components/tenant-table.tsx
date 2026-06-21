import { useState } from "react";
import { useManagedTenants } from "../hooks/use-managed-tenants";

export default function TenantTable() {
  const tenants = useManagedTenants();
  const [showForm, setShowForm] = useState(false);
  const [tenantName, setTenantName] = useState("");
  const [tenantCode, setTenantCode] = useState("");
  const [active, setActive] = useState(true);
  const [localTenants, setLocalTenants] = useState(tenants);
  const [editingId, setEditingId] = useState<string | null>(null);

  return (
    <div>
      <h2>Tenants</h2>
      <div>Total Tenants: {localTenants.length}</div>
      <button onClick={() => setShowForm(!showForm)}>Create Tenant</button>

      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {localTenants.map((tenant) => (
            <tr key={tenant.id}>
              <td>{tenant.code}</td>

              <td>{tenant.name}</td>

              <td>{tenant.active ? "Active" : "Inactive"}</td>

              <td>
                <button
                  onClick={() => {
                    setEditingId(tenant.id);
                    setTenantName(tenant.name);
                    setTenantCode(tenant.code);
                    setActive(tenant.active);
                    setShowForm(true);
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    setLocalTenants(
                      localTenants.filter((t) => t.id !== tenant.id),
                    )
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div>
          <h3>New Tenant</h3>

          {/* <input placeholder="Tenant Name" /> */}
          <input
            value={tenantName}
            onChange={(e) => setTenantName(e.target.value)}
            placeholder="Tenant Name"
          />

          <input
            value={tenantCode}
            onChange={(e) => setTenantCode(e.target.value)}
            placeholder="Tenant Code"
          />

          <br />

          <select
            value={String(active)}
            onChange={(e) => setActive(e.target.value === "true")}
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>

          <br />

          <select>
            <option value="true">Active</option>

            <option value="false">Inactive</option>
          </select>

          <br />

          <button
            onClick={() => {
              const newTenant = {
                id: crypto.randomUUID(),
                code: tenantCode,
                name: tenantName,
                active,
              };

              if (editingId) {
                setLocalTenants(
                  localTenants.map((t) =>
                    t.id === editingId
                      ? {
                          ...t,
                          name: tenantName,
                          code: tenantCode,
                          active,
                        }
                      : t,
                  ),
                );

                setEditingId(null);
              } else {
                setLocalTenants([...localTenants, newTenant]);
              }

              setTenantName("");
              setTenantCode("");
              setActive(true);
              setShowForm(false);
            }}
          >
            Save Tenant
          </button>
        </div>
      )}
    </div>
  );
}
