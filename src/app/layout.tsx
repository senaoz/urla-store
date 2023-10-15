import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/app/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Urla Zeytin Çiftliği",
  description: "Kimyasal İlaçlamasız - Doğal Zeytinyağı Üretimi",
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
      </body>
      <div className="custom-container text-right text-amber-50">
        urlaolivefarms@gmail.com - 0505 697 45 08
      </div>
    </html>
  );
}
