import { StaticImageData } from "next/image";

export interface ProductInterface {
  id: string;
  fields: {
    Name: string;
    Size: string;
    Type: string;
    Images: Image[];
    InStock: true;
    Price: string;
    SalePrice: string;
    Description: string;
    Contents: string;
    Link: string;
    Slug: string;
  };
}

export interface Image {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: {
    small: Thumbnail;
    large: Thumbnail;
    full: Thumbnail;
  };
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

import i1 from "@/app/assets/products/ihlamur-1.jpg";
import e1 from "@/app/assets/products/ezme-1.jpg";
import t1 from "@/app/assets/products/tanisma-1.jpg";
import z1 from "@/app/assets/products/zeytin-500gr-1.jpg";
import l1 from "@/app/assets/products/1l-1.jpg";
import l5 from "@/app/assets/products/5l-1.jpg";
import l3 from "@/app/assets/products/3l-1.jpg";
import l250 from "@/app/assets/products/250ml-1.jpg";

export const productImages: Record<string, StaticImageData> = {
  "1l": l1,
  "3l": l3,
  "5l": l5,
  "250ml": l250,
  ezme: e1,
  tanisma: t1,
  "zeytin-500gr": z1,
  "zeytin-1kg": z1,
  ihlamur: i1,
  default: l1,
};
