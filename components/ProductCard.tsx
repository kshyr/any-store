import type { Item } from "@/types";
import ProductActions from "./ProductActions";
import Image from "next/image";

type ProductCardProps = {
  product: Item;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card border border-dashed border-accent border-opacity-25 bg-base-100 shadow-lg">
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
}
