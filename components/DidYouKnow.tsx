/**
 * Did you know? — section 6.
 *
 * One surprise fact, separate from the main flow.
 */

import type { Item } from "@/content/types";
import { accent } from "@/lib/accent";
import { cx } from "@/lib/cx";

interface Props {
  item: Item;
  className?: string;
}

export function DidYouKnow({ item, className }: Props) {
  const a = accent(item.accent);
  return (
    <aside
      className={cx(
        "relative overflow-hidden rounded-[var(--cc-card-radius)] border bg-offwhite p-6 sm:p-8",
        a.border,
        className,
      )}
    >
      {/* Decorative dot — keeps the surprise feel without a real illustration. */}
      <span
        className={cx(
          "absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-30",
          a.solidBg,
        )}
        aria-hidden="true"
      />
      <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-warm-gray">
        Did you know?
      </p>
      <p className="mt-3 font-display text-xl leading-snug text-navy sm:text-2xl">
        {item.didYouKnow.fact}
      </p>
    </aside>
  );
}
