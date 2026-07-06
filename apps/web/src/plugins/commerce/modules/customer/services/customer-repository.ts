import { BaseRepository } from "../../../../../features/persistence/repositories/base-repository";
import type { Customer } from "../types/customer";

export class CustomerRepository extends BaseRepository<Customer> {
  constructor() {
    super("customers");
  }
}

export const customerRepository = new CustomerRepository();
