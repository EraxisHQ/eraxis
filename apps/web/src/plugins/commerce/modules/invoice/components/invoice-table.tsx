import { loadForm } from "../../../../../features/form-runtime/services/form-session-service";

import { useInvoices } from "../hooks/use-invoices";
import { deleteInvoice } from "../services/invoice-catalog-service";
import { mapInvoiceToForm } from "../utils/invoice-mapper";

export default function InvoiceTable() {
  const invoices = useInvoices();

  function handleEdit(
    invoice: (typeof invoices)[number],
  ) {
    loadForm(
      invoice.id,
      mapInvoiceToForm(invoice),
    );
  }

  async function handleDelete(id: string) {
    if (!window.confirm("Delete invoice?")) {
      return;
    }

    await deleteInvoice(id);
  }

  return (
    <table className="min-w-full border-collapse">
      <thead>
        <tr>
          <th>Invoice No</th>
          <th>Customer</th>
          <th>Date</th>
          <th>Net Amount</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {invoices.map((invoice) => (
          <tr key={invoice.id}>
            <td>{invoice.invoiceNo}</td>
            <td>{invoice.customerId}</td>
            <td>{invoice.invoiceDate}</td>
            <td>{invoice.netAmount}</td>
            <td>{invoice.status}</td>

            <td className="space-x-2">
              <button
                type="button"
                onClick={() => handleEdit(invoice)}
              >
                Edit
              </button>

              <button
                type="button"
                onClick={() => handleDelete(invoice.id)}
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
