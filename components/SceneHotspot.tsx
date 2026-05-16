/**
 * SceneHotspot — a positioned, animated item button on a scene.
 *
 * Two flavours via the `kind` prop:
 *   - live: links to /item/<slug>; navy-outlined offwhite circle with
 *           the item's illustration inside; gently wiggles; lifts on
 *           hover; shows a sage ✓ if collected.
 *   - coming-soon: dashed warm-gray circle, non-clickable.
 *
 * Visual contract: offwhite (not tinted by accent) so items pop against
 * the wood backdrop. The illustration carries the colour, the container
 * stays neutral.
 *
 * Cosmetic knobs:
 *   WIGGLE_RANGE / WIGGLE_DURATION  motion config
 *   --hotspot-scale                 set inline from scene data
 */

"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Item } from "@/content/types";
import { useCabinet } from "@/lib/cabinet";
import { cx } from "@/lib/cx";
import { getHeroIllustration } from "./illustrations";

const WIGGLE_RANGE = 1.6; // degrees — gentler than v1
const WIGGLE_DURATION = 6; // seconds (one full cycle)

interface LiveProps {
  kind: "live";
  item: Item;
  x: number;
  y: number;
  scale: number;
  wiggleDelay: number;
}

interface ComingSoonProps {
  kind: "coming-soon";
  name: string;
  x: number;
  y: number;
  scale: number;
  wiggleDelay: number;
}

type Props = LiveProps | ComingSoonProps;

export function SceneHotspot(props: Props) {
  const { x, y, scale, wiggleDelay } = props;

  /* Position via percent (matches the data model) and size via
     percent of the stage so hotspots scale with the container. */
  const positionStyle: React.CSSProperties = {
    left: `${x}%`,
    top: `${y}%`,
    width: `${scale}%`,
  };

  return (
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={positionStyle}
      animate={{ rotate: [-WIGGLE_RANGE, WIGGLE_RANGE, -WIGGLE_RANGE] }}
      transition={{
        duration: WIGGLE_DURATION,
        repeat: Infinity,
        ease: "easeInOut",
        delay: wiggleDelay,
      }}
    >
      {props.kind === "live" ? (
        <LiveHotspot item={props.item} />
      ) : (
        <ComingSoonHotspot name={props.name} />
      )}
    </motion.div>
  );
}

function LiveHotspot({ item }: { item: Item }) {
  const { slugs } = useCabinet();
  const collected = slugs.includes(item.slug);

  return (
    <Link
      href={`/item/${item.slug}`}
      aria-label={`${item.name} — explore`}
      className={cx(
        "group relative block aspect-square w-full rounded-full border-[2.5px] border-navy bg-offwhite",
        "shadow-[0_10px_22px_-14px_rgba(42,59,77,0.7)]",
        "transition-transform duration-200 ease-out",
        "hover:-translate-y-1 hover:shadow-[0_16px_30px_-14px_rgba(42,59,77,0.85)]",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/25",
      )}
    >
      {/* Illustration */}
      <span className="absolute inset-[16%] flex items-center justify-center">
        {getHeroIllustration(item.slug) ?? (
          <span className="h-full w-full rounded-full bg-warm-gray opacity-30" />
        )}
      </span>

      {/* Collected check */}
      {collected && (
        <span
          className="absolute -right-1 -top-1 inline-flex h-7 w-7 items-center justify-center rounded-full border-[2px] border-navy bg-sage text-offwhite"
          aria-hidden
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4">
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

      {/* Always-on name label under the hotspot. Wrapped in an offwhite
          pill with a navy border so it stays legible against the wood
          backdrop, where plain navy text reads as low contrast. */}
      <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-navy/30 bg-offwhite px-2.5 py-0.5 font-display text-xs font-semibold tracking-[0.02em] text-navy shadow-sm sm:text-sm">
        {item.name}
      </span>
    </Link>
  );
}

function ComingSoonHotspot({ name }: { name: string }) {
  return (
    <div
      className="relative block aspect-square w-full rounded-full border-[2px] border-dashed border-navy/40 bg-offwhite/60"
      aria-label={`${name} — coming soon`}
    >
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="font-body text-[10px] font-semibold uppercase tracking-[0.14em] text-warm-gray">
          soon
        </span>
      </span>
      <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-navy/20 bg-offwhite/85 px-2.5 py-0.5 font-display text-xs font-semibold tracking-[0.02em] text-warm-gray shadow-sm sm:text-sm">
        {name}
      </span>
    </div>
  );
}
