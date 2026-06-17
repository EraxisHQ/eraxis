import {
  createProductRepository,
} from "./repository-factory";

export async function
testProductPersistence() {

  const repository =
    createProductRepository();

  await repository.create({

    id:
      crypto.randomUUID(),

    sku:
      "SKU-001",

    name:
      "Test Product",

    active:
      true,

    description:
      "Persistence Test",
  });

  const products =
    await repository.findAll();

  console.log(
    "Products:",
    products,
  );

  return products;
}