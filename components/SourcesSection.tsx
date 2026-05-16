/**
 * Sources — "Dig deeper" links at the bottom of an item.
 *
 * Simple list of external references. External-link indicator on each
 * link; opens in a new tab. Skipped entirely if the item has no
 * sources.
 */

import type { Item } from "@/content/types";
import { cx } from "@/lib/cx";
import { SectionHeading } from "./SectionHeading";

interface Props {
  item: Item;
  className?: string;
}

export function SourcesSection({ item, className }: Props) {
  if (!item.sources || item.sources.length === 0) return null;
  return (
    <section className={cx(className)}>
      <SectionHeading title="Dig deeper" />
      <ul className="space-y-2.5">
        {item.sources.map((s) => (
          <li key={s.url}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-baseline gap-2 font-body text-sm leading-relaxed text-charcoal underline decoration-warm-gray/40 decoration-1 underline-offset-4 transition-colors hover:decoration-navy"
            >
              <span className="font-medium text-navy group-hover:text-navy">
                {s.title}
              </span>
              {s.note && (
                <span className="text-warm-gray">— {s.note}</span>
              )}
              <svg
                viewBox="0 0 24 24"
                className="inline h-3.5 w-3.5 shrink-0 self-center text-warm-gray transition-colors group-hover:text-navy"
                aria-hidden
              >
                <path
                  d="M7 17 L17 7 M9 7 L17 7 L17 15"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
