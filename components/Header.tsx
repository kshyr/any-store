import dynamic from "next/dynamic";

const Cart = dynamic(() => import("./Cart"), { ssr: false });

export default function Header() {
  return (
    <header className="sticky top-0 z-10 order-first flex h-16 items-start justify-between border-b border-accent border-opacity-25 bg-base-100 px-4 py-2">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-base-content">
          <span className="inline-block bg-[#3572b8] pt-3 pl-3 pr-1 pb-1 text-white">
            any
          </span>
          Store
        </h1>
      </div>
      <Cart />
    </header>
  );
}
