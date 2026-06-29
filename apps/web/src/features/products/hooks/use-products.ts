	import {
  loadProducts,
} from "../services/product-loader-service";

export function
useProducts() {
  return loadProducts();
}
