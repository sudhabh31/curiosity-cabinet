/**
 * Placeholder illustration.
 *
 * Stands in until the real SVG arrives at /public/illustrations/<slug>/...
 * Draws a chunky rounded shape using the item's accent colour, with the
 * item name as a soft label. Respects the locked palette and stroke rule
 * (2.5px navy, rounded ends) so a "placeholder" page still looks
 * intentional — not broken.
 *
 * Replace mechanically: set heroIllustration on the item, the page
 * components will prefer the real asset over this fallback.
 */

import { accent } from "@/lib/accent";
import { cx } from "@/lib/cx";
import type { PaletteRole } from "@/content/types";

interface Props {
  /** Item name; shown as a soft label. */
  label: string;
  /** Accent role; drives the fill colour. */
  role: PaletteRole;
  /** Square size — px on screen, vector below the hood. */
  size?: number;
  className?: string;
}

const fillByRole: Record<PaletteRole, string> = {
  terracotta: "#D97757",
  mustard: "#E8B04B",
  sage: "#8AA678",
  "dusty-blue": "#6B8CAE",
  "soft-pink": "#E8B4B8",
  "warm-gray": "#9C8E7E",
};

export function PlaceholderIllustration({
  label,
  role,
  size = 224,
  className,
}: Props) {
  const fill = fillByRole[role];
  const accentClasses = accent(role);
  return (
    <div
      className={cx(
        "relative flex items-center justify-center",
        accentClasses.tintBg,
        "rounded-[var(--cc-card-radius)]",
        className,
      )}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        width="68%"
        height="68%"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Chunky shape — slightly imperfect for the hand-drawn feel.
            Stroke: navy 2.5px, rounded ends per the brand rule. */}
        <path
          d="M50 6 C72 6 92 22 92 50 C92 76 74 94 50 94 C26 94 8 76 8 50 C8 24 28 6 50 6 Z"
          fill={fill}
          stroke="#2A3B4D"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* A small inner highlight, also outlined — keeps the flat-but-friendly look. */}
        <circle
          cx="36"
          cy="38"
          r="9"
          fill="#FFFCF5"
          stroke="#2A3B4D"
          strokeWidth="2"
        />
      </svg>
      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 font-display text-xs font-medium uppercase tracking-[0.18em] text-navy/70">
        {label}
      </span>
    </div>
  );
}
