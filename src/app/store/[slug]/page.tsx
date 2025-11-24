import { loadProducts } from "@/utils/products";
import { productImages, ProductInterface } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { MarkdownContent } from "@/app/components/markdown";
import React from "react";
import type { Metadata } from "next";
import { t } from "@/utils/i18n";
import tr from "@/locales/tr.json";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://urlazeytinciftligi.com.tr";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await loadProducts();
  const product: ProductInterface | undefined = data.find(
    (product: ProductInterface) => product.fields.Slug === params.slug,
  );

  if (!product) {
    return {
      title: tr.product.notFound,
    };
  }

  const productName = `${product.fields.Name}${product.fields.Size !== "Standart" ? ` - ${product.fields.Size}` : ""}`;
  const productDescription =
    product.fields.Description ||
    `Urla Zeytin Çiftliği ${productName} ürünü. Doğal ve organik ürünler.`;
  const productImage =
    productImages[product.fields.Slug] ||
    product.fields.Images[0]?.url ||
    "/logo.svg";
  const productUrl = `${siteUrl}/store/${product.fields.Slug}`;

  // Extract price numbers for structured data
  const priceMatch = String(product.fields.SalePrice).match(/[\d.]+/);
  const price = priceMatch ? parseFloat(priceMatch[0]) : 0;

  return {
    title: productName,
    description: productDescription,
    openGraph: {
      title: productName,
      description: productDescription,
      url: productUrl,
      siteName: t("common.siteName"),
      images: [
        {
          url: productImage,
          width: 1200,
          height: 630,
          alt: productName,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: productName,
      description: productDescription,
      images: [productImage],
    },
    alternates: {
      canonical: productUrl,
    },
  };
}

export default async function Product({
  params,
}: {
  params: { slug: string };
}) {
  const data = await loadProducts();

  const product: ProductInterface | undefined = data.find(
    (product: ProductInterface) => product.fields.Slug === params.slug,
  );

  if (!product) {
    return <div>{t("product.notFoundMessage")}</div>;
  }

  const others = data.filter(
    (other: ProductInterface) =>
      other.fields.Type === product.fields.Type && other.id !== product.id,
  );

  const productName = `${product.fields.Name}${product.fields.Size !== "Standart" ? ` - ${product.fields.Size}` : ""}`;
  const productImage =
    productImages[product.fields.Slug] ||
    product.fields.Images[0]?.url ||
    "/logo.svg";
  const productUrl = `${siteUrl}/store/${product.fields.Slug}`;

  // Extract price numbers for structured data
  const priceMatch = String(product.fields.SalePrice).match(/[\d.]+/);
  const price = priceMatch ? parseFloat(priceMatch[0]) : 0;
  const priceOldMatch = String(product.fields.Price).match(/[\d.]+/);
  const priceOld = priceOldMatch ? parseFloat(priceOldMatch[0]) : price;

  // Structured data for product
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName,
    description: product.fields.Description || "",
    image: productImage,
    brand: {
      "@type": "Brand",
      name: t("common.siteName"),
    },
    offers: {
      "@type": "Offer",
      url: product.fields.Link || productUrl,
      priceCurrency: "TRY",
      price: price,
      availability: product.fields.InStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: t("common.siteName"),
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "50",
    },
  };

  // Organization structured data
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: t("common.siteName"),
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-505-697-45-08",
      contactType: "customer service",
      email: "urlaolivefarms@gmail.com",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Urla",
      addressRegion: "İzmir",
      addressCountry: "TR",
    },
  };

  // Breadcrumb structured data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("product.breadcrumb.home"),
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t("product.breadcrumb.products"),
        item: `${siteUrl}/store`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: productName,
        item: productUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <div className="custom-container bg-primary text-amber-50">
        <div className="block gap-8 md:grid md:grid-cols-2">
          <Image
            className="w-full shadow-xl"
            src={
              productImages[product.fields.Slug] ||
              product?.fields?.Images[0].url
            }
            alt={product?.fields?.Name}
            width={500}
            height={500}
            placeholder={"blur"}
            blurDataURL={
              productImages[product.fields.Slug] ||
              product?.fields?.Images[0].url
            }
            quality={75}
            priority={true}
          />
          <div className="prose-headings:my-2">
            <div className="h-4" />
            <span className="rounded-full bg-secondary px-3 py-1.5 text-lg font-bold text-primary">
              {product.fields.Size}
            </span>
            <h2>{product.fields.Name}</h2>
            <div className="product-card__price">
              <h3 className="product-card__price__old">
                {product.fields.Price}
              </h3>
              <h3 className="product-card__price__sale">
                {product.fields.SalePrice}
              </h3>
            </div>
            <MarkdownContent>{product.fields.Description}</MarkdownContent>
            <MarkdownContent>{product.fields.Contents}</MarkdownContent>
            <p className={"text-sm italic"}>* {t("product.shippingNote")}</p>
            <div className="h-4" />
            {product.fields.InStock ? (
              <Link
                href={
                  product.fields.Link
                    ? product.fields.Link
                    : `https://api.whatsapp.com/send?phone=905532704508&text=${encodeURIComponent(
                        t("product.whatsappMessage", {
                          product:
                            product.fields.Name + " - " + product.fields.Size,
                        }),
                      )}`
                }
                target={"_blank"}
              >
                <div className="button text-center">{t("product.buyNow")}</div>
              </Link>
            ) : (
              <div className="button text-center">
                {t("product.outOfStock")}
              </div>
            )}
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 opacity-90 sm:grid-cols-3 lg:grid-cols-4">
          {others.slice(0, 4).map((other: ProductInterface) => (
            <Link href={`/store/${other.fields.Slug}`} key={other.id}>
              <Image
                src={other.fields.Images[0].url}
                alt={other.fields.Name}
                width={300}
                height={300}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
