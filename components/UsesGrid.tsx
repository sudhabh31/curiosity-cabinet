/**
 * Where you'll find it — section 5.
 *
 * Compact grid of places this item shows up in daily life.
 */

import Image from "next/image";
import type { Item } from "@/content/types";
import { accent } from "@/lib/accent";
import { cx } from "@/lib/cx";
import { SectionHeading } from "./SectionHeading";
import { PlaceholderIllustration } from "./PlaceholderIllustration";

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
        {item.uses.map((use, idx) => (
          <li
            key={idx}
            className={cx(
              "flex flex-col items-center gap-3 rounded-[var(--cc-card-radius)] border bg-offwhite p-4 text-center",
              a.border,
            )}
          >
            {use.illustration ? (
              <Image
                src={use.illustration}
                alt=""
                width={72}
                height={72}
                className="h-16 w-16"
              />
            ) : (
              <PlaceholderIllustration
                label=""
                role={item.accent}
                size={72}
                className="h-16 w-16"
              />
            )}
            <span className="font-body text-sm font-medium text-navy">
              {use.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
