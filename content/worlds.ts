/**
 * "Worlds" — the home-page index.
 *
 * Each world has a status (live or coming-soon) and references either a
 * Scene slug (when live) or just an evocative name (when not). Kept
 * separate from the Scene registry so we can list teasers for worlds
 * that don't have content yet.
 *
 * Order matters — this drives left-to-right ordering on the shelf.
 */

export type WorldStatus = "live" | "coming-soon";

export interface World {
  /** Display slug; matches scene slug when live. */
  slug: string;
  name: string;
  /** One-line invitation shown under the name. */
  tagline: string;
  status: WorldStatus;
}

export const worlds: readonly World[] = [
  {
    slug: "breakfast-table",
    name: "Breakfast Table",
    tagline: "What's on your plate this morning?",
    status: "live",
  },
  {
    slug: "school-bag",
    name: "School Bag",
    tagline: "Every pencil and book has a story.",
    status: "coming-soon",
  },
  {
    slug: "bedroom",
    name: "Bedroom",
    tagline: "From your pillow to your toothbrush.",
    status: "coming-soon",
  },
] as const;
