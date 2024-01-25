import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/app/components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Urla Zeytin Çiftliği",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "any",
      url: "/favicon.ico",
    },
  ],
  category: "Food & Drink",
  description:
    "Eşsiz lezzeti ile her türlü sebze ve et yemeklerinde, sıcak, soğuk salatalarda, sabah kahvaltılarında kullanabileceğiniz ve güvenle tüketebileceğiniz naturel sızma zeytinyağı üretiyoruz. Kimyasal ilaçlamasız paketler Urla'dan evlerinize gelmeye hazır!",
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
        <div className="custom-container text-right text-amber-50">
          <a href="mailto:urlaolivefarms@gmail.com">urlaolivefarms@gmail.com</a>{" "}
          - +90 505 697 45 08
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
