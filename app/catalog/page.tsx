"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import BottomNavBar from "@/components/BottomNavBar";
import ListingCard from "@/components/ListingCard";
import LoadingState from "@/components/LoadingState";
import MapPlaceholder from "@/components/MapPlaceholder";
import ResultsHeader from "@/components/ResultsHeader";
import SearchBar from "@/components/SearchBar";
import SectionHeader from "@/components/SectionHeader";
import SortSelect from "@/components/SortSelect";
import { rooms } from "@/data/listings";

const CatalogPage = () => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const sortedRooms = useMemo(() => {
    const filtered = rooms.filter((room) => {
      const haystack = `${room.title} ${room.subtitle} ${room.location}`.toLowerCase();
      return haystack.includes(query.toLowerCase());
    });

    return filtered.sort((a, b) => {
      if (sort === "asc") return a.price - b.price;
      return b.price - a.price;
    });
  }, [query, sort]);

  return (
    <main className="mx-auto min-h-screen max-w-md space-y-4 p-4 pb-24 sm:max-w-6xl sm:p-6">
      <header className="space-y-3">
        <Link href="/" className="text-sm font-medium text-pine">
          ← Back to Home
        </Link>
        <SectionHeader title="Catalog" subtitle="Explore every listing with search, sorting, and map context" />
        <SearchBar value={query} onChange={setQuery} />
        <div className="flex items-center justify-between gap-3">
          <ResultsHeader count={sortedRooms.length} />
          <SortSelect value={sort} onChange={setSort} />
        </div>
      </header>

      {loading ? <LoadingState label="Gathering rooms and prices..." /> : null}
      {!loading ? (
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            {sortedRooms.map((room) => (
              <ListingCard key={room.id} {...room} image={room.images[0]} />
            ))}
          </div>
          <MapPlaceholder />
        </section>
      ) : null}

      <BottomNavBar active="catalog" />
    </main>
  );
};

export default CatalogPage;
