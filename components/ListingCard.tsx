"use client";

import Link from "next/link";

interface ListingCardProps {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  price: number;
  rating: number;
  badge?: string;
}

const ListingCard = ({ id, image, title, subtitle, price, rating, badge }: ListingCardProps) => {
  return (
    <article className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
      <Link href={`/rooms/${id}`} className="block">
        <div className="relative">
          <img src={image} alt={title} className="h-48 w-full object-cover" />
          {badge ? (
            <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold">
              {badge}
            </span>
          ) : null}
        </div>
        <div className="space-y-2 p-4">
          <p className="line-clamp-1 text-base font-semibold">{title}</p>
          <p className="line-clamp-1 text-sm text-zinc-600">{subtitle}</p>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-ember">${price} night</p>
            <p className="text-sm">★ {rating.toFixed(2)}</p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ListingCard;
