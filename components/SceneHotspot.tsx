/**
 * SceneHotspot — a positioned, animated item button on a scene.
 *
 * Two flavours via the `kind` prop:
 *   - live: links to /item/<slug>, shows the item's hero SVG inside a
 *           tinted ring; wiggles gently with a per-item delay; lifts +
 *           glows on hover; shows a small ✓ badge if collected.
 *   - coming-soon: greyed out, non-clickable, tiny "soon" label.
 *
 * Cosmetic knobs:
 *   --hotspot-scale  set inline from scene data
 *   wiggle range & duration  below in MOTION
 */

"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Item, PaletteRole } from "@/content/types";
import { accent } from "@/lib/accent";
import { useCabinet } from "@/lib/cabinet";
import { cx } from "@/lib/cx";
import { getHeroIllustration } from "./illustrations";

const WIGGLE_RANGE = 2.2; // degrees
const WIGGLE_DURATION = 5.2; // seconds (one full cycle)

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
     CSS calc on the container width so we scale with the stage. */
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
  const a = accent(item.accent as PaletteRole);

  return (
    <Link
      href={`/item/${item.slug}`}
      aria-label={`${item.name} — explore`}
      className={cx(
        "group relative block aspect-square w-full rounded-full border-[2.5px] border-navy",
        "shadow-[0_8px_22px_-14px_rgba(42,59,77,0.7)]",
        "transition-transform duration-200 ease-out",
        "hover:-translate-y-1 hover:shadow-[0_14px_28px_-14px_rgba(42,59,77,0.85)]",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/25",
        a.tintBg,
      )}
    >
      {/* Soft inner halo on hover */}
      <span
        className={cx(
          "pointer-events-none absolute -inset-1 rounded-full opacity-0 transition-opacity duration-200",
          "group-hover:opacity-70 group-focus-visible:opacity-70",
          a.tintBg,
        )}
        aria-hidden
      />

      {/* Illustration */}
      <span className="absolute inset-[14%] flex items-center justify-center">
        {getHeroIllustration(item.slug) ?? (
          <span className={cx("h-full w-full rounded-full", a.solidBg)} />
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

      {/* Name label under the hotspot */}
      <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-offwhite/90 px-2 py-0.5 font-body text-xs font-semibold text-navy opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
        {item.name}
      </span>
    </Link>
  );
}

function ComingSoonHotspot({ name }: { name: string }) {
  return (
    <div
      className="relative block aspect-square w-full rounded-full border-[2px] border-dashed border-warm-gray/70 bg-cream/70"
      aria-label={`${name} — coming soon`}
    >
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="font-body text-[10px] font-semibold uppercase tracking-[0.14em] text-warm-gray">
          soon
        </span>
      </span>
      <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap font-body text-xs font-medium text-warm-gray/80">
        {name}
      </span>
    </div>
  );
}
