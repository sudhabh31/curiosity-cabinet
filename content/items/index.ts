/**
 * Item registry.
 *
 * Each item lives in its own file (e.g. content/items/chocolate.ts) and
 * is registered here. Pages read from this registry rather than scanning
 * the filesystem so we get full type-checking and deterministic builds.
 *
 * Items are added in subsequent stories. The registry starts empty.
 */

import type { Item, Slug } from "@/content/types";
import { chocolate } from "./chocolate";
import { milk } from "./milk";
import { bread } from "./bread";
import { honey } from "./honey";
import { banana } from "./banana";

export const items: readonly Item[] = [
  chocolate,
  milk,
  bread,
  honey,
  banana,
] as const;

/** Slug → Item lookup. O(1) at runtime, built once at module load. */
export const itemsBySlug: ReadonlyMap<Slug, Item> = new Map(
  items.map((item) => [item.slug, item]),
);

export function getItem(slug: Slug): Item | undefined {
  return itemsBySlug.get(slug);
}

export function listItemSlugs(): readonly Slug[] {
  return items.map((i) => i.slug);
}
