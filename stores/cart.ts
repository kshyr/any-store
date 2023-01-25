import { create } from "zustand";
import { Item, CartItem, CartState } from "@/types";

export const useCartStore = create<CartState>((set) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => ({
      cart: [
        ...state.cart,
        {
          id: item.id,
          item,
          quantity: 1,
        },
      ],
    })),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    })),

  clearCart: () => set({ cart: [] }),
}));
