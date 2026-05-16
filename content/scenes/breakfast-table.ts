/**
 * Breakfast Table — the launch scene.
 *
 * 12 live hotspots on a 5:3 wood-grain stage. Layout is a deliberate
 * 4-3-5 composition:
 *
 *   ┌─────────────────────────────────────────────────────────┐
 *   │   milk    tea    honey   yogurt                         │
 *   │      bread       eggs        jam                        │
 *   │  banana  oj   cereal  butter  chocolate                 │
 *   └─────────────────────────────────────────────────────────┘
 *
 * Back row (y≈22%): 4 vessel-shaped items — drinks and a jar
 * Middle row (y≈49%): 3 anchor items the rest cluster around
 * Front row (y≈78%): 5 smaller items closest to the viewer
 *
 * Coordinates are percent of the scene container, measured from the
 * top-left. Sizes (scale) are percent of the container width.
 */

import type { Scene } from "@/content/types";

export const breakfastTable: Scene = {
  slug: "breakfast-table",
  name: "Breakfast Table",
  tagline: "Tap something on the table to see where it comes from.",
  quizUnlocksAt: 5,
  hotspots: [
    // ---- Back row (4 items) ----
    { kind: "live", itemSlug: "milk", x: 16, y: 22, scale: 11, wiggleDelay: 0 },
    { kind: "live", itemSlug: "tea", x: 40, y: 22, scale: 11, wiggleDelay: 0.4 },
    { kind: "live", itemSlug: "honey", x: 62, y: 22, scale: 11, wiggleDelay: 0.8 },
    { kind: "live", itemSlug: "yogurt", x: 84, y: 22, scale: 11, wiggleDelay: 1.2 },

    // ---- Middle row (3 anchors) ----
    { kind: "live", itemSlug: "bread", x: 24, y: 50, scale: 12, wiggleDelay: 1.6 },
    { kind: "live", itemSlug: "eggs", x: 50, y: 50, scale: 12, wiggleDelay: 2.0 },
    { kind: "live", itemSlug: "jam", x: 76, y: 50, scale: 12, wiggleDelay: 2.4 },

    // ---- Front row (5 items) ----
    { kind: "live", itemSlug: "banana", x: 13, y: 78, scale: 10.5, wiggleDelay: 2.8 },
    { kind: "live", itemSlug: "orange-juice", x: 32, y: 78, scale: 10.5, wiggleDelay: 3.2 },
    { kind: "live", itemSlug: "cereal", x: 51, y: 78, scale: 11, wiggleDelay: 3.6 },
    { kind: "live", itemSlug: "butter", x: 70, y: 78, scale: 10.5, wiggleDelay: 4.0 },
    { kind: "live", itemSlug: "chocolate", x: 88, y: 78, scale: 10.5, wiggleDelay: 4.4 },
  ],
};
