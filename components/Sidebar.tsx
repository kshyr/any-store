"use client";

import { useEffect } from "react";
import { useFiltersStore } from "@/stores/filters";
import Link from "next/link";

export default function Sidebar() {
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
    <nav className="order-first bg-base-200">
      <ul className="menu w-60 border-r bg-base-100">
        {categories.map((category, i) => {
          return (
            <li key={i}>
              <Link href={"category/" + category}>{category}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}