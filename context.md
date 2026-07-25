# Interface Context

## Product Vision
Nomad Nests is a mobile-first vacation rental interface inspired by Airbnb workflows. It helps travelers discover short-term stays and experiences quickly, compare options visually, and decide with confidence.

## Primary User
- Mobile-first traveler browsing listings at 375px width first
- Wants fast scanning (photos, rating, price) and clear booking controls
- Navigates between home discovery, catalog filtering, and detail booking views

## Routes and Interface Structure
- `/` Home: quick search, category tabs, recommended listings, and bottom navigation
- `/catalog` Catalog: broad listing results with search + sort controls
- `/rooms/[id]` Room Detail: photo gallery, listing header, host info, amenities, and booking card

## Vision Prompt Specs (375px Screenshots)

### Home Page Spec
- `TopNavBar`: `{ searchValue: string; onSearchChange: (value: string) => void }`
- `CategoryTabs`: `{ active: string; categories: CategoryItem[]; onSelect: (category: string) => void }`
- `ListingCard`: `{ id, image, title, subtitle, price, rating, badge? }`
- `BottomNavBar`: `{ active: "home" | "catalog" | "account" }`

Layout relationship:
- Vertical stack with top nav first, then horizontal category scroller, then listing grid.
- Listing grid is 1 column on mobile and expands to multiple columns on desktop.

### Catalog Page Spec
- `ResultsHeader`: `{ count: number }`
- `SortSelect`: `{ value: "asc" | "desc"; onChange: (...) => void }`
- `ListingCard` (reused from Home)
- `MapPlaceholder`: no props

Layout relationship:
- Header and controls on top, results list paired with map section.
- On mobile, map sits below cards; on desktop, map is shown to the right.

### Room Detail Page Spec
- `PhotoGallery`: `{ images: string[]; index: number; onChange: (index: number) => void }`
- `ListingHeader`: `{ title: string; location: string; rating: number; reviewCount: number }`
- `HostInfo`: `{ avatar: string; name: string; tenure: string; badge?: string }`
- `AmenitiesList`: `{ items: Array<{ icon: string; title: string }> }`
- `BookingCard`: `{ pricePerNight: number; guests: number; setGuests: (...) => void }`

Layout relationship:
- Gallery at top, followed by metadata, host row, amenities grid, and booking card CTA.
- Back navigation to catalog is always visible above content.

## Components and Responsibilities
- `ListingCard`: shared card used by Home and Catalog for consistency
- `SearchBar`: text filtering input
- `CategoryTabs`: active category selector
- `SortSelect`: listing sort order selector
- `PhotoGallery`: image navigation with local state index
- `ListingHeader`: title, subtitle, rating meta
- `HostInfo`: host profile summary
- `AmenitiesList`: amenity grid
- `BookingCard` + `GuestCounter`: reservation summary and guest count changes
- `BottomNavBar`: route navigation with active state

## Vision-to-Spec Traceability
The UI component breakdown and route behavior come from the screenshot-to-spec process described in [docs/specs.md](docs/specs.md). This implementation preserves the required three-page architecture, typed mock data, reusable listing card pattern, and mobile-first interaction design.
