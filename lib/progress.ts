/**
 * Per-scene progress calculations.
 *
 * Counts how many of a scene's *live* hotspots the user has collected.
 * Coming-soon slots are ignored — denominator is just the live items
 * authored in the scene so far.
 */

import { getScene } from "@/content/scenes";

export interface SceneProgress {
  /** Total live items in the scene. */
  total: number;
  /** How many of those the user has dropped into their cabinet. */
  collected: number;
}

export function sceneProgress(
  sceneSlug: string,
  collectedSlugs: readonly string[],
): SceneProgress {
  const scene = getScene(sceneSlug);
  if (!scene) return { total: 0, collected: 0 };

  const liveSlugs = scene.hotspots
    .filter((h) => h.kind === "live")
    .map((h) => h.itemSlug);

  const collectedSet = new Set(collectedSlugs);
  const collected = liveSlugs.reduce(
    (n, slug) => (collectedSet.has(slug) ? n + 1 : n),
    0,
  );

  return { total: liveSlugs.length, collected };
}
