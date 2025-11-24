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

export const productImages: Record<string, string> = {
  "1l": "/products/1litre.webp",
  "3l": "/products/3litrebahce.webp",
  "5l": "/products/5litre.jpg",
  "250ml": "/products/250ml.webp",
  ezme: "/products/ezme.jpg",
  tanisma: "/products/mini-set.jpg",
  "zeytin-500gr": "/products/zeytin-500gr.webp",
  "zeytin-1kg": "/products/sele-zeytin-1kg.webp",
  ihlamur: "/products/ihlamur-bahce.jpg",
  default: "/products/3litre-bahce.jpg",
};
