import { ProductCard } from "@/app/components/productCard";
import { loadProducts } from "@/utils/products";
import { ProductInterface } from "@/interfaces";
import type { Metadata } from "next";
import { t } from "@/utils/i18n";
import tr from "@/locales/tr.json";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://urlazeytinciftligi.com.tr";

export const metadata: Metadata = {
  title: tr.store.title,
  description: tr.store.metaDescription,
  openGraph: {
    title: tr.store.ogTitle,
    description: tr.store.ogDescription,
    url: `${siteUrl}/store`,
  },
};

export default async function Products() {
  const data: ProductInterface[] = await loadProducts();

  // Breadcrumb structured data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("store.breadcrumb.home"),
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t("store.breadcrumb.products"),
        item: `${siteUrl}/store`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <main className="bg-amber-50 text-primary">
        <div className="custom-container">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {data?.map((product: ProductInterface) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
