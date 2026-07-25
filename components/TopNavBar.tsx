"use client";

import SearchBar from "@/components/SearchBar";

interface TopNavBarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

const TopNavBar = ({ searchValue, onSearchChange }: TopNavBarProps) => {
  return (
    <header className="space-y-3 rounded-3xl border border-black/10 bg-white/80 p-3 backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">🏠</span>
          <p className="text-lg font-semibold text-rose-600">airbnb</p>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className="rounded-full border border-black/15 bg-white px-3 py-1 text-xs">
            🌐
          </button>
          <button type="button" className="rounded-full border border-black/15 bg-white px-3 py-1 text-xs">
            ☰
          </button>
        </div>
      </div>
      <SearchBar value={searchValue} onChange={onSearchChange} />
    </header>
  );
};

export default TopNavBar;
