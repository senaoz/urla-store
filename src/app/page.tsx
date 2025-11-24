import { ProductCard } from "@/app/components/productCard";
import { loadProducts } from "@/utils/products";
import { ProductInterface } from "@/interfaces";
import Link from "next/link";
import Section from "@/app/components/section";
import Image from "next/image";
import type { Metadata } from "next";
import { t } from "@/utils/i18n";
import tr from "@/locales/tr.json";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://urlazeytinciftligi.com.tr";

export const metadata: Metadata = {
  title: tr.home.title,
  description: tr.home.metaDescription,
  openGraph: {
    title: tr.home.ogTitle,
    description: tr.home.ogDescription,
    url: siteUrl,
  },
};

export default async function Home() {
  const data = await loadProducts().then((data) => {
    return data.slice(0, 4);
  });

  // Organization structured data
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: t("common.siteName"),
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    description:
      "Doğal sızma zeytinyağı, yeşil zeytin, siyah zeytin ve organik ürünler üreten aile işletmesi.",
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
    sameAs: [],
  };

  // LocalBusiness structured data
  const localBusinessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#organization`,
    name: t("common.siteName"),
    image: `${siteUrl}/logo.svg`,
    description:
      "2000'lerin başında Urla'da kurulan aile işletmesi. Doğal koşullarda yetiştirilen zeytinlerden soğuk sıkım zeytinyağı üretimi.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Urla",
      addressRegion: "İzmir",
      addressCountry: "TR",
    },
    telephone: "+90-505-697-45-08",
    email: "urlaolivefarms@gmail.com",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessStructuredData),
        }}
      />
      <div className="custom-container text-amber-50">
        <div className="flex flex-col items-center justify-center gap-4">
          <Image
            src={"/logo.svg"}
            width={450}
            height={200}
            alt={"logo"}
            quality={75}
            priority={true}
            fill={false}
          />
        </div>
        <div className="mt-12">
          <span className="text-3xl font-bold text-secondary">
            {t("home.ourOils")}
          </span>
          <p>{t("home.ourOilsDescription")}</p>
          <div className="h-4" />
          <Link href={"/store"} className="button">
            {t("home.allProducts")}
          </Link>
          <div className="h-4" />
        </div>
      </div>
      <Section
        sectionClassName="py-12 prose-headings:text-primary"
        backgroundColor="bg-amber-50"
      >
        <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-3">
          <div>
            <h3>{t("home.naturalProducts.title")}</h3>
            {t("home.naturalProducts.description")}
          </div>
          <div>
            <h3>{t("home.secureShopping.title")}</h3>
            {t("home.secureShopping.description")}
          </div>
          <div className={"col-span-2 sm:col-span-1"}>
            <h3>{t("home.fastShipping.title")}</h3>
            {t("home.fastShipping.description")}
          </div>
        </div>
      </Section>
      <Section sectionClassName="pb-8">
        <h2>{t("home.bestsellers")}</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {data?.map((product: ProductInterface) => (
            <ProductCard
              product={product}
              key={product.id}
              className={"product-card-dark"}
              contentClassName={"m-4"}
            />
          ))}
        </div>
      </Section>
      <Section
        sectionClassName="py-12 prose-headings:text-primary"
        backgroundColor="bg-amber-50"
        className="flex justify-center"
      >
        <article className="grid w-10/12  text-center">
          <h3>{t("home.aboutUs.title")}</h3>
          <p>{t("home.aboutUs.description1")}</p>
          <p>{t("home.aboutUs.description2")}</p>
        </article>
      </Section>
      <Section
        sectionClassName="py-12 text-amber-50"
        className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3"
      >
        <div>
          <FiveStar />
          <p>{t("home.testimonials.0.text")}</p>
        </div>
        <div>
          <FiveStar />
          <p>{t("home.testimonials.1.text")}</p>
        </div>
        <div>
          <FiveStar />
          <p>{t("home.testimonials.2.text")}</p>
        </div>
      </Section>
    </>
  );
}

function FiveStar() {
  return (
    <div className="flex items-center justify-center space-x-1">
      <svg
        className="h-4 w-4 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="h-4 w-4 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="h-4 w-4 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="h-4 w-4 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="h-4 w-4 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    </div>
  );
}
