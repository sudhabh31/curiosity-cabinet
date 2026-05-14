/**
 * History — section 4.
 *
 * Exactly three short paragraphs, by the content-model contract.
 */

import type { Item } from "@/content/types";
import { cx } from "@/lib/cx";
import { SectionHeading } from "./SectionHeading";

interface Props {
  item: Item;
  className?: string;
}

export function HistorySection({ item, className }: Props) {
  return (
    <section className={cx(className)}>
      <SectionHeading eyebrow="The story" title="A brief history" />
      <div className="space-y-4 font-body text-base leading-relaxed text-charcoal sm:text-lg">
        {item.history.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </section>
  );
}
