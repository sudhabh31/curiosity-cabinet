/**
 * Where you'll find it — section 5.
 *
 * Compact grid of places this item shows up in daily life. Each cell
 * shows a shared use-icon (matched from the label via getUseIcon) plus
 * the label below it.
 *
 * To author a custom icon for a specific cell, set `use.illustration`
 * to a public asset path; otherwise the registry picks an icon by
 * keyword match. Unmatched labels fall back to a generic apple.
 */

import Image from "next/image";
import type { Item } from "@/content/types";
import { accent } from "@/lib/accent";
import { cx } from "@/lib/cx";
import { SectionHeading } from "./SectionHeading";
import { getUseIcon } from "./illustrations/uses";

interface Props {
  item: Item;
  className?: string;
}

export function UsesGrid({ item, className }: Props) {
  const a = accent(item.accent);
  return (
    <section className={cx(className)}>
      <SectionHeading
        eyebrow="Where you'll find it"
        title="In everyday life"
      />
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {item.uses.map((use, idx) => {
          const Icon = getUseIcon(use.label);
          return (
            <li
              key={idx}
              className={cx(
                "flex flex-col items-center gap-3 rounded-[var(--cc-card-radius)] border bg-offwhite p-4 text-center",
                a.border,
              )}
            >
              <div className="flex h-16 w-16 items-center justify-center">
                {use.illustration ? (
                  <Image
                    src={use.illustration}
                    alt=""
                    width={72}
                    height={72}
                    className="h-16 w-16"
                  />
                ) : (
                  <Icon size={64} />
                )}
              </div>
              <span className="font-body text-sm font-medium text-navy">
                {use.label}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
