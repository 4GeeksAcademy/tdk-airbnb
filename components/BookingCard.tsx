"use client";

import GuestCounter from "@/components/GuestCounter";

interface BookingCardProps {
  pricePerNight: number;
  guests: number;
  setGuests: (guests: number) => void;
}

const BookingCard = ({ pricePerNight, guests, setGuests }: BookingCardProps) => {
  return (
    <aside className="space-y-4 rounded-3xl border border-black/10 bg-white p-4 shadow-sm">
      <p className="text-lg font-semibold">${pricePerNight} / night</p>
      <GuestCounter guests={guests} setGuests={setGuests} />
      <button type="button" className="w-full rounded-2xl bg-ember px-4 py-3 font-semibold text-white">
        Reserve
      </button>
      <p className="text-center text-xs text-zinc-500">No payment due yet.</p>
    </aside>
  );
};

export default BookingCard;
