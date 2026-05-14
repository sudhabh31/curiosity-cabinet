/**
 * Banana — hero + step illustrations.
 */

import type { ComponentType } from "react";
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

export function BananaBunchHero(props: SvgProps) {
  return (
    <Frame {...props} title="Bunch of bananas">
      {/* Ground shadow */}
      <ellipse cx="50" cy="92" rx="30" ry="3" fill={NAVY} opacity="0.12" stroke="none" />
      {/* Bunch stem */}
      <path d="M52 18 Q60 12 64 16" strokeWidth="3" />
      <rect x="38" y="14" width="20" height="8" rx="2" fill={SAGE} />
      {/* Banana 1 (back) */}
      <path d="M40 22 Q22 38 26 70 Q36 78 50 70 Q44 50 50 28 Z" fill={MUSTARD} />
      {/* Banana 2 (middle) */}
      <path d="M48 22 Q42 50 54 80 Q66 78 70 72 Q60 50 64 26 Z" fill={MUSTARD} />
      {/* Banana 3 (front) */}
      <path d="M56 22 Q70 38 78 70 Q72 80 60 76 Q58 50 60 28 Z" fill={MUSTARD} />
      {/* Tip shadows */}
      <path d="M26 70 Q34 72 36 76" strokeWidth="2" opacity="0.5" />
      <path d="M54 80 Q60 80 62 76" strokeWidth="2" opacity="0.5" />
      <path d="M78 70 Q74 76 70 78" strokeWidth="2" opacity="0.5" />
    </Frame>
  );
}

function BananaPlant(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Trunk */}
      <rect x="46" y="36" width="8" height="58" rx="3" fill={SAGE} />
      {/* Leaves */}
      <path d="M50 36 Q14 28 10 60 Q20 56 50 50 Z" fill={SAGE} />
      <path d="M50 36 Q86 28 90 60 Q80 56 50 50 Z" fill={SAGE} />
      <path d="M50 24 Q20 12 18 36 Q34 28 50 30 Z" fill={SAGE} />
      <path d="M50 24 Q80 12 82 36 Q66 28 50 30 Z" fill={SAGE} />
      {/* Veins */}
      <path d="M50 50 L14 56" strokeWidth="1.5" opacity="0.45" />
      <path d="M50 50 L86 56" strokeWidth="1.5" opacity="0.45" />
      <path d="M50 30 L20 32" strokeWidth="1.5" opacity="0.45" />
      <path d="M50 30 L80 32" strokeWidth="1.5" opacity="0.45" />
    </Frame>
  );
}

function BananaFlower(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Stem */}
      <path d="M50 20 L50 50" strokeWidth="3" stroke={SAGE} />
      {/* Petal layers - purple-pink */}
      <ellipse cx="50" cy="58" rx="22" ry="14" fill={SOFT_PINK} />
      <ellipse cx="50" cy="68" rx="16" ry="10" fill={TERRACOTTA} />
      <ellipse cx="50" cy="76" rx="10" ry="6" fill={TERRACOTTA} />
      {/* Tiny green bananas peeking */}
      <path d="M30 50 Q28 56 32 60" strokeWidth="2.5" stroke={SAGE} />
      <path d="M70 50 Q72 56 68 60" strokeWidth="2.5" stroke={SAGE} />
      <path d="M40 46 Q40 52 44 54" strokeWidth="2.5" stroke={SAGE} />
      <path d="M60 46 Q60 52 56 54" strokeWidth="2.5" stroke={SAGE} />
    </Frame>
  );
}

