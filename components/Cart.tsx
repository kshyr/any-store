"use client";

import { useCartStore } from "@/stores/cart";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const cartOpened = useCartStore((state) => state.opened);
  const toggleOpened = useCartStore((state) => state.toggleOpened);
  const clearCart = useCartStore((state) => state.clearCart);

  console.log(cartOpened);
  return (
    <div className="collapse-arrow collapse -my-2 text-right">
      <input type="checkbox" checked={cartOpened} onChange={toggleOpened} />
      <div className="collapse-title">
        <p className="text-2xl font-bold">
          Total: ${cart?.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
        </p>
      </div>
      <div className="collapse-content bg-accent">
        <div className="mt-2 flex flex-col items-start justify-center">
          {cart.map((item) => {
            return (
              <div
                className="flex items-center justify-between gap-4"
                key={item.id}
              >
                <p className="text-xl font-bold text-accent-content">
                  {item.title}
                </p>

                <p className="text-xl font-bold text-accent-content">
                  x{item.quantity}
                </p>
              </div>
            );
          })}
        </div>
        <button
          onClick={clearCart}
          className="badge-warning badge mt-3 inline-block"
        >
          <p className="badge-warning-content font-bold">Clear</p>
        </button>
      </div>
    </div>
  );
}
