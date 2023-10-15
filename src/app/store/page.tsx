import { ProductCard } from "@/app/components/productCard";
import { loadProducts } from "@/utils/airtable";
import { ProductInterface } from "@/interfaces";

export default async function Products() {
  const data = await loadProducts();

  return (
    <main className="min-h-screen w-full">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {data.map((product: ProductInterface) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </main>
  );
}
