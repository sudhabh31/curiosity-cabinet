/**
 * Breakfast Table — atmospheric backdrop.
 *
 * Just the wood: the entire scene IS the table. Items go directly onto
 * the wood with no placemat, napkin, or saucer. Cleaner read; items
 * pop without decoration competing for attention.
 *
 * Designed to stretch to any aspect ratio (preserveAspectRatio="none"
 * is fine because the elements are organic enough to tolerate it).
 */

import { NAVY } from "./_shared";

interface Props {
  className?: string;
}

export function BreakfastTableBackdrop({ className }: Props) {
  return (
    <svg
      viewBox="0 0 100 60"
      preserveAspectRatio="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Table surface — warm wood */}
      <rect x="0" y="0" width="100" height="60" fill="#C9B79C" />

      {/* Wood-grain streaks — sparse, low-opacity */}
      <g stroke={NAVY} strokeOpacity="0.07" strokeWidth="0.15" fill="none">
        <path d="M0 6 Q40 5 100 7" />
        <path d="M0 14 Q50 13 100 15" />
        <path d="M0 22 Q30 21 100 23" />
        <path d="M0 30 Q60 29 100 31" />
        <path d="M0 38 Q40 37 100 39" />
        <path d="M0 46 Q70 45 100 47" />
        <path d="M0 54 Q40 53 100 55" />
      </g>

      {/* Sparse wood knots */}
      <ellipse cx="88" cy="12" rx="2.5" ry="1.2" fill={NAVY} opacity="0.1" />
      <ellipse cx="14" cy="48" rx="3" ry="1.4" fill={NAVY} opacity="0.08" />
      <ellipse cx="62" cy="6" rx="2" ry="1" fill={NAVY} opacity="0.08" />

      {/* Subtle vignette toward the edges so the eye centres */}
      <radialGradient id="vignette" cx="50%" cy="50%" r="65%">
        <stop offset="55%" stopColor={NAVY} stopOpacity="0" />
        <stop offset="100%" stopColor={NAVY} stopOpacity="0.14" />
      </radialGradient>
      <rect x="0" y="0" width="100" height="60" fill="url(#vignette)" />
    </svg>
  );
}
