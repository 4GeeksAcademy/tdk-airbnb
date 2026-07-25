"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BottomNavBar from "@/components/BottomNavBar";
import CategoryTabs from "@/components/CategoryTabs";
import ListingCard from "@/components/ListingCard";
import LoadingState from "@/components/LoadingState";
import SectionHeader from "@/components/SectionHeader";
import TopNavBar from "@/components/TopNavBar";
import { categories, rooms } from "@/data/listings";
import { Room } from "@/types";

const HomePage = () => {
  const [allRooms, setAllRooms] = useState<Room[]>([]);
  const [visibleRooms, setVisibleRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setAllRooms(rooms);
      setVisibleRooms(rooms);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const filtered = allRooms.filter((room) => {
      const matchCategory = activeCategory === "All" || room.category === activeCategory;
      const query = searchQuery.toLowerCase();
      const matchQuery = `${room.title} ${room.subtitle} ${room.host.name}`.toLowerCase().includes(query);
      return matchCategory && matchQuery;
    });
    setVisibleRooms(filtered);
  }, [activeCategory, allRooms, searchQuery]);

  return (
    <main className="mx-auto min-h-screen max-w-md space-y-5 p-4 pb-24 sm:max-w-5xl sm:p-6">
      <TopNavBar searchValue={searchQuery} onSearchChange={setSearchQuery} />
      <CategoryTabs active={activeCategory} categories={categories} onSelect={setActiveCategory} />
      <SectionHeader
        title="Based on your Japan search"
        subtitle="Explore popular stays and filter in real time"
      />
      {loading ? <LoadingState label="Loading handpicked stays..." /> : null}
      {!loading ? (
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visibleRooms.map((room) => (
            <ListingCard key={room.id} {...room} image={room.images[0]} />
          ))}
          {visibleRooms.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-black/20 p-4 text-sm">No stays match that search.</p>
          ) : null}
        </section>
      ) : null}
      <Link href="/catalog" className="inline-flex rounded-full bg-pine px-5 py-2 text-sm font-semibold text-white">
        Open full catalog
      </Link>
      <BottomNavBar active="home" />
    </main>
  );
};

export default HomePage;
