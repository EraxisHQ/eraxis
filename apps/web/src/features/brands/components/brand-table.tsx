import { useBrands } from "../hooks/use-brands";

export default function BrandTable() {
  const brands = useBrands();

  return (
    <table>
      <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Company</th>
          <th>Website</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {brands.map((brand) => (
          <tr key={brand.id}>
            <td>{brand.code}</td>
            <td>{brand.name}</td>
            <td>{brand.companyName}</td>
            <td>{brand.website}</td>
            <td>{brand.active ? "Active" : "Inactive"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
