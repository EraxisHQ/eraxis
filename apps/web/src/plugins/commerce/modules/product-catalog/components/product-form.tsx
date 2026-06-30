import { useState } from "react";

export interface ProductFormData {
  code: string;
  name: string;
  purchasePrice: number;
  sellingPrice: number;
}

interface ProductFormProps {
  onSubmit(data: ProductFormData): void;
}

export function ProductForm({
  onSubmit,
}: ProductFormProps) {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [sellingPrice, setSellingPrice] = useState(0);

  return (
    <div className="rounded-lg border p-4">
      <div>
        <label>Product Code</label>
        <br />
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Product Name</label>
        <br />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Purchase Price</label>
        <br />
        <input
          type="number"
          value={purchasePrice}
          onChange={(e) =>
            setPurchasePrice(Number(e.target.value))
          }
        />
      </div>

      <br />

      <div>
        <label>Selling Price</label>
        <br />
        <input
          type="number"
          value={sellingPrice}
          onChange={(e) =>
            setSellingPrice(Number(e.target.value))
          }
        />
      </div>

      <br />

      <button
        onClick={() =>
          onSubmit({
            code,
            name,
            purchasePrice,
            sellingPrice,
          })
        }
      >
        Save Product
      </button>
    </div>
  );
}
