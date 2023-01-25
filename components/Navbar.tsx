"use client";

import { useEffect } from "react";
import { useFiltersStore } from "@/stores/filters";

export default function Navbar() {
  const categories = useFiltersStore((state) => state.categories);
  const setCategories = useFiltersStore((state) => state.setCategories);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((categories) => {
        setCategories(categories);
      });
  }, []);

  useEffect(() => {
    if (categories) {
      console.log("products", categories);
    }
  }, [categories]);
  return (
    <nav className="order-first h-full bg-base-200 sm:w-32">
      <ul>
        {categories.map((category, i) => {
          return <li key={i}>{category}</li>;
        })}
      </ul>
    </nav>
  );
}
