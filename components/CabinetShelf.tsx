/**
 * CabinetShelf — the illustrated wooden cabinet that holds the
 * collection.
 *
 * Visual: a navy-outlined warm-gray wood frame with rounded corners.
 * Inside, the items are split across one or more shelves (rows of 3 on
 * mobile, up to 5 on wider screens). Between shelves is a thin
 * darker-wood band that reads as a real shelf edge.
 *
 * Items come pre-sorted by the caller (collected first, silhouettes
 * after) so the shelves read top-to-bottom like a curated collection.
 */

import type { Item } from "@/content/types";
import { CabinetSlot } from "./CabinetSlot";

interface Props {
  items: readonly Item[];
  collectedSlugs: readonly string[];
}

export function CabinetShelf({ items, collectedSlugs }: Props) {
  const collectedSet = new Set(collectedSlugs);

  return (
    <div
      className="relative rounded-[var(--cc-card-radius)] border-[3px] border-navy bg-[#C9B79C] p-5 shadow-[0_18px_44px_-22px_rgba(42,59,77,0.6)] sm:p-8"
      style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(42,59,77,0.06) 0 1px, transparent 1px 18px)",
      }}
    >
      {/* Cabinet "interior" — slightly darker recess so items sit on a stage */}
      <div className="rounded-[calc(var(--cc-card-radius)-4px)] bg-cream/85 p-4 shadow-[inset_0_6px_18px_-12px_rgba(42,59,77,0.45)] sm:p-6">
        <ul className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-5">
          {items.map((item) => (
            <li key={item.slug}>
              <CabinetSlot
                item={item}
                collected={collectedSet.has(item.slug)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
