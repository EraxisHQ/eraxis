import { customerService } from "../../customer/services/customer-service";

import type { CustomerReport } from "../types/customer-report";

export async function getCustomerReport(): Promise<CustomerReport> {
  const customers = await customerService.findAll();

  return {
    totalCustomers: customers.length,
  };
}
