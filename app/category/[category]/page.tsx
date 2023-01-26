import ProductActions from "@/components/ProductActions";
import { Item } from "@/types";
import Image from "next/image";

async function getProductsByCategory(category: string): Promise<Item[]> {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );
  const data = await res.json();
  return data.products.map((product: Item) => {
    return {
      ...product,
      price: Math.floor(product.price) + 0.99,
    };
  });
}

export default async function ProductsByCategory({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  const products: Item[] = await getProductsByCategory(category);

  return (
    <main className="flex-1 bg-base-100">
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
                <ProductActions
                  id={product.id}
                  price={product.price}
                  stock={product.stock}
                />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
