"use client";

interface SortSelectProps {
  value: "asc" | "desc";
  onChange: (value: "asc" | "desc") => void;
}

const SortSelect = ({ value, onChange }: SortSelectProps) => {
  return (
    <label className="flex items-center gap-2 text-sm">
      <span className="font-medium">Sort</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as "asc" | "desc")}
        className="rounded-full border border-black/10 bg-white px-3 py-2"
      >
        <option value="asc">Ascending price</option>
        <option value="desc">Descending price</option>
      </select>
    </label>
  );
};

export default SortSelect;
