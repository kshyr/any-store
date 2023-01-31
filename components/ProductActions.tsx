"use client";

import { MdAddShoppingCart, MdShoppingCart } from "react-icons/md";
import { useCartStore } from "@/stores/cart";
import { Item } from "@/types";

type ProductActionsProps = {
  product: Item;
};

export default function ProductActions({ product }: ProductActionsProps) {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  function handleAddToCart() {
    // Check if product is already in cart
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      updateQuantity(productInCart.id, productInCart.quantity + 1);
      return;
    }
    addToCart({ ...product });
  }

  return (
    <div className="card-actions mt-4">
      <button className="btn-primary btn gap-1" onClick={handleAddToCart}>
        <MdAddShoppingCart className="h-6 w-6" />
        <span className="text-lg">${product.price}</span>
      </button>
      <button className="btn-accent btn gap-1">
        <MdShoppingCart className="h-6 w-6" />
        <span className="text-lg font-bold">Buy Now</span>
      </button>
    </div>
  );
}
