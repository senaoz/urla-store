import { loadProducts } from "@/utils/airtable";
import { productImages, ProductInterface } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import React from "react";

export default async function Product({
  params,
}: {
  params: { slug: string };
}) {
  const data = await loadProducts();

  const product: ProductInterface = data.find(
    (product: ProductInterface) => product.fields.Slug === params.slug,
  );

  const others = data.filter(
    (other: ProductInterface) => other.fields.Type === product.fields.Type,
  );

  return (
    <div className="custom-container bg-primary text-amber-50">
      <div className="block gap-8 md:grid md:grid-cols-2">
        <Image
          className="w-full shadow-xl"
          src={
            productImages[product.fields.Slug] || product?.fields?.Images[0].url
          }
          alt={product?.fields?.Name}
          width={500}
          height={500}
          placeholder={"blur"}
          blurDataURL={
            productImages[product.fields.Slug] || product?.fields?.Images[0].url
          }
          quality={75}
          priority={true}
        />
        <div className="prose-headings:my-2">
          <div className="h-4" />
          <span className="rounded-full bg-secondary px-3 py-1.5 text-lg font-bold text-primary">
            {product.fields.Size}
          </span>
          <h2>{product.fields.Name}</h2>
          <div className="product-card__price">
            <h3 className="product-card__price__old">{product.fields.Price}</h3>
            <h3 className="product-card__price__sale">
              {product.fields.SalePrice}
            </h3>
          </div>
          <Markdown>{product.fields.Description}</Markdown>
          <Markdown>{product.fields.Contents}</Markdown>
          <p className={"text-sm italic"}>
            *Kargo bedeli (50 tl) ürün ödeme sayfasında eklenir.
          </p>
          <div className="h-4" />
          {product.fields.InStock ? (
            <Link
              href={
                product.fields.Link
                  ? product.fields.Link
                  : `https://api.whatsapp.com/send?phone=905532704508&text=Merhaba, ${
                      product.fields.Name + " - " + product.fields.Size
                    } ürününü sipariş vermek istiyorum.`
              }
              target={"_blank"}
            >
              <div className="button text-center">Satın Al</div>
            </Link>
          ) : (
            <div className="button text-center">Stokta yok</div>
          )}
        </div>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-4 opacity-90 sm:grid-cols-3 lg:grid-cols-4">
        {others.slice(0, 4).map((other: ProductInterface) => (
          <Link href={`/store/${other.fields.Slug}`} key={other.id}>
            <Image
              src={other.fields.Images[0].url}
              alt={other.fields.Name}
              width={300}
              height={300}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
