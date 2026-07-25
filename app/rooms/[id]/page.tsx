"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import AmenitiesList from "@/components/AmenitiesList";
import BookingCard from "@/components/BookingCard";
import HostInfo from "@/components/HostInfo";
import ListingHeader from "@/components/ListingHeader";
import LoadingState from "@/components/LoadingState";
import PhotoGallery from "@/components/PhotoGallery";
import SectionHeader from "@/components/SectionHeader";
import { findRoomById } from "@/data/listings";
import { Room } from "@/types";

const RoomsDetailPage = () => {
  const params = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [guests, setGuests] = useState(1);
  const [room, setRoom] = useState<Room | null>(null);

  useEffect(() => {
    setLoading(true);
    setRoom(null);
    const timer = setTimeout(() => {
      setRoom(findRoomById(params.id) ?? null);
      setLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, [params.id]);

  if (!loading && !room) {
    return (
      <main className="mx-auto min-h-screen max-w-md space-y-4 p-4">
        <p className="rounded-2xl border border-black/10 bg-white p-4">Room not found.</p>
        <Link href="/catalog" className="inline-flex rounded-full bg-pine px-4 py-2 text-sm text-white">
          Return to catalog
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-md space-y-5 p-4 pb-10 sm:max-w-3xl sm:p-6">
      <Link href="/catalog" className="text-sm font-medium text-pine">
        ← Back to Catalog
      </Link>
      {loading || !room ? <LoadingState label="Loading room details..." /> : null}
      {!loading && room ? (
        <>
          <PhotoGallery images={room.images} index={photoIndex} onChange={setPhotoIndex} />
          <ListingHeader title={room.title} location={room.location} rating={room.rating} reviewCount={room.reviewCount} />
          <HostInfo avatar={room.host.avatar} name={room.host.name} tenure={room.host.tenure} badge={room.host.badge} />
          <AmenitiesList items={room.amenities} />
          <section className="space-y-2 rounded-2xl border border-black/10 bg-white p-4">
            <SectionHeader title="About this stay" />
            <p className="text-sm leading-6 text-zinc-700">{room.description}</p>
            <p className="text-sm text-zinc-600">Guests up to {room.guests} · {room.bedrooms} bedrooms · {room.beds} beds</p>
          </section>
          <BookingCard pricePerNight={room.price} guests={guests} setGuests={setGuests} />
        </>
      ) : null}
    </main>
  );
};

export default RoomsDetailPage;
