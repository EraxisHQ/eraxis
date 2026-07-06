import { productService } from "../../../../../features/products/services/product-service";

export async function deleteProduct(
  id: string,
) {
  return productService.delete(id);
}

export async function getProducts() {
  return productService.findAll();
}