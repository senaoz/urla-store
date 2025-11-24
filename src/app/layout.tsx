import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/app/components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { t } from "@/utils/i18n";
import tr from "@/locales/tr.json";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://urlazeytinciftligi.com.tr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: tr.meta.defaultTitle,
    template: `%s | ${tr.common.siteName}`,
  },
  description: tr.meta.defaultDescription,
  keywords: [
    "zeytinyağı",
    "sızma zeytinyağı",
    "doğal zeytinyağı",
    "organik zeytinyağı",
    "urla zeytinyağı",
    "soğuk sıkım zeytinyağı",
    "zeytin",
    "yeşil zeytin",
    "siyah zeytin",
    "zeytin ezmesi",
    "ihlamur",
    "urla",
    "izmir",
    "organik ürünler",
    "doğal ürünler",
  ],
  authors: [{ name: tr.common.siteName }],
  creator: tr.common.siteName,
  publisher: tr.common.siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: tr.common.siteName,
    title: tr.meta.defaultTitle,
    description: tr.meta.ogDescription,
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: tr.common.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: tr.meta.twitterTitle,
    description: tr.meta.twitterDescription,
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "any",
      url: "/favicon.ico",
    },
  ],
  category: "Food & Drink",
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} typography min-h-screen bg-primary`}>
        <Navigation />
        {children}
        <div className="custom-container text-center text-amber-50 sm:text-right">
          <a href={`mailto:${t("common.email")}`}>{t("common.email")}</a>{" "}
          - <a href={`tel:${t("common.phoneFormatted")}`}>{t("common.phone")}</a>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
