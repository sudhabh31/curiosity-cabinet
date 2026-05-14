/**
 * Item registry.
 *
 * Each item lives in its own file (e.g. content/items/chocolate.ts) and
 * is registered here. Pages read from this registry rather than scanning
 * the filesystem so we get full type-checking and deterministic builds.
 */

import type { Item, Slug } from "@/content/types";
import { chocolate } from "./chocolate";
import { milk } from "./milk";
import { bread } from "./bread";
import { honey } from "./honey";
import { banana } from "./banana";
import { tea } from "./tea";
import { yogurt } from "./yogurt";
import { butter } from "./butter";
import { eggs } from "./eggs";
import { jam } from "./jam";
import { orangeJuice } from "./orange-juice";
import { cereal } from "./cereal";

export const items: readonly Item[] = [
  chocolate,
  milk,
  bread,
  honey,
  banana,
  tea,
  yogurt,
  butter,
  eggs,
  jam,
  orangeJuice,
  cereal,
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
