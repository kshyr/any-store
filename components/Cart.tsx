"use client";

import { useCartStore } from "@/stores/cart";
import { useEffect, useState } from "react";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const cartOpened = useCartStore((state) => state.opened);
  const toggleOpened = useCartStore((state) => state.toggleOpened);
  const clearCart = useCartStore((state) => state.clearCart);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cartOpened && cart.length === 0) {
      toggleOpened();
    }
  }, [cartOpened, cart, toggleOpened]);

  return (
    <div
      className={`${
        cart.length > 0 && "collapse-arrow"
      } collapse -my-2 text-right`}
    >
      <input
        type="checkbox"
        checked={cartOpened}
        onChange={cart.length > 0 ? toggleOpened : () => null}
      />
      <div className="collapse-title">
        <p className="text-2xl font-bold">
          {cart.length > 0
            ? `Total: ${cart
                ?.reduce((acc, item) => acc + item.price, 0)
                .toFixed(2)}`
            : "Cart is empty"}
        </p>
      </div>
      {cart.length > 0 && (
        <div
          className={`collapse-content rounded-b-md shadow-inner ${
            cartOpened && "border-l border-r border-b"
          } bg-base-300`}
        >
          <div className="mt-2 flex flex-col items-start justify-center">
            {cart.map((item) => {
              return (
                <div
                  className="flex items-center justify-between gap-4"
                  key={item.id}
                >
                  <p className="text-xl font-bold text-neutral-content">
                    {item.title}
                  </p>

                  <p className="text-xl font-bold text-neutral-content">
                    x{item.quantity}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex w-full justify-between">
            <button
              onClick={() => setLoading(true)}
              className={`btn-primary ${loading && "loading"} btn mt-3`}
            >
              {loading ? "Loading..." : "Order"}
            </button>
            <button onClick={clearCart} className="btn-warning btn mt-3">
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
