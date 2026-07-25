export interface Host {
  id: string;
  name: string;
  avatar: string;
  badge?: string;
  tenure: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Amenity {
  icon: string;
  title: string;
}

export interface Listing {
  id: string;
  title: string;
  subtitle: string;
  images: string[];
  price: number;
  priceLabel: string;
  rating: number;
  reviewCount: number;
  badge?: string;
  isFavorite: boolean;
  guests: number;
  bedrooms: number;
  beds: number;
  bath: string;
  location: string;
  highlightPills: string[];
  host: Host;
  amenities: Amenity[];
  reviews: Review[];
  category: "Beach" | "Mansions" | "Trending" | "Cabins" | "Lakefront";
}

export interface Room extends Listing {
  description: string;
}

export interface CategoryItem {
  label: "All" | Listing["category"];
  icon: string;
}
