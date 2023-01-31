"use client";

import { useCartStore } from "@/stores/cart";
import { useEffect, useState } from "react";
import { MdShoppingCart } from "react-icons/md";

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
      } collapse -mt-4 text-right`}
    >
      <input
        type="checkbox"
        checked={cartOpened}
        onChange={cart.length > 0 ? toggleOpened : () => null}
      />
      <div className="collapse-title flex items-center justify-end gap-2">
        <div className=" relative -mt-1 h-14 w-14">
          <MdShoppingCart className="h-full w-full" />
          <div
            className={`badge-outline badge badge-lg absolute top-2 ${
              cart.length > 19
                ? "left-2.5"
                : cart.length > 9
                ? "left-3"
                : "left-4"
            } border-none py-1 px-2 font-bold text-base-300`}
          >
            {cart.length}
          </div>
        </div>

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
          className={`collapse-content -mt-3 rounded-b-md shadow-inner ${
            cartOpened && "border-l border-r border-b"
          } bg-base-300`}
        >
          <div className="mt-2 flex max-h-[60vh] flex-col items-start justify-center overflow-y-auto p-4">
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
