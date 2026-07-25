interface ListingHeaderProps {
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
}

const ListingHeader = ({ title, location, rating, reviewCount }: ListingHeaderProps) => {
  return (
    <header className="space-y-2">
      <h1 className="text-2xl font-semibold leading-tight">{title}</h1>
      <p className="text-sm text-zinc-600">{location}</p>
      <p className="text-sm font-medium">★ {rating.toFixed(2)} · {reviewCount} reviews</p>
    </header>
  );
};

export default ListingHeader;
