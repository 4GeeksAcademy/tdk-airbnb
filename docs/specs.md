# Project Specification

## 1. Overview
This is a vacation rental site that allows users to browse, search, and book rooms/spaces to stay at while on vacation. Users can view pictures and reviews of each space as part of their decision-making process.

## 2. Goals & Objectives
<!-- What this project aims to achieve -->

## 3. Background & Context
The site is a vacation rental platform (similar in concept to Airbnb-style listings). Core user actions include:
- Browsing recommended stays at a glance
- Searching for rooms based on parameters
- Viewing in-depth details on a specific room (photos, reviews, info)
- Booking a room

## 4. Scope
### In Scope
- 3-page single-page application (SPA): Home, Catalog, Room Detail
- Custom-built UI components (no third-party component libraries)
- Hardcoded/mocked data (no backend)
- Room browsing, searching, viewing details, and booking flow (front-end only)
- Display of pictures and reviews per room

### Out of Scope
- Backend/server implementation
- Real data persistence, authentication, or payments
- Third-party/pre-built component libraries

## 5. Stakeholders
<!-- Who is involved, their roles -->

## 6. Requirements
### Functional Requirements
<!-- What the system/project must do -->

### Non-Functional Requirements
<!-- Performance, security, scalability, usability, etc. -->

## 7. User Stories / Use Cases
<!-- Key scenarios describing how this will be used -->

## 8. Technical Design
### Tech Stack
- **Framework:** Next.js (App Router)
- **UI Library:** React
- **Styling:** Tailwind CSS
- **Language:** TypeScript

### Constraints
- All components must be custom-built (no third-party UI component libraries)
- No backend — this is a front-end-only SPA
- All placeholder/dummy data must be hardcoded using TypeScript (typed mock data, not fetched from an API)

### Architecture
Single-page application (SPA) built with Next.js App Router, consisting of 3 pages:

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Landing page; at-a-glance info and recommendations |
| Catalog | `/catalog` | Displays search results based on search parameters |
| Room Detail | `/room/[id]` | In-depth info on a specific room/entity (photos, reviews, etc.) |

### Data Model

Core entities used across all pages, defined as TypeScript interfaces and hardcoded as typed mock data (e.g. `data/listings.ts`).

```typescript
// ===== Core Entities =====

interface Listing {
  id: string;
  title: string;                 // "Bunk Room (Twin) | unitoASAKUSA"
  subtitle: string;               // "Room in hotel in Taitō-ku, Japan"
  images: string[];
  price: number;                  // numeric nightly/base price for sorting/filtering
  priceLabel: string;             // "$183 for 3 nights"
  originalPrice?: number;         // for strikethrough/discount display
  rating: number;                 // 4.8
  reviewCount: number;            // 107
  badge?: string;                 // "Guest favorite"
  isFavorite: boolean;
  guests: number;
  bedrooms: number;
  beds: number;
  bath: string;                   // "Shared half-bath"
  location: Location;
  highlightPills: string[];       // ["Book early to save", "Pay $0 today", "Free cancellation"]
  host: Host;
  amenities: Amenity[];
  reviews: Review[];
  availability: DateRange[];      // bookable date ranges (mocked)
}

interface Location {
  address: string;                // "Taitō-ku, Tokyo Prefecture, Japan"
  lat: number;
  lng: number;
}

interface Host {
  id: string;
  name: string;                   // "Unito"
  avatar: string;
  badge?: string;                 // "Superhost"
  tenure: string;                 // "1 year hosting"
}

interface Review {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  comment: string;
}

interface Amenity {
  icon: string;                   // icon key/name
  title: string;                  // "Self check-in"
}

interface DateRange {
  start: string;                  // ISO date
  end: string;                    // ISO date
}

interface ContinueSearchItem {
  id: string;
  title: string;
  dateRange: string;              // "Nov 20–23"
  guests: number;
  thumbnail: string;
}

interface CategoryTab {
  icon: string;
  label: string;                  // "All" | "Homes" | "Experiences" | "Services"
  active: boolean;
}

interface PriceMarker {
  id: string;
  listingId: string;
  price: string;                  // "$310"
  lat: number;
  lng: number;
  selected: boolean;
}

interface CalendarDay {
  date: string;                   // ISO date
  isSelected: boolean;
  isInRange: boolean;
  disabled: boolean;
}

interface NavItem {
  icon: string;
  label: string;                  // "Explore" | "Wishlists" | "Log in"
  active: boolean;
}
```

### UI Component Library

Components are grouped by the page they primarily appear on, plus a shared set reused across pages. All components are custom-built (no third-party UI libraries); props are typed with the interfaces below.

**Page → Screen mapping:**

| Page | Route | Corresponds to |
|------|-------|-----------------|
| Home | `/` | Screen 1 — Home / Explore |
| Catalog | `/catalog` | Screen 4 — Search results (Map + filters) |
| Room Detail | `/room/[id]` | Screen 2 — Listing detail, and Screen 3 — Dates & Location (rendered within the room page, e.g. as a tab/section/modal) |

#### Home page components

