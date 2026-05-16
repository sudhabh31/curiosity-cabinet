/**
 * Reverse lookup: given an item slug, find the scene that contains it.
 *
 * Used by the item page to render a context-aware 'Back to Breakfast
 * Table' pill. If an item ever appears in multiple scenes, we return
 * the first match in registry order — fine for v1 where each item
 * lives in exactly one scene.
 */

import { scenes } from "@/content/scenes";
import type { Scene } from "@/content/types";

export function sceneForItem(itemSlug: string): Scene | undefined {
  return scenes.find((scene) =>
    scene.hotspots.some((h) => h.kind === "live" && h.itemSlug === itemSlug),
  );
}
