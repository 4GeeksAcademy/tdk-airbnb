import { CategoryItem, Room } from "@/types";

export const categories: CategoryItem[] = [
  { label: "All", icon: "🏠" },
  { label: "Beach", icon: "🏖️" },
  { label: "Mansions", icon: "🏛️" },
  { label: "Trending", icon: "🔥" },
  { label: "Cabins", icon: "🪵" },
  { label: "Lakefront", icon: "🌊" }
];

export const rooms: Room[] = [
  {
    id: "tokyo-loft",
    title: "Bunk Room (Twin) | unitoASAKUSA",
    subtitle: "Room in hotel in Taito City, Japan",
    images: [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1200",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200"
    ],
    price: 183,
    priceLabel: "$183 for 3 nights",
    rating: 4.82,
    reviewCount: 107,
    badge: "Guest favorite",
    isFavorite: false,
    guests: 2,
    bedrooms: 1,
    beds: 2,
    bath: "Shared half-bath",
    location: "Taito City, Tokyo",
    highlightPills: ["Book early to save", "Pay $0 today", "Free cancellation"],
    host: {
      id: "host-unito",
      name: "Unito",
      avatar: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=300",
      badge: "Superhost",
      tenure: "1 year hosting"
    },
    amenities: [
      { icon: "🗝️", title: "Self check-in" },
      { icon: "📶", title: "Fast Wi-Fi" },
      { icon: "🧺", title: "Laundry access" },
      { icon: "🧳", title: "Luggage drop-off" }
    ],
    reviews: [
      {
        id: "r1",
        author: "Rina",
        rating: 5,
        date: "Jan 2026",
        comment: "Great location and surprisingly quiet at night."
      },
      {
        id: "r2",
        author: "Diego",
        rating: 4,
        date: "Mar 2026",
        comment: "Clean and practical. Perfect for short stays."
      }
    ],
    category: "Trending",
    description:
      "A compact twin room with easy subway access, ideal for city-first travelers."
  },
  {
    id: "kyoto-machiya",
    title: "Garden Machiya Retreat",
    subtitle: "Entire home in Kyoto, Japan",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200"
    ],
    price: 310,
    priceLabel: "$310 for 3 nights",
    rating: 4.93,
    reviewCount: 221,
    isFavorite: true,
    guests: 4,
    bedrooms: 2,
    beds: 3,
    bath: "1 private bath",
    location: "Nakagyo Ward, Kyoto",
    highlightPills: ["Chef kitchen", "Tea set included", "Free cancellation"],
    host: {
      id: "host-akane",
      name: "Akane",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
      tenure: "4 years hosting"
    },
    amenities: [
      { icon: "🍵", title: "Traditional tea corner" },
      { icon: "🌿", title: "Private mini garden" },
      { icon: "🛁", title: "Deep soaking tub" },
      { icon: "❄️", title: "Air conditioning" }
    ],
    reviews: [
      {
        id: "r3",
        author: "Elena",
        rating: 5,
        date: "Feb 2026",
        comment: "Beautiful home and very responsive host."
      }
    ],
    category: "Mansions",
    description:
      "Stay in a restored machiya with serene interiors and room for small families."
  },
  {
    id: "okinawa-shore",
    title: "Shoreline Bungalow",
    subtitle: "Entire home in Okinawa, Japan",
    images: [
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=1200",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1200"
    ],
    price: 265,
    priceLabel: "$265 for 3 nights",
    rating: 4.76,
    reviewCount: 143,
    isFavorite: false,
    guests: 3,
    bedrooms: 2,
    beds: 2,
    bath: "1 private bath",
    location: "Onna, Okinawa",
    highlightPills: ["Walk to beach", "Free parking", "Sunset deck"],
    host: {
      id: "host-sora",
      name: "Sora",
      avatar: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=300",
      tenure: "3 years hosting"
    },
    amenities: [
      { icon: "🏝️", title: "Beach access" },
      { icon: "🍳", title: "Full kitchen" },
      { icon: "🚗", title: "Free parking" },
      { icon: "🧊", title: "Air conditioning" }
    ],
    reviews: [
      {
        id: "r5",
        author: "Noah",
        rating: 5,
        date: "May 2026",
        comment: "Perfect for beach mornings and quiet nights."
      }
    ],
    category: "Beach",
    description: "Bright bungalow with ocean breeze, ideal for relaxed island stays."
  }
];

export const findRoomById = (id: string) => rooms.find((room) => room.id === id);
