/**
 * "This took how long?!" stat card — section 3.
 *
 * One wow-number, one sentence of context. Designed to feel like a
 * pulled-quote — bigger type, accent-tinted background.
 */

import type { Item } from "@/content/types";
import { accent } from "@/lib/accent";
import { cx } from "@/lib/cx";

interface Props {
  item: Item;
  className?: string;
}

export function StatCard({ item, className }: Props) {
  const a = accent(item.accent);
  return (
    <section
      className={cx(
        "rounded-[var(--cc-card-radius)] border p-6 sm:p-8",
        a.tintBg,
        a.border,
        className,
      )}
    >
      <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-warm-gray">
        This took how long?!
      </p>
      <p
        className={cx(
          "mt-2 font-display text-3xl font-semibold leading-tight sm:text-4xl",
          a.ink,
        )}
      >
        {item.stat.headline}
      </p>
      <p className="mt-3 font-body text-base leading-relaxed text-charcoal sm:text-lg">
        {item.stat.body}
      </p>
    </section>
  );
}
