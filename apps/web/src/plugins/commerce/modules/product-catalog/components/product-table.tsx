import { useState } from "react";

import { useProducts } from "../../../../../features/products/hooks/use-products";

import { deleteProduct } from "../services/product-catalog-service";

import { loadForm } from "../../../../../features/form-runtime/services/form-session-service";

import {
  mapProductToForm,
} from "../utils/product-mapper";

import {
  PRODUCT_PAGE_SIZE,
} from "../constants/product.constants";

export default function ProductTable() {
  const products = useProducts();

  const [search, setSearch] = useState("");

  const [sortBy, setSortBy] = useState<"sku" | "name">("name");

  const [statusFilter, setStatusFilter] = useState<
    "all" | "active" | "inactive"
  >("all");

  const [page, setPage] = useState(1);

  const pageSize = PRODUCT_PAGE_SIZE; 

  function handleEdit(product: (typeof products)[number]) {
  // loadForm(product.id, {
  //   sku: product.sku,
  //   name: product.name,
  //   description: product.description,
  //   price: product.price,
  //   category: product.categoryId,
  //   active: product.active,
  //   isGstRegistered: product.isGstRegistered,
  //   gstNumber: product.gstNumber,
  //   warrantyMonths: product.warrantyMonths,
  // });
  loadForm(
  product.id,
  mapProductToForm(product),
);
}



  async function handleDelete(id: string) {
    const confirmed = window.confirm("Delete this product?");

    if (!confirmed) {
      return;
    }

    await deleteProduct(id);

    window.location.reload();
  }

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.sku.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "all"
          ? true
          : statusFilter === "active"
            ? product.active
            : !product.active;

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortBy === "sku") {
        return a.sku.localeCompare(b.sku);
      }

      return a.name.localeCompare(b.name);
    });

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * pageSize,
    page * pageSize,
  );

  return (
    <div className="overflow-x-auto rounded-lg border">
      <div className="mb-3">
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value as "sku" | "name")}
          className="rounded border px-3 py-2"
        >
          <option value="name">Sort by Name</option>

          <option value="sku">Sort by SKU</option>
        </select>
      </div>

      <div className="mb-3">
        <select
          value={statusFilter}
          onChange={(event) =>
            setStatusFilter(event.target.value as "all" | "active" | "inactive")
          }
          className="rounded border px-3 py-2"
        >
          <option value="all">All Products</option>

          <option value="active">Active</option>

          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className="mb-4 grid grid-cols-4 gap-4">
        <div className="rounded border p-3">
          <div className="text-xs text-gray-500">Total</div>

          <div className="text-2xl font-bold">{products.length}</div>
        </div>

        <div className="rounded border p-3">
          <div className="text-xs text-gray-500">Active</div>

          <div className="text-2xl font-bold">
            {products.filter((p) => p.active).length}
          </div>
        </div>

        <div className="rounded border p-3">
          <div className="text-xs text-gray-500">Inactive</div>

          <div className="text-2xl font-bold">
            {products.filter((p) => !p.active).length}
          </div>
        </div>

        <div className="rounded border p-3">
          <div className="text-xs text-gray-500">Showing</div>

          <div className="text-2xl font-bold">{filteredProducts.length}</div>
        </div>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full rounded border px-3 py-2"
        />
      </div>

      <table className="min-w-full border-collapse">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="px-3 py-2 text-left">SKU</th>

            <th className="px-3 py-2 text-left">Product</th>

            <th className="px-3 py-2 text-left">Status</th>

            <th className="px-3 py-2 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {paginatedProducts.length === 0 && (
            <tr>
              <td colSpan={4} className="px-3 py-8 text-center text-gray-500">
                No products found.
              </td>
            </tr>
          )}

          {paginatedProducts.map((product) => (
            <tr key={product.id} className="border-b hover:bg-gray-50">
              <td className="px-3 py-2">{product.sku}</td>

              <td className="px-3 py-2">
                <div className="font-medium">{product.name}</div>

                <div className="text-xs text-gray-500">{product.id}</div>
              </td>

              <td className="px-3 py-2">
                <span
                  className={
                    product.active
                      ? "rounded bg-green-100 px-2 py-1 text-xs text-green-700"
                      : "rounded bg-red-100 px-2 py-1 text-xs text-red-700"
                  }
                >
                  {product.active ? "Active" : "Inactive"}
                </span>
              </td>

              <td className="px-3 py-2 text-right space-x-2">
                <button
                  type="button"
                  onClick={() => handleEdit(product)}
                  className="rounded border px-3 py-1 text-sm"
                >
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() => handleDelete(product.id)}
                  className="rounded border border-red-500 px-3 py-1 text-sm text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="rounded border px-3 py-1 disabled:opacity-50"
        >
          Previous
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          type="button"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="rounded border px-3 py-1 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
