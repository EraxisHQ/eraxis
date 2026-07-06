import { useEffect, useState } from "react";

import type { Product } from "../types/product";

import {
  getProducts,
  isProductsLoaded,
  refreshProducts,
  subscribeProducts,
} from "../services/product-store";

export function useProducts() {
  const [products, setProducts] =
    useState<Product[]>(getProducts());

  useEffect(() => {
    if (!isProductsLoaded()) {
      refreshProducts();
    }

    return subscribeProducts(() => {
      setProducts(getProducts());
    });
  }, []);

  return products;
}