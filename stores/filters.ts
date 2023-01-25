import { create } from "zustand";
import { FilterState } from "@/types";

export const useFiltersStore = create<FilterState>((set) => ({
  categories: [],
  filters: {
    category: "",
  },
  setCategories: (categories) => set({ categories }),
  setFilters: (filters) => set({ filters }),
}));
