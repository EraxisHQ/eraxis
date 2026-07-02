import { customerRepository } from "./customer-repository";
import type { Customer } from "../types/customer";

export const customerService = {
  findAll() {
    return customerRepository.findAll();
  },

  findById(id: string) {
    return customerRepository.findById(id);
  },

  create(customer: Customer) {
    return customerRepository.create(customer);
  },

  update(id: string, customer: Customer) {
    return customerRepository.update(id, customer);
  },

  delete(id: string) {
    return customerRepository.delete(id);
  },
};
