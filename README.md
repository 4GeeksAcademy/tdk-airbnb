# tdk-airbnb

A mobile-first Airbnb-style clone built with Next.js 16, TypeScript, Tailwind CSS, and the App Router.

## Routes
- `/` Home
- `/catalog` Catalog
- `/rooms/[id]` Room detail
- `/room/[id]` Compatibility redirect to `/rooms/[id]`

## Tech
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

## Run
```bash
npm install
npm run dev
```

## Setup Evidence
- Scaffold target: Next.js 16 + TypeScript + Tailwind CSS + App Router.
- Build verification: `npm run build` passes locally.
- Type safety verification: `npm run typecheck` is configured and available.
- Folder organization:
	- `app/` for routes
	- `components/` for reusable UI
	- `types/` for TypeScript interfaces
- Styling approach: Tailwind utility classes only (no component UI libraries).

## Quality Rules Followed
- Components are in `/components`
- Functional `const` components only
- Shared `ListingCard` reused in Home and Catalog
- Mock typed data in `data/listings.ts`
- Mobile-first layout (375px-first classes)