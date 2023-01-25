async function getProductsByCategory(category: string) {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );
  const products = await res.json();
  return products;
}

export default async function ProductsByCategory({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  const products = await getProductsByCategory(category);

  return (
    <main className="flex-1 bg-base-100">
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <p className="">{JSON.stringify(products)}</p>
      </div>
    </main>
  );
}
