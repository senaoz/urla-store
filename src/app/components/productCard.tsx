// product card component
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductInterface } from "@/interfaces";

export const ProductCard = ({
  id,
  product,
  className,
  contentClassName,
}: {
  id?: string;
  className?: string;
  contentClassName?: string;
  product: ProductInterface;
}) => {
  return (
    <Link
      className={`product-card ${!product.fields.InStock ? "opacity-90" : ""} ${
        className || ""
      }`}
      key={id}
      href={`/store/${product.fields.Slug}`}
    >
      <div className={`product-card__image relative`}>
        <Image
          src={product?.fields?.Images[0]?.url}
          alt={product?.fields?.Name}
          width={300}
          height={300}
        />
        {!product.fields.InStock && (
          <span className="absolute bottom-4 left-4 text-lg font-bold text-white">
            Tükendi
          </span>
        )}
      </div>

      <div className={`product-card__content ${contentClassName}`}>
        <h4>
          {product.fields.Name}
          {product.fields.Size === "Standart"
            ? null
            : ` - ${product.fields.Size}`}
        </h4>
        <div className="product-card__price">
          <span className="product-card__price__old">
            {product.fields.Price}
          </span>
          <span className="product-card__price__sale">
            {product.fields.SalePrice}
          </span>
        </div>
      </div>
    </Link>
  );
};
