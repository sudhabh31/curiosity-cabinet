/**
 * Your Curiosity Cabinet — the personal collection page.
 *
 * Shows every authored item: collected items in full colour, the rest
 * as faded silhouettes (still tappable — each goes to the item page).
 * Header shows a quiet "N of M collected" line; no streaks, no levels.
 */

"use client";

import { useMemo } from "react";
import { items } from "@/content/items";
import { useCabinet } from "@/lib/cabinet";
import { CabinetShelf } from "@/components/CabinetShelf";

export default function CabinetPage() {
  const { slugs } = useCabinet();

  /* Sort: collected first (in collection order), then everything else
     in its registry order. */
  const sorted = useMemo(() => {
    const collectedSet = new Set(slugs);
    const collected = items.filter((i) => collectedSet.has(i.slug));
    const rest = items.filter((i) => !collectedSet.has(i.slug));
    return [...collected, ...rest];
  }, [slugs]);

  const total = items.length;
  const collectedCount = slugs.length;

  return (
    <main className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-24 pt-20 sm:px-8 sm:pt-24">
      <header className="mb-10 text-center sm:mb-12">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-warm-gray">
          Your collection
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Curiosity Cabinet
        </h1>
        <p className="mt-4 font-body text-base text-charcoal sm:text-lg">
          {collectedCount === 0
            ? "Nothing collected yet. Tap a silhouette to start exploring."
            : `${collectedCount} of ${total} collected`}
        </p>
      </header>

      <CabinetShelf items={sorted} collectedSlugs={slugs} />

      {collectedCount > 0 && (
        <p className="mt-6 text-center font-body text-xs text-warm-gray">
          Long-press a collected item to remove it.
        </p>
      )}
    </main>
  );
}