function GreenBunch(props: SvgProps) {
  return (
    <Frame {...props}>
      <rect x="40" y="16" width="20" height="6" rx="2" fill={NAVY} />
      <path d="M42 22 Q22 36 26 70 Q36 78 50 70 Q44 48 50 26 Z" fill={SAGE} />
      <path d="M50 22 Q44 50 56 80 Q66 78 70 72 Q60 48 64 28 Z" fill={SAGE} />
      <path d="M58 22 Q72 36 78 70 Q72 80 60 76 Q58 48 60 26 Z" fill={SAGE} />
      {/* Knife (just-harvested clue) */}
      <path d="M14 84 L26 72" strokeWidth="3" />
      <rect x="10" y="82" width="10" height="6" rx="2" fill={WARM_GRAY} />
    </Frame>
  );
}

function CargoShip(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Sea */}
      <path d="M6 70 Q20 64 34 70 Q50 76 66 70 Q80 64 94 70 L94 86 L6 86 Z" fill={DUSTY_BLUE} />
      {/* Hull */}
      <path d="M16 50 L84 50 L78 70 L22 70 Z" fill={WARM_GRAY} />
      {/* Containers */}
      <rect x="26" y="32" width="14" height="18" rx="2" fill={TERRACOTTA} />
      <rect x="42" y="32" width="14" height="18" rx="2" fill={MUSTARD} />
      <rect x="58" y="32" width="14" height="18" rx="2" fill={SAGE} />
      <rect x="34" y="22" width="14" height="10" rx="2" fill={MUSTARD} />
      <rect x="50" y="22" width="14" height="10" rx="2" fill={TERRACOTTA} />
      {/* Wave highlights */}
      <path d="M10 76 Q22 72 34 76" strokeWidth="1.5" opacity="0.5" />
      <path d="M58 80 Q70 76 82 80" strokeWidth="1.5" opacity="0.5" />
    </Frame>
  );
}

function RipeningRoom(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Room walls */}
      <rect x="10" y="14" width="80" height="74" rx="4" fill={CREAM} />
      {/* Shelving */}
      <path d="M16 38 L84 38" strokeWidth="2" />
      <path d="M16 62 L84 62" strokeWidth="2" />
      {/* Bananas on shelves */}
      <path d="M22 30 Q22 36 30 36 Q38 36 38 30" fill={MUSTARD} />
      <path d="M44 30 Q44 36 52 36 Q60 36 60 30" fill={SAGE} />
      <path d="M64 30 Q64 36 72 36 Q80 36 80 30" fill={MUSTARD} />
      <path d="M22 54 Q22 60 30 60 Q38 60 38 54" fill={MUSTARD} />
      <path d="M44 54 Q44 60 52 60 Q60 60 60 54" fill={MUSTARD} />
      <path d="M64 54 Q64 60 72 60 Q80 60 80 54" fill={SAGE} />
      {/* Door */}
      <rect x="42" y="68" width="16" height="20" rx="2" fill={WARM_GRAY} />
      <circle cx="54" cy="78" r="1.5" fill={NAVY} />
    </Frame>
  );
}

function FruitBowl(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Bowl */}
      <path d="M14 50 Q14 76 50 78 Q86 76 86 50 Z" fill={TERRACOTTA} />
      <ellipse cx="50" cy="50" rx="36" ry="6" fill={OFFWHITE} stroke="none" />
      <ellipse cx="50" cy="50" rx="36" ry="6" />
      {/* Banana on top */}
      <path d="M22 44 Q40 38 64 50 Q58 54 36 50 Z" fill={MUSTARD} />
      {/* Apple peeking */}
      <circle cx="68" cy="44" r="8" fill={TERRACOTTA} />
      <path d="M68 36 L68 32" strokeWidth="2" stroke={SAGE} />
    </Frame>
  );
}

const stepIllustrations: Record<string, ComponentType<SvgProps>> = {
  plant: BananaPlant,
  flower: BananaFlower,
  "harvested-green": GreenBunch,
  shipped: CargoShip,
  ripened: RipeningRoom,
  yours: FruitBowl,
};

export function BananaStepIllustration({
  stepId,
  ...props
}: SvgProps & { stepId: string }) {
  const Component = stepIllustrations[stepId];
  if (!Component) return null;
  return <Component {...props} />;
}
