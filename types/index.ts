export type Item = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type CartItem = Item & {
  quantity: number;
};

export type CartState = {
  cart: CartItem[];
  opened: boolean;
  addToCart: (item: Item) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  toggleOpened: () => void;
};

export type FilterState = {
  categories: string[];
  filters: {
    category: string;
  };
  setCategories: (categories: string[]) => void;
  setFilters: (filters: { category: string }) => void;
};
