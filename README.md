# Curiosity Cabinet

A parent-and-child web app for exploring where everyday things come from.
Each scene is a still life of tappable objects; each object opens an
illustrated 8-section story (origin journey, surprise stat, brief
history, everyday uses, did-you-know). The Curiosity Cabinet remembers
what you've explored.

## Stack

- Next.js 16 (App Router, Turbopack) + React 19
- TypeScript
- Tailwind CSS v4 (palette + tokens in `app/globals.css` and `styles/tokens.css`)
- `motion` for animations (journey popups, cabinet drop arc, hotspot wiggle)
- Hand-authored inline SVG illustrations — no external assets in v1
- Persistence: `localStorage` (no accounts, no backend)

## Run locally

```bash
nvm use       # or any Node 20+ / 24
npm install
npm run dev
```

Open <http://localhost:3000>.

## Routes

| Route | What it is |
|---|---|
| `/` | Home — hero + shelf of worlds |
| `/scene/breakfast-table` | Tappable still life of breakfast items |
| `/item/[slug]` | Full 8-section story for one item |
| `/cabinet` | Personal collection (collected items + silhouettes) |

Live items in v1: `chocolate`, `milk`, `bread`, `honey`, `banana`.

## Build & lint

```bash
npm run build   # production build, prerenders every scene + item page
npm run lint
```

## Adding content

### A new item

1. Create `content/items/<slug>.ts` (clone the chocolate file).
2. Add a per-step SVG module at `components/illustrations/<slug>.tsx`
   (clone any existing one; export a hero component + a step-id-keyed
   registry).
3. Register the item in `content/items/index.ts`.
4. Register the illustrations in
   `components/illustrations/index.tsx` (two switch cases:
   `getHeroIllustration` and `getStepIllustration`).
5. Place it in a scene by adding a `live` hotspot in
   `content/scenes/<scene>.ts`.

### A new scene

1. Create `content/scenes/<slug>.ts` with the hotspot layout.
2. Author a backdrop component in
   `components/illustrations/<scene-slug>.tsx`.
3. Register both: scene in `content/scenes/index.ts`, backdrop in the
   switch in `app/scene/[slug]/page.tsx`.
4. Add the world to `content/worlds.ts` so it shows on the home shelf.

## Visual tuning

Most cosmetic knobs live in **one place** per concern:

| Want to change | Edit |
|---|---|
| Palette | `app/globals.css` `@theme` block |
| Layout spacing, hero size, card radius | `styles/tokens.css` (`--cc-*` vars) |
| Per-item accent | `accent:` field on the item |
| Accent → utility class mapping | `lib/accent.ts` |
| Display / body font | `app/layout.tsx` |
| Journey path shape | `LEFT_X`/`RIGHT_X` in `components/JourneyPath.tsx` |
| Scene-stage aspect ratio | `aspectRatio` in `components/SceneStage.tsx` |
| Hotspot wiggle | `WIGGLE_RANGE` / `WIGGLE_DURATION` in `components/SceneHotspot.tsx` |
| Cabinet-drop arc | `arcKeyframes` in `components/CabinetDrop.tsx` |

## Deploy

The app is a standard Next.js project and deploys to
[Vercel](https://vercel.com) with no configuration.

1. Push this repo to GitHub.
2. Go to <https://vercel.com/new> and import the repo.
3. Accept the defaults — Vercel detects Next.js automatically.
4. Hit **Deploy**. The first build takes a couple of minutes; subsequent
   pushes to `main` redeploy automatically.

No environment variables or secrets are needed for v1.

## What's intentionally not here

- **Accounts / login** — single-device localStorage by design.
- **Quiz mode** — deferred from v1 to keep the experience exploratory.
- **Daily streaks, leaderboards, levels** — collection over competition.
- **Faces on objects** — locked stylistic rule.

## Project tracker

Stories, bugs, and enhancements are tracked at
[ychiyyotracker.vercel.app](https://ychiyyotracker.vercel.app)
under the **Curiosity Cabinet** epic.
