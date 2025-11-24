"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { t } from "@/utils/i18n";

interface LinkInterface {
  name: string;
  path: string;
}

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  let links: LinkInterface[] = [
    {
      name: t("nav.home"),
      path: "/",
    },
    {
      name: t("nav.allProducts"),
      path: "/store",
    },
  ];

  return (
    <nav className="custom-container py-4-important flex items-center justify-center gap-4">
      <Image
        src={"/logo.svg"}
        width={120}
        height={200}
        onClick={() => router.push("/")}
        alt={t("common.logoAlt")}
      />
      <div className="grow"></div>

      {links.map((link) => (
        <Link
          className={`text-center ${pathname === link.path ? "active" : ""}`}
          href={link.path}
          key={link.name}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
