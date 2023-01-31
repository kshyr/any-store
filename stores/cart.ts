import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Item, CartItem, CartState } from "@/types";

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (item) =>
        set((state) => ({
          cart: [
            ...state.cart,
            {
              ...item,
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
    }),
    {
      name: "cart",
    }
  )
);
