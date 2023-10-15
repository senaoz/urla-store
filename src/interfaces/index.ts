export interface ProductInterface {
  id: string;
  fields: {
    Name: string;
    Size: string;
    Type: string;
    Images: Image[];
    InStock: true;
    Price: number;
    SalePrice: number;
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
