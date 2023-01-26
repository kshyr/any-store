"use client";
import { MdAddShoppingCart, MdShoppingCart } from "react-icons/md";
import { useCartStore } from "@/stores/cart";

type ProductActionsProps = {
  id: number;
  price: number;
  stock: number;
};

export default function ProductActions({
  id,
  price,
  stock,
}: ProductActionsProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="card-actions">
      <button
        className="btn-primary btn gap-1"
        onClick={() => addToCart({ id, price, quantity: 3 })}
      >
        <MdAddShoppingCart className="h-6 w-6" />
        <span className="text-lg">${price}</span>
      </button>
      <button className="btn-accent btn gap-1">
        <MdShoppingCart className="h-6 w-6" />
        <span className="text-lg font-bold">Buy Now</span>
      </button>
    </div>
  );
}
