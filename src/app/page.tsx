import { ProductCard } from "@/app/components/productCard";
import { loadProducts } from "@/utils/airtable";
import { ProductInterface } from "@/interfaces";
import Link from "next/link";

export default async function Home() {
  const data = await loadProducts().then((data) => {
    return data.slice(0, 4);
  });

  return (
    <>
      <div className="custom-container text-amber-50">
        <div className="flex flex-col items-center justify-center gap-4">
          <img src={"/logo.svg"} width={450} alt={"logo"} />
        </div>
        <div className="mt-12">
          <span className="text-3xl font-bold text-secondary">
            Zeytinyağlarımız
          </span>
          <p>
            Eşsiz lezzeti ile her türlü sebze ve et yemeklerinde, sıcak, soğuk
            salatalarda, sabah kahvaltılarında kullanabileceğiniz ve güvenle
            tüketebileceğiniz naturel sızma zeytinyağları üretiyoruz.
          </p>
          <div className="h-4" />
          <Link href={"/store"} className="button">
            Tüm Ürünler
          </Link>
          <div className="h-4" />
        </div>
      </div>

      <div className="bg-amber-50 py-12 prose-headings:text-primary">
        <div className="custom-container">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <h3>Doğal Ürünler</h3>
              İlaçlamasız tarım yöntemleri uyguluyor, sürdürebilir yaşam için
              her gün çabalıyoruz.
            </div>
            <div>
              <h3>Güvenli Alışveriş</h3>
              Ödemelerimizi PayTR aracılığı ile SLL koruması altında alıyoruz.
            </div>
            <div>
              <h3>Hızlı Teslimat</h3>
              <b>Ücretsiz kargo</b> 📦 Ayrıca kargo firmalarına ertesi gün
              teslim edilir.
            </div>
          </div>
        </div>
      </div>

      <div className="custom-container text-amber-50">
        <h2>En Çok Satanlar</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {data?.map((product: ProductInterface) => (
            <ProductCard
              product={product}
              key={product.id}
              className={"product-card-dark"}
              contentClassName={"m-4"}
            />
          ))}
        </div>
        <div className="h-12" />
      </div>

      <div className="bg-amber-50 py-12 prose-headings:text-primary">
        <div className="custom-container flex justify-center">
          <article className="grid w-10/12  text-center">
            <h3>Urla Zeytin Çiftliği kimdir?</h3>
            <p>
              Urla Zeytin Çiftliği, 2000’lerin başında Urla’da kurulan bir aile
              kuruluşudur. 3. nesil olarak, ağaçlarımızı doğal koşullarda
              yetiştirip lezzetli ve doğal zeytinyağı üretmeye devam ediyoruz.
            </p>
            <p>
              Pazarlama anlayışımıza yeni bir soluk getirerek, müşterilerimizin
              sağlıklı yaşamlarına katkıda bulunmayı hedefliyoruz. Heyecanla
              sizleri de ortak etmek için buradayız ve zeytinyağımızı denemeniz
              için sabırsızlanıyoruz!
            </p>
          </article>
        </div>
      </div>
      <div className="py-12 text-amber-50">
        <div className="custom-container flex">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <FiveStar />
              <p>
                Önceden yediğimiz yağlara hiç benzemiyor. Sizin yağınız tazelik
                kokuyor. Çoçuklar bile farkını hissetti. Özellikle salatalarda
                efsane oluyor. İlginiz için teşekkürler.
              </p>
            </div>
            <div>
              <FiveStar />
              <p>
                İlk defa bu kadar güzel bir zeytinyağı aldım. Çok teşekkürler.
                Zeytinyağı konusunda tecrübeli biri olarak kokusu tadi enfesti
                ve asit orani gerçekten harika. Yakıcılığı orta derecede
                diyebilirim.
              </p>
            </div>
            <div>
              <FiveStar />
              <p>
                Bu yıl tam 8 adet aldık, ailecek çok memnunuz. Arkadaşlarla
                beraber yıllardır Betül hanımdan alıyoruz. Başka yağları
                tüketemez olduk, salata, pasta, börek, tüm yemeklerimde
                kullanıyorum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function FiveStar() {
  return (
    <div className="flex items-center justify-center space-x-1">
      <svg
        className="h-4 w-4 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="h-4 w-4 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="h-4 w-4 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="h-4 w-4 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="h-4 w-4 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    </div>
  );
}
