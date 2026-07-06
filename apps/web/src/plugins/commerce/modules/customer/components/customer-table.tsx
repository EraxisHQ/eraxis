import { loadForm } from "../../../../../features/form-runtime/services/form-session-service";

import { useCustomers } from "../hooks/use-customers";
import { deleteCustomer } from "../services/customer-catalog-service";
import { mapCustomerToForm } from "../utils/customer-mapper";

export default function CustomerTable() {
  const customers = useCustomers();

  function handleEdit(
    customer: (typeof customers)[number],
  ) {
    loadForm(
      customer.id,
      mapCustomerToForm(customer),
    );
  }

  async function handleDelete(
    id: string,
  ) {
    const confirmed = window.confirm(
      "Delete this customer?",
    );

    if (!confirmed) {
      return;
    }

    await deleteCustomer(id);
  }

  return (
    <table className="min-w-full border-collapse">
      <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Mobile</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {customers.map(customer => (
          <tr key={customer.id}>
            <td>{customer.code}</td>
            <td>{customer.name}</td>
            <td>{customer.mobile}</td>
            <td>
              {customer.active
                ? "Active"
                : "Inactive"}
            </td>

            <td className="space-x-2">
              <button
                type="button"
                onClick={() =>
                  handleEdit(customer)
                }
              >
                Edit
              </button>

              <button
                type="button"
                onClick={() =>
                  handleDelete(customer.id)
                }
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
