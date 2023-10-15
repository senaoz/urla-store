"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "src/app/assets/logo.svg";

interface LinkInterface {
  name: string;
  path: string;
}

export function Navigation() {
  const pathname = usePathname();

  let links: LinkInterface[] = [
    {
      name: "Ana Sayfa",
      path: "/",
    },
    {
      name: "Tüm Ürünler",
      path: "/store",
    },
  ];

  return (
    <nav className="custom-container py-4-important flex items-center justify-center gap-4">
      <Image src={logo} width={120} alt={"Urla Zeytin Ciftiligi"} />
      <span className="grow"></span>

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
