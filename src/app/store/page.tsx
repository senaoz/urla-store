import { ProductCard } from "@/app/components/productCard";
import { loadProducts } from "@/utils/airtable";
import { ProductInterface } from "@/interfaces";

export default async function Products() {
  const data: ProductInterface[] = await loadProducts();

  return (
    <main className="bg-amber-50 text-primary">
      <div className="custom-container">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {data?.map((product: ProductInterface) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
