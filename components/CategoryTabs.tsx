"use client";

import { CategoryItem } from "@/types";

interface CategoryTabsProps {
  active: string;
  categories: CategoryItem[];
  onSelect: (category: string) => void;
}

const CategoryTabs = ({ active, categories, onSelect }: CategoryTabsProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {categories.map((category) => (
        <button
          key={category.label}
          type="button"
          onClick={() => onSelect(category.label)}
          className={`rounded-full border px-4 py-2 text-sm font-medium ${
            active === category.label
              ? "border-transparent bg-ink text-white"
              : "border-black/10 bg-white text-zinc-700"
          }`}
        >
          <span className="mr-1">{category.icon}</span>
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
