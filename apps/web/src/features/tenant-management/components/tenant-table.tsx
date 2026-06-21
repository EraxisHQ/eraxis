import { useManagedTenants } from "../hooks/use-managed-tenants";

export default function TenantTable() {
  const tenants = useManagedTenants();

  //   return (
  //     <div>

  //       <h2>
  //         Tenants
  //       </h2>

  //       {tenants.map(
  //         (tenant) => (
  //           <div
  //             key={tenant.id}
  //           >

  //             <strong>
  //               {tenant.code}
  //             </strong>

  //             {" - "}

  //             {tenant.name}

  //           </div>
  //         )
  //       )}

  //     </div>
  //   );
  // }

  return (
    <div>
      <h2>Tenants</h2>

      <button>Create Tenant</button>

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
          {tenants.map((tenant) => (
            <tr key={tenant.id}>
              <td>{tenant.code}</td>

              <td>{tenant.name}</td>

              <td>{tenant.active ? "Active" : "Inactive"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
