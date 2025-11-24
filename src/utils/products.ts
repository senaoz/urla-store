import { ProductInterface } from "@/interfaces";
import productsData from "@/data/products.json";

async function loadProducts(): Promise<ProductInterface[]> {
  // Return products as ProductInterface array
  return productsData as ProductInterface[];
}

export { loadProducts };

