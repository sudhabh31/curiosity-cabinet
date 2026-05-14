/**
 * World preview illustrations — small SVGs for the home-page cards.
 *
 * Each is a still-life summary of its scene. Same palette rules and
 * stroke conventions as the per-item illustrations.
 */

import {
  Frame,
  CREAM,
  DUSTY_BLUE,
  MUSTARD,
  NAVY,
  OFFWHITE,
  SAGE,
  SOFT_PINK,
  TERRACOTTA,
  WARM_GRAY,
  type SvgProps,
} from "./_shared";

/** Breakfast Table — small grouped still life. */
export function BreakfastTablePreview(props: SvgProps) {
  return (
    <Frame {...props} title="Breakfast Table">
      {/* Table surface band */}
      <rect x="6" y="62" width="88" height="24" rx="3" fill="#C9B79C" />
      {/* Placemat */}
      <rect x="22" y="58" width="56" height="18" rx="2" fill={CREAM} />

      {/* Milk carton (back-left) */}
      <path d="M22 28 L36 28 L40 34 L40 60 L18 60 L18 34 Z" fill={OFFWHITE} />
      <path d="M22 28 L29 18 L36 28" fill={OFFWHITE} />
      <rect x="20" y="44" width="18" height="8" fill={DUSTY_BLUE} />

      {/* Honey jar (back-right) */}
      <rect x="56" y="36" width="20" height="22" rx="3" fill={MUSTARD} />
      <rect x="54" y="30" width="24" height="8" rx="2" fill={WARM_GRAY} />

      {/* Banana (front-left, on placemat) */}
      <path d="M28 56 Q42 50 56 58 Q50 62 36 62 Z" fill={MUSTARD} />

      {/* Chocolate bar (front-right) */}
      <g transform="rotate(-8 64 64)">
        <rect x="50" y="58" width="28" height="10" rx="2" fill={TERRACOTTA} />
        <path d="M58 58 L58 68 M66 58 L66 68 M74 58 L74 68" strokeWidth="1.5" opacity="0.7" />
      </g>

      {/* Tiny crumb */}
      <circle cx="44" cy="60" r="0.6" fill={NAVY} opacity="0.4" />
    </Frame>
  );
}

/** School Bag — coming-soon hint. */
export function SchoolBagPreview(props: SvgProps) {
  return (
    <Frame {...props} title="School Bag">
      {/* Bag body */}
      <path d="M22 36 Q22 26 36 26 L64 26 Q78 26 78 36 L78 82 Q78 88 70 88 L30 88 Q22 88 22 82 Z" fill={DUSTY_BLUE} />
      {/* Flap */}
      <path d="M22 36 Q22 22 50 22 Q78 22 78 36 L78 52 L22 52 Z" fill={DUSTY_BLUE} />
      {/* Flap edge */}
      <path d="M22 52 L78 52" strokeWidth="2" opacity="0.6" />
      {/* Buckles */}
      <rect x="36" y="48" width="6" height="8" rx="1" fill={MUSTARD} />
      <rect x="58" y="48" width="6" height="8" rx="1" fill={MUSTARD} />
      {/* Front pocket */}
      <rect x="34" y="60" width="32" height="18" rx="3" fill={OFFWHITE} />
      {/* Strap loop top */}
      <path d="M42 20 Q50 14 58 20" strokeWidth="2.5" />
    </Frame>
  );
}

/** Bedroom — coming-soon hint. */
export function BedroomPreview(props: SvgProps) {
  return (
    <Frame {...props} title="Bedroom">
      {/* Floor */}
      <rect x="6" y="76" width="88" height="14" rx="2" fill="#C9B79C" />
      {/* Wall band */}
      <rect x="6" y="14" width="88" height="62" rx="3" fill={CREAM} />
      {/* Window */}
      <rect x="14" y="22" width="22" height="22" rx="2" fill={DUSTY_BLUE} />
      <path d="M25 22 L25 44 M14 33 L36 33" strokeWidth="1.5" opacity="0.7" />
      {/* Bed */}
      <rect x="42" y="58" width="46" height="18" rx="2" fill={SOFT_PINK} />
      {/* Headboard */}
      <rect x="84" y="44" width="6" height="32" rx="2" fill={WARM_GRAY} />
      {/* Pillow */}
      <rect x="48" y="50" width="14" height="10" rx="2" fill={OFFWHITE} />
      {/* Side table */}
      <rect x="14" y="58" width="16" height="18" rx="2" fill={WARM_GRAY} />
      {/* Lamp */}
      <path d="M22 50 L22 58 M18 50 L26 50" strokeWidth="2.5" />
      <circle cx="22" cy="48" r="4" fill={MUSTARD} />
      {/* Plant on side table */}
      <circle cx="22" cy="56" r="3" fill={SAGE} />
    </Frame>
  );
}
