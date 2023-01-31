import ProductCard from "@/components/ProductCard";
import { Item } from "@/types";

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
    <div className="page-grid">
      {products?.map((product: Item) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
