import { ProductRepository } from "../../persistence/repositories/product-repository";
import type { Product } from "../types/product";

const repository = new ProductRepository();

export class ProductService {
  async findAll(): Promise<Product[]> {
    return repository.findAll();
  }

  async findById(id: string) {
    return repository.findById(id);
  }

  async create(product: Product) {
    return repository.create(product);
  }

  async update(
    id: string,
    product: Product,
  ) {
    return repository.update(id, product);
  }

  async delete(id: string) {
    return repository.delete(id);
  }
}

export const productService =
  new ProductService();
