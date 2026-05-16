/**
 * Back-to-scene pill, top-left of an item page.
 *
 * Sits just under the global HomeBadge. Links back to the scene that
 * contains the current item, with the scene name spelled out so the
 * action is unambiguous: "Back to Breakfast Table".
 *
 * Renders nothing if the item isn't in any scene (defensive — should
 * never happen for live items, but the hook prevents accidents).
 */

import Link from "next/link";
import { sceneForItem } from "@/lib/scene-lookup";

interface Props {
  itemSlug: string;
}

export function BackToScene({ itemSlug }: Props) {
  const scene = sceneForItem(itemSlug);
  if (!scene) return null;

  return (
    <div className="fixed left-4 top-[4.25rem] z-30 sm:left-6 sm:top-[4.5rem]">
      <Link
        href={`/scene/${scene.slug}`}
        aria-label={`Back to ${scene.name}`}
        className="inline-flex items-center gap-1.5 rounded-full border-[2px] border-navy/70 bg-offwhite px-3 py-1 font-body text-xs font-semibold text-navy shadow-[0_4px_12px_-6px_rgba(42,59,77,0.45)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/20 sm:text-sm"
      >
        <span aria-hidden>←</span>
        <span>Back to {scene.name}</span>
      </Link>
    </div>
  );
}
