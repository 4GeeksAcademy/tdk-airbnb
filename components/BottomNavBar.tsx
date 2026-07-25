"use client";

import Link from "next/link";

interface BottomNavBarProps {
  active: "home" | "catalog" | "account";
}

const BottomNavBar = ({ active }: BottomNavBarProps) => {
  const itemClass = "flex flex-col items-center gap-1 text-xs";
  const activeClass = "text-ember";

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-black/10 bg-white/95 p-3">
      <div className="mx-auto flex max-w-md justify-around">
        <Link href="/" className={`${itemClass} ${active === "home" ? activeClass : "text-zinc-500"}`}>
          <span>Explore</span>
        </Link>
        <Link
          href="/catalog"
          className={`${itemClass} ${active === "catalog" ? activeClass : "text-zinc-500"}`}
        >
          <span>Catalog</span>
        </Link>
        <Link href="/" className={`${itemClass} ${active === "account" ? activeClass : "text-zinc-500"}`}>
          <span>Log in</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNavBar;