```typescript
interface SearchBarProps {
  placeholder: string;            // "Start your search"
  icon: React.ComponentType;
  onPress: () => void;
}

interface CategoryTabsProps {
  tabs: CategoryTab[];
  onSelect: (label: string) => void;
}

interface ContinueSearchCarouselProps {
  items: ContinueSearchItem[];
}

interface ContinueSearchCardProps {
  title: string;
  dateRange: string;
  guests: number;
  thumbnail: string;
  onPress: () => void;
}

interface ListingSectionProps {
  title: string;                  // "Based on your Tokyo search"
  onSeeAll: () => void;
  children: React.ReactNode;      // ListingCard[]
}
```

#### Room Detail page components

```typescript
// Screen 2 — Listing detail
interface PhotoGalleryProps {
  images: string[];
  currentIndex: number;
  total: number;
}

interface GalleryTopBarProps {
  onBack: () => void;
  onShare: () => void;
  onFavorite: () => void;
}

interface ImageCounterProps {
  current: number;
  total: number;
}

interface ListingHeaderProps {
  title: string;
  translateIcon?: boolean;
}

interface ListingSubtitleProps {
  text: string;
}

interface ListingSpecsProps {
  guests: number;
  bedrooms: number;
  beds: number;
  bath: string;
}

interface RatingRowProps {
  rating: number;
  reviewCount: number;
}

interface HighlightPillsProps {
  pills: string[];
}

interface HostRowProps {
  avatar: string;
  name: string;
  badge?: string;
  tenure: string;
}

interface AmenityHighlightProps {
  icon: React.ComponentType;
  title: string;
}

// Screen 3 — Dates & Location
interface LocationHeadingProps {
  text: string;
}

interface MapViewProps {
  center: { lat: number; lng: number };
  markers: PriceMarker[];
  homeMarker?: { lat: number; lng: number };
}

interface MapControlsProps {
  onExpand: () => void;
  onToggleLayer: () => void;
}

interface MapMarkerProps {
  type: "home" | "poi";
  coords: { lat: number; lng: number };
}

interface CoachTooltipProps {
  text: string;
  onDismiss: () => void;
}

interface DateRangeSummaryProps {
  title: string;                  // "3 nights in Taitō-ku"
  range: string;                  // "Nov 20, 2026 - Nov 23, 2026"
}

interface CalendarMonthProps {
  month: string;                  // "November 2026"
  onPrev: () => void;
  onNext: () => void;
  weekdayLabels: string[];
  days: CalendarDay[];
  selectedRange: { start: string; end: string } | null;
}
```

#### Catalog page components

```typescript
interface SearchResultsHeaderProps {
  onBack: () => void;
  title: string;                  // "Homes nearby"
  subtitle: string;                // "Week in Aug · 2 guests"
  onFilter: () => void;
}

interface FilterChipsProps {
  chips: string[];                 // ["Free parking", "Allows pets", "Pool", "Air conditioning"]
  onSelect: (chip: string) => void;
}

interface ResultsMapProps {
  markers: PriceMarker[];
  userLocation?: { lat: number; lng: number };
}

interface UserLocationDotProps {
  coords: { lat: number; lng: number };
}

interface ResultsSheetProps {
  snapPoints: number[];
  dragHandle: boolean;
  children: React.ReactNode;
}
```

#### Shared / reusable components (used across multiple pages)

```typescript
interface ListingCardProps {
  image: string;
  title: string;
  price: string;                   // "$183 for 3 nights"
  rating: number;
  badge?: string;                  // "Guest favorite"
  isFavorite: boolean;
  onFavoriteToggle: () => void;
  imageDots?: number;              // carousel-dots variant (used in Catalog sheet)
}

interface FavoriteButtonProps {
  filled: boolean;
  onToggle: () => void;
}

interface BadgeProps {
  label: string;
}

interface PricesTooltipProps {
  label: string;                   // "Prices include all fees"
  icon: React.ComponentType;
}

interface BottomNavBarProps {
  items: NavItem[];                // Explore (active), Wishlists, Log in
}

interface BookingBarProps {
  price: string;                   // "$205" or discounted "$184"
  originalPrice?: string;          // strikethrough price, e.g. "$205"
  subtitle: string;                // "For 3 nights · Nov 20–23"
  note: string;                    // "$0 today · Free cancellation"
  onReserve: () => void;
}

interface ArrowButtonProps {
  onPress: () => void;
  direction?: "left" | "right";
}

interface CarouselDotsProps {
  count: number;
  activeIndex: number;
}
```

**Shared components summary:**
- `BookingBar` — sticky footer on Room Detail screens (supports optional strikethrough original price)
- `ListingCard` — reused on Home and Catalog (variant with/without meta text, badge, carousel dots)
- `FavoriteButton` — heart toggle on all cards and the photo gallery
- `PricesTooltip` — floating "Prices include all fees" pill (Home, Catalog, and within Room Detail's date/location view)
- `BottomNavBar` — Explore / Wishlists / Log in, present on Home and Catalog
- `Badge` / pill primitives — "Guest favorite", highlight pills, filter chips all share a rounded-pill base
- `ArrowButton` / circular icon buttons — section "see all", map controls, gallery controls

### APIs / Interfaces
<!-- Not applicable — no backend. Data will be sourced from hardcoded TypeScript mock data/types defined above. -->

## 9. Dependencies
<!-- Other systems, libraries, or teams this relies on -->

## 10. Timeline & Milestones
<!-- Key dates and deliverables -->

## 11. Risks & Open Questions
<!-- Known risks, unresolved decisions -->

## 12. Success Metrics
<!-- How success will be measured -->

## 13. Appendix
<!-- Additional notes, references, links -->
