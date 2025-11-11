import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Product {
  _id: string;
  productName: string;
  price: string;
  images: string[];
  category: { title: string };
  quantity?: number;
}

interface CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) =>
        set((state) => {
          const existing = state.cart.find((p) => p._id === product._id);
          if (existing) {
            return {
              cart: state.cart.map((p) =>
                p._id === product._id
                  ? { ...p, quantity: (p.quantity || 1) + 1 }
                  : p
              ),
            };
          }
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((p) => p._id !== id),
        })),


      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage), 
    }
  )
);
