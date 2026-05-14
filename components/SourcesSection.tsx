/**
 * Sources — "Where this comes from" links at the bottom of an item.
 *
 * Quiet, parent-facing section: small type, simple list, external-link
 * indicator on each link. Skipped entirely if the item has no sources.
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
      <SectionHeading
        eyebrow="For the curious adult"
        title="Where this comes from"
      />
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
      <p className="mt-4 font-body text-xs text-warm-gray">
        Links open in a new tab. We&rsquo;re not affiliated with any of these &mdash;
        they&rsquo;re just where we&rsquo;d send a curious grown-up.
      </p>
    </section>
  );
}
