import { MetadataRoute } from "next";
import { loadProducts } from "@/utils/products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://urlazeytinciftligi.com.tr";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await loadProducts();

  const productUrls = products.map((product) => ({
    url: `${siteUrl}/store/${product.fields.Slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteUrl}/store`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...productUrls,
  ];
}

