"use client";

interface GuestCounterProps {
  guests: number;
  setGuests: (guests: number) => void;
}

const GuestCounter = ({ guests, setGuests }: GuestCounterProps) => {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-black/10 bg-white p-3">
      <p className="text-sm font-medium">Guests</p>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setGuests(Math.max(1, guests - 1))}
          className="h-8 w-8 rounded-full border border-black/15"
        >
          -
        </button>
        <span className="w-6 text-center text-sm font-semibold">{guests}</span>
        <button
          type="button"
          onClick={() => setGuests(Math.min(8, guests + 1))}
          className="h-8 w-8 rounded-full border border-black/15"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default GuestCounter;
