import {
  useProducts,
} from "../../../../../features/products/hooks/use-products";

export default function ProductTable() {
  const products =
    useProducts();

  return (
    <table>
      <thead>
        <tr>
          <th>SKU</th>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {products.map(
          (product) => (
            <tr key={product.id}>
              <td>{product.sku}</td>
              <td>{product.name}</td>
              <td>
                {product.active
                  ? "Active"
                  : "Inactive"}
              </td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}
