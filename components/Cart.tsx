"use client";

import { useCartStore } from "@/stores/cart";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div className="flex h-full flex-row items-center justify-center gap-4">
      <p className="text-2xl font-bold">
        Total: {cart?.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
      </p>
      <button onClick={clearCart} className="badge-warning badge">
        X
      </button>
    </div>
  );
}
