/**
 * Shared scaffolding for per-item SVG illustrations.
 *
 * Every illustration is a 100x100 viewBox with a navy stroked group as
 * its root, so individual SVG files stay focused on shape data.
 * Palette is exported as constants — these match the Tailwind theme
 * tokens, so if you retune the palette in app/globals.css's @theme,
 * update these too (or move them into a generated module someday).
 */

import type { ReactNode } from "react";

export const NAVY = "#2A3B4D";
export const OFFWHITE = "#FFFCF5";
export const CREAM = "#FAF3E7";
export const TERRACOTTA = "#D97757";
export const MUSTARD = "#E8B04B";
export const SAGE = "#8AA678";
export const DUSTY_BLUE = "#6B8CAE";
export const SOFT_PINK = "#E8B4B8";
export const WARM_GRAY = "#9C8E7E";

export interface SvgProps {
  size?: number;
  className?: string;
  title?: string;
}

/** Common SVG wrapper — 100x100 viewBox, navy-stroked root group.
 *
 * Applies the global #handdrawn filter (defined in components/SvgFilters
 * and mounted by the root layout) so strokes get a subtle non-uniform
 * displacement — closer to a child's-book page than perfectly
 * geometric vector. Pass `crisp` to opt an individual illustration out
 * if the jitter eats too much fine detail.
 */
export function Frame({
  size,
  className,
  title,
  crisp,
  children,
}: SvgProps & { crisp?: boolean; children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size ?? "100%"}
      height={size ?? "100%"}
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke={NAVY}
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
        filter={crisp ? undefined : "url(#handdrawn)"}
      >
        {children}
      </g>
    </svg>
  );
}
