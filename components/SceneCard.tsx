/**
 * SceneCard — the mobile-only tile rendered by SceneStage on small
 * screens, where the absolute-positioned still-life layout doesn't
 * fit.
 *
 * Each card is a navy-outlined tile with a wood-coloured panel up
 * top holding the item's illustration, and the item name on a
 * cream band below. Reuses the same item hero SVG used everywhere
 * else, so the visual identity is unchanged \u2014 only the layout
 * differs from the desktop scene.
 *
 * Collected items get a small sage check in the top-right corner.
 * Coming-soon cards use a dashed border and muted name text.
 */

"use client";

import Link from "next/link";
import type { Item } from "@/content/types";
import { useCabinet } from "@/lib/cabinet";
import { cx } from "@/lib/cx";
import { getHeroIllustration } from "./illustrations";

interface LiveProps {
  kind: "live";
  item: Item;
}

interface ComingSoonProps {
  kind: "coming-soon";
  name: string;
}

type Props = LiveProps | ComingSoonProps;

/* Soft wood-coloured panel matches the desktop backdrop so the
 * "this is the breakfast table" metaphor survives on mobile. */
const WOOD_BG = "#C9B79C";

export function SceneCard(props: Props) {
  if (props.kind === "live") {
    return <LiveCard item={props.item} />;
  }
  return <ComingSoonCard name={props.name} />;
}

function LiveCard({ item }: { item: Item }) {
  const { slugs } = useCabinet();
  const collected = slugs.includes(item.slug);

  return (
    <Link
      href={`/item/${item.slug}`}
      aria-label={`${item.name} \u2014 explore`}
      className={cx(
        "group relative flex h-full flex-col overflow-hidden rounded-[var(--cc-card-radius)] border-[2.5px] border-navy bg-offwhite",
        "shadow-[0_8px_18px_-12px_rgba(42,59,77,0.55)]",
        "transition-transform duration-200 ease-out hover:-translate-y-0.5",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/25",
      )}
    >
      {/* Wood-coloured panel with the illustration */}
      <div
        className="relative flex aspect-square w-full items-center justify-center"
        style={{ backgroundColor: WOOD_BG }}
      >
        <div className="h-[68%] w-[68%]">
          {getHeroIllustration(item.slug) ?? (
            <div className="h-full w-full rounded-full bg-warm-gray/40" />
          )}
        </div>

        {/* Collected check */}
        {collected && (
          <span
            className="absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full border-[2px] border-navy bg-sage text-offwhite"
            aria-hidden
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
              <path
                d="M5 12 L10 17 L19 7"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </span>
        )}
      </div>

      {/* Name band */}
      <div className="border-t-[2.5px] border-navy bg-offwhite px-3 py-2 text-center">
        <span className="font-display text-sm font-semibold text-navy">
          {item.name}
        </span>
      </div>
    </Link>
  );
}

function ComingSoonCard({ name }: { name: string }) {
  return (
    <div
      className="relative flex h-full flex-col overflow-hidden rounded-[var(--cc-card-radius)] border-[2px] border-dashed border-navy/40 bg-offwhite/60"
      aria-label={`${name} \u2014 coming soon`}
    >
      <div
        className="relative flex aspect-square w-full items-center justify-center opacity-60"
        style={{ backgroundColor: WOOD_BG }}
      >
        <span className="font-body text-[10px] font-semibold uppercase tracking-[0.14em] text-warm-gray">
          soon
        </span>
      </div>
      <div className="border-t border-dashed border-navy/40 bg-offwhite/70 px-3 py-2 text-center">
        <span className="font-display text-sm font-semibold text-warm-gray">
          {name}
        </span>
      </div>
    </div>
  );
}
