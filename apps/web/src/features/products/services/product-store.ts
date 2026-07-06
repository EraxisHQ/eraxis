import type { Product } from "../types/product";
import { productService } from "./product-service";

type Listener = () => void;

let products: Product[] = [];
let loaded = false;

const listeners = new Set<Listener>();

function notify() {
  listeners.forEach((listener) => listener());
}

export function getProducts() {
  return products;
}

export async function refreshProducts() {
  products = await productService.findAll();
  loaded = true;
  notify();
}

export function isProductsLoaded() {
  return loaded;
}

export function subscribeProducts(listener: Listener) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
};
}

/*
|--------------------------------------------------------------------------
| CRUD wrappers
|--------------------------------------------------------------------------
*/

export async function createProduct(product: Product) {
  await productService.create(product);
  await refreshProducts();
}

export async function updateProduct(
  id: string,
  product: Product,
) {
  await productService.update(id, product);
  await refreshProducts();
}

export async function deleteProduct(
  id: string,
) {
  await productService.delete(id);
  await refreshProducts();
}