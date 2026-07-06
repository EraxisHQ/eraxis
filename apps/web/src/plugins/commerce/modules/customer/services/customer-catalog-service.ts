import { customerService } from "./customer-service";
import { refreshCustomers } from "./customer-store";

export async function deleteCustomer(
  id: string,
) {
  await customerService.delete(id);

  await refreshCustomers();
}
