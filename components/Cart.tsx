"use client";

import { useCartStore } from "@/stores/cart";

export default function Cart() {
  const total = useCartStore((state) =>
    state.cart.reduce((acc, item) => acc + item.price, 0)
  );
  return (
    <div className="flex h-full flex-row items-center justify-center">
      <p className="text-2xl font-bold">Total: {total}</p>
    </div>
  );
}
