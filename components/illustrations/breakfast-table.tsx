/**
 * Breakfast Table — atmospheric backdrop.
 *
 * Wood-grain table top with a soft placemat in the middle and a folded
 * napkin to the side. No food — the individual item SVGs are placed on
 * top of this backdrop by SceneStage.
 *
 * Designed to stretch to any aspect ratio (preserveAspectRatio="none"
 * is fine because the elements are organic enough to tolerate it).
 */

import { CREAM, MUSTARD, NAVY, OFFWHITE } from "./_shared";

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
        <path d="M0 8 Q40 7 100 9" />
        <path d="M0 18 Q50 17 100 19" />
        <path d="M0 28 Q30 27 100 29" />
        <path d="M0 38 Q60 37 100 39" />
        <path d="M0 48 Q40 47 100 49" />
        <path d="M0 56 Q70 55 100 57" />
      </g>

      {/* Darker wood knot */}
      <ellipse cx="88" cy="14" rx="2.5" ry="1.2" fill={NAVY} opacity="0.1" />
      <ellipse cx="14" cy="46" rx="3" ry="1.4" fill={NAVY} opacity="0.08" />

      {/* Placemat — soft offwhite, navy stitched edge */}
      <g>
        <rect
          x="30"
          y="14"
          width="40"
          height="36"
          rx="3"
          fill={OFFWHITE}
          opacity="0.95"
        />
        <rect
          x="30"
          y="14"
          width="40"
          height="36"
          rx="3"
          fill="none"
          stroke={NAVY}
          strokeOpacity="0.45"
          strokeWidth="0.4"
          strokeDasharray="0.8 0.8"
        />
      </g>

      {/* Folded napkin — terracotta, far right */}
      <g>
        <rect x="80" y="38" width="16" height="14" rx="1.5" fill={MUSTARD} />
        <path
          d="M80 44 L96 44"
          stroke={NAVY}
          strokeOpacity="0.5"
          strokeWidth="0.3"
        />
        <path
          d="M88 38 L88 52"
          stroke={NAVY}
          strokeOpacity="0.35"
          strokeWidth="0.3"
        />
      </g>

      {/* Saucer hint — circle outline, far left */}
      <circle
        cx="10"
        cy="44"
        r="6"
        fill={CREAM}
        opacity="0.85"
      />
      <circle
        cx="10"
        cy="44"
        r="6"
        fill="none"
        stroke={NAVY}
        strokeOpacity="0.4"
        strokeWidth="0.35"
      />
      <circle
        cx="10"
        cy="44"
        r="3"
        fill="none"
        stroke={NAVY}
        strokeOpacity="0.3"
        strokeWidth="0.3"
      />

      {/* Crumb specks */}
      <g fill={NAVY} opacity="0.25">
        <circle cx="38" cy="42" r="0.4" />
        <circle cx="44" cy="36" r="0.3" />
        <circle cx="58" cy="44" r="0.4" />
        <circle cx="62" cy="32" r="0.3" />
      </g>

      {/* Subtle vignette toward the edges so the eye centres */}
      <radialGradient id="vignette" cx="50%" cy="50%" r="65%">
        <stop offset="50%" stopColor={NAVY} stopOpacity="0" />
        <stop offset="100%" stopColor={NAVY} stopOpacity="0.12" />
      </radialGradient>
      <rect x="0" y="0" width="100" height="60" fill="url(#vignette)" />
    </svg>
  );
}
