/**
 * Item hero panel — section 1 of the 8-section template.
 *
 * Resolution order for the hero illustration:
 *   1. item.heroIllustration  → real /public/illustrations/... asset
 *   2. getHeroIllustration(slug) → hand-authored inline SVG
 *   3. PlaceholderIllustration  → generic chunky shape (last resort)
 *
 * Layout: illustration above the title on mobile, beside on sm+.
 */

import Image from "next/image";
import type { Item } from "@/content/types";
import { PlaceholderIllustration } from "./PlaceholderIllustration";
import { getHeroIllustration } from "./illustrations";
import { accent } from "@/lib/accent";
import { cx } from "@/lib/cx";

interface Props {
  item: Item;
  className?: string;
}

export function ItemHero({ item, className }: Props) {
  const a = accent(item.accent);
  const authored = getHeroIllustration(item.slug, { className: "h-[80%] w-[80%]" });

  return (
    <section
      className={cx(
        "flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:gap-12 sm:text-left",
        className,
      )}
    >
      <div className="shrink-0">
        {item.heroIllustration ? (
          <Image
            src={item.heroIllustration}
            alt={item.name}
            width={288}
            height={288}
            className="h-[var(--cc-hero-size)] w-[var(--cc-hero-size)] sm:h-[var(--cc-hero-size-md)] sm:w-[var(--cc-hero-size-md)]"
            priority
          />
        ) : authored ? (
          <div
            className={cx(
              "relative flex items-center justify-center rounded-[var(--cc-card-radius)] border-[2.5px] border-navy",
              "h-[var(--cc-hero-size)] w-[var(--cc-hero-size)] sm:h-[var(--cc-hero-size-md)] sm:w-[var(--cc-hero-size-md)]",
              a.tintBg,
            )}
          >
            {authored}
          </div>
        ) : (
          <PlaceholderIllustration
            label={item.name}
            role={item.accent}
            size={288}
            className="h-[var(--cc-hero-size)] w-[var(--cc-hero-size)] sm:h-[var(--cc-hero-size-md)] sm:w-[var(--cc-hero-size-md)]"
          />
        )}
      </div>
      <div>
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-warm-gray">
          Curiosity Cabinet
        </p>
        <h1 className="mt-2 font-display text-5xl font-semibold leading-tight text-navy sm:text-6xl">
          {item.name}
        </h1>
        <p className="mt-4 max-w-md font-body text-lg leading-relaxed text-charcoal">
          {item.hook}
        </p>
      </div>
    </section>
  );
}
