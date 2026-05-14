/**
 * Shared section heading.
 *
 * Every item-page section uses this so the typographic rhythm stays
 * consistent. To retune section spacing globally, edit --cc-section-gap
 * in styles/tokens.css — not here.
 */

import { cx } from "@/lib/cx";

interface Props {
  eyebrow?: string;
  title: string;
  className?: string;
}

export function SectionHeading({ eyebrow, title, className }: Props) {
  return (
    <header className={cx("mb-6", className)}>
      {eyebrow && (
        <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-warm-gray">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-1 font-display text-2xl font-semibold text-navy sm:text-3xl">
        {title}
      </h2>
    </header>
  );
}
