interface AmenitiesListProps {
  items: Array<{ icon: string; title: string }>;
}

const AmenitiesList = ({ items }: AmenitiesListProps) => {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">Amenities</h2>
      <ul className="grid grid-cols-2 gap-2">
        {items.map((amenity) => (
          <li key={amenity.title} className="rounded-2xl border border-black/10 bg-white p-3 text-sm">
            <span className="mr-2">{amenity.icon}</span>
            {amenity.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AmenitiesList;
