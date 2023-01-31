import ProductCard from "@/components/ProductCard";
import { Item } from "@/types";

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
return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
