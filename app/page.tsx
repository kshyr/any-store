import ProductActions from "@/components/ProductActions";
import { Item } from "@/types";
import Image from "next/image";

async function getProducts(): Promise<Item[]> {
  const res = await fetch(
    `https://dummyjson.com/products`
  );
  const data = await res.json();
  return data.products.map((product: Item) => {
    return {
      ...product,
      price: Math.floor(product.price) + 0.99,
    };
  });
}

export default async function Home() {
  const products: Item[] = await getProducts();
  return (
    <div className="grid grid-cols-2 gap-8 p-8">
      {products?.map((product: Item) => {
        return (
          <div key={product.id} className="card shadow-md">
            <figure className="relative h-40 w-full">
              <Image
                src={product.thumbnail}
                objectFit="contain"
                fill
                alt={product.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <ProductActions product={product} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
