"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { useFiltersStore } from "@/stores/filters";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export default function Sidebar() {
  const categories = useFiltersStore((state) => state.categories);
  const setCategories = useFiltersStore((state) => state.setCategories);

  const [width, setWidth] = useState(window.innerWidth);
  const [showSidebar, setShowSidebar] = useState(true);

  const isMobile = width <= 550;

  function handleWindowResize() {
    setWidth(window.innerWidth);
  }

  useLayoutEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    setShowSidebar(!isMobile);
  }, [isMobile]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((categories) => {
        setCategories(categories);
      });
  }, [setCategories]);

  return showSidebar ? (
    <nav className="order-first border-r border-accent border-opacity-25 bg-base-200">
      <button onClick={() => setShowSidebar(false)} className="lg:hidden">
        <AiOutlineClose className="ml-4 h-12 w-8" />
      </button>
      <ul className="menu w-60 bg-base-100">
        {categories.map((category, i) => {
          return (
            <li key={i}>
              <Link href={"category/" + category}>
                {category.toUpperCase().replace("-", " ")}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  ) : (
    <div className="w-12 bg-radial-gradient from-accent to-neutral bg-dot">
      <button onClick={() => setShowSidebar(true)}>
        <AiOutlineMenu className="ml-4 h-12 w-8" />
      </button>
    </div>
  );
}
