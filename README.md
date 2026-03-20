# WWII Technology — Virtual Museum (Next.js)

A single-page virtual museum built from `wwII_research_outline_v2.txt`, with MLA citations for each source.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this folder to GitHub (or use Vercel CLI).
2. In [Vercel](https://vercel.com), import the repository.
3. Framework preset: **Next.js**. Root directory: this project folder. Build command: `next build`, output: default.

Or with CLI:

```bash
npx vercel
```

## Tour flow

1. **`/`** — Entrance lobby (start here).
2. **`/visit/atrium`** — Orientation + radar theme.
3. **`/visit/hall/[slug]`** — Five halls: `guns`, `tanks`, `aircraft`, `atomic`, `medicine` (each with a Wikimedia hero image + Sketchfab embed).
4. **`/visit/works-cited`** — Alphabetical MLA list.

Use the bottom rail on each stop for **Back** / **Continue**; the gold bar at the top tracks scroll depth.

## Project structure

- `data/exhibits.ts` — Exhibit copy and MLA strings.
- `data/tour.ts` — Tour order, hero image URLs, and Sketchfab IDs.
- `app/visit/*` — One page per stop + `visit.css` for tour UI.
- `components/visit/*` — Scroll reveals, hero parallax, Sketchfab iframe, chrome.
- `app/globals.css` — Base typography and placard styles.
