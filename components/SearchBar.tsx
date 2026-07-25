"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <label className="block rounded-2xl border border-black/10 bg-white p-3 shadow-sm">
      <span className="sr-only">Search listings</span>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by city, title, or host"
        className="w-full border-0 bg-transparent text-sm outline-none"
      />
    </label>
  );
};

export default SearchBar;
