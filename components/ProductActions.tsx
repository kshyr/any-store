"use client";
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
        className="btn-primary btn"
        onClick={() => addToCart({ id, price, quantity: 3 })}
      >
        {price}
      </button>
    </div>
  );
}
