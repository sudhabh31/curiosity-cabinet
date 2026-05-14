/**
 * Breakfast Table — the launch scene.
 *
 * 12 hotspots arranged in a still-life composition. 5 link to real items
 * (chocolate, milk, bread, honey, banana). The other 7 are "coming soon"
 * placeholders so the scene looks intentionally curated, not half-empty.
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
    { kind: "coming-soon", name: "Tea", x: 64, y: 26, scale: 12, wiggleDelay: 0.8 },
    { kind: "coming-soon", name: "Yogurt", x: 85, y: 30, scale: 12, wiggleDelay: 1.2 },

    // ---- Middle row ----
    { kind: "live", itemSlug: "bread", x: 13, y: 54, scale: 15, wiggleDelay: 1.6 },
    { kind: "coming-soon", name: "Butter", x: 32, y: 56, scale: 12, wiggleDelay: 2.0 },
    { kind: "coming-soon", name: "Eggs", x: 52, y: 51, scale: 13, wiggleDelay: 2.4 },
    { kind: "coming-soon", name: "Jam", x: 71, y: 55, scale: 12, wiggleDelay: 2.8 },
    { kind: "coming-soon", name: "Juice", x: 89, y: 56, scale: 12, wiggleDelay: 3.2 },

    // ---- Front row (near side) ----
    { kind: "live", itemSlug: "banana", x: 22, y: 82, scale: 14, wiggleDelay: 3.6 },
    { kind: "coming-soon", name: "Cereal", x: 50, y: 82, scale: 14, wiggleDelay: 4.0 },
    { kind: "live", itemSlug: "chocolate", x: 76, y: 80, scale: 14, wiggleDelay: 4.4 },
  ],
};
