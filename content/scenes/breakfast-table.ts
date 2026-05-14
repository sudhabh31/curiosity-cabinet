/**
 * Breakfast Table — the launch scene.
 *
 * 12 live hotspots, arranged in a still-life composition across three
 * rows (back / middle / front). All slots are filled now that the
 * launch content is complete.
 *
 * Coordinates are percent of the scene container, measured from the
 * top-left. Tune by eye in the browser.
 */

import type { Scene } from "@/content/types";

export const breakfastTable: Scene = {
  slug: "breakfast-table",
  name: "Breakfast Table",
  tagline: "Tap something on the table to see where it comes from.",
  quizUnlocksAt: 5,
  hotspots: [
    // ---- Back row (far side of the table) ----
    { kind: "live", itemSlug: "milk", x: 18, y: 26, scale: 14, wiggleDelay: 0 },
    { kind: "live", itemSlug: "honey", x: 42, y: 22, scale: 13, wiggleDelay: 0.4 },
    { kind: "live", itemSlug: "tea", x: 64, y: 26, scale: 13, wiggleDelay: 0.8 },
    { kind: "live", itemSlug: "yogurt", x: 85, y: 30, scale: 12, wiggleDelay: 1.2 },

    // ---- Middle row ----
    { kind: "live", itemSlug: "bread", x: 13, y: 54, scale: 15, wiggleDelay: 1.6 },
    { kind: "live", itemSlug: "butter", x: 32, y: 56, scale: 12, wiggleDelay: 2.0 },
    { kind: "live", itemSlug: "eggs", x: 52, y: 51, scale: 13, wiggleDelay: 2.4 },
    { kind: "live", itemSlug: "jam", x: 71, y: 55, scale: 12, wiggleDelay: 2.8 },
    { kind: "live", itemSlug: "orange-juice", x: 89, y: 56, scale: 12, wiggleDelay: 3.2 },

    // ---- Front row (near side) ----
    { kind: "live", itemSlug: "banana", x: 22, y: 82, scale: 14, wiggleDelay: 3.6 },
    { kind: "live", itemSlug: "cereal", x: 50, y: 82, scale: 14, wiggleDelay: 4.0 },
    { kind: "live", itemSlug: "chocolate", x: 76, y: 80, scale: 14, wiggleDelay: 4.4 },
  ],
};
