"use client";

import { useCartStore } from "@/stores/cart";
import { useState, useEffect } from "react";

export default function ModalWrapper() {
  const cartOpened = useCartStore((state) => state.opened);
  const toggleOpened = useCartStore((state) => state.toggleOpened);
  const [displayNone, setDisplayNone] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (cartOpened) {
      setDisplayNone(false);
    } else {
      setTimeout(() => {
        setDisplayNone(true);
      }, 150);
    }
  }, [cartOpened]);

  useEffect(() => {
    if (!displayNone) {
      setTimeout(() => {
        setShowOverlay(true);
      }, 25);
    } else {
      setShowOverlay(false);
    }
  }, [displayNone]);
  return (
    <div
      className={`fixed top-0 h-full w-full bg-base-100 transition-colors duration-150 ease-in ${
        showOverlay ? "bg-opacity-50" : "bg-opacity-0"
      } ${displayNone && "hidden"}`}
      onClick={toggleOpened}
    >
      ModalWrapper
    </div>
  );
}
