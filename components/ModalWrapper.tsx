"use client";

import { useCartStore } from "@/stores/cart";

export default function ModalWrapper() {
  const cartOpened = useCartStore((state) => state.opened);
  return (
    <div
      className={`fixed top-0 h-full w-full bg-base-100 transition-colors duration-150 ease-in ${
        cartOpened ? "bg-opacity-50" : "bg-opacity-0"
      }`}
    >
      ModalWrapper
    </div>
  );
}
