/**
 * Bread — hero + step illustrations.
 */

import type { ComponentType } from "react";
import {
  Frame,
  CREAM,
  MUSTARD,
  NAVY,
  OFFWHITE,
  SAGE,
  TERRACOTTA,
  WARM_GRAY,
  type SvgProps,
} from "./_shared";

export function BreadLoafHero(props: SvgProps) {
  return (
    <Frame {...props} title="Loaf of bread">
      {/* Cutting board */}
      <rect x="6" y="68" width="88" height="18" rx="3" fill={WARM_GRAY} />
      <path d="M6 78 L94 78" strokeWidth="1.5" opacity="0.4" />
      {/* Loaf body */}
      <path d="M14 64 Q14 30 50 30 Q86 30 86 64 Z" fill={MUSTARD} />
      {/* Slashes on top */}
      <path d="M28 40 Q34 56 28 64" stroke={NAVY} strokeWidth="2" opacity="0.6" />
      <path d="M50 36 Q56 56 50 64" stroke={NAVY} strokeWidth="2" opacity="0.6" />
      <path d="M72 40 Q66 56 72 64" stroke={NAVY} strokeWidth="2" opacity="0.6" />
      {/* End slice — soft crumb */}
      <ellipse cx="20" cy="64" rx="6" ry="6" fill={CREAM} stroke="none" />
    </Frame>
  );
}

function WheatStalk(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Stem */}
      <path d="M50 90 L50 38" stroke={SAGE} strokeWidth="2.5" />
      {/* Wheat grains */}
      {[0, 1, 2, 3, 4].map((i) => {
        const y = 36 - i * 6;
        return (
          <g key={i}>
            <ellipse cx={44} cy={y} rx="4" ry="3" fill={MUSTARD} transform={`rotate(-30 44 ${y})`} />
            <ellipse cx={56} cy={y} rx="4" ry="3" fill={MUSTARD} transform={`rotate(30 56 ${y})`} />
          </g>
        );
      })}
      <ellipse cx="50" cy="8" rx="4" ry="4" fill={MUSTARD} />
      {/* Leaf */}
      <path d="M50 60 Q66 56 70 44" stroke={SAGE} strokeWidth="3" />
    </Frame>
  );
}

function Harvest(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Sky band */}
      <rect x="6" y="14" width="88" height="32" rx="4" fill={CREAM} stroke="none" />
      {/* Field */}
      <path d="M6 46 Q50 38 94 46 L94 86 L6 86 Z" fill={MUSTARD} />
      {/* Combine harvester body */}
      <rect x="24" y="50" width="40" height="22" rx="3" fill={TERRACOTTA} />
      <rect x="34" y="44" width="18" height="10" rx="2" fill={OFFWHITE} />
      {/* Reel */}
      <circle cx="72" cy="62" r="10" fill={OFFWHITE} />
      <path d="M72 52 L72 72 M62 62 L82 62" strokeWidth="1.5" />
      {/* Wheels */}
      <circle cx="32" cy="76" r="6" fill={NAVY} />
      <circle cx="56" cy="76" r="6" fill={NAVY} />
    </Frame>
  );
}

function FlourSack(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Sack */}
      <path d="M28 30 Q30 24 38 22 L62 22 Q70 24 72 30 L78 82 Q78 88 70 88 L30 88 Q22 88 22 82 Z" fill={CREAM} />
      {/* Tied top */}
      <path d="M40 22 Q50 18 60 22" strokeWidth="2.5" />
      {/* Label */}
      <rect x="34" y="48" width="32" height="22" rx="3" fill={OFFWHITE} />
      <path d="M40 56 L60 56" strokeWidth="2" />
      <path d="M40 62 L56 62" strokeWidth="1.5" opacity="0.6" />
      {/* Flour puff */}
      <circle cx="20" cy="38" r="6" fill={OFFWHITE} opacity="0.85" />
      <circle cx="14" cy="32" r="4" fill={OFFWHITE} opacity="0.85" />
    </Frame>
  );
}

function MixingBowl(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Bowl */}
      <path d="M14 50 Q14 80 50 82 Q86 80 86 50 Z" fill={WARM_GRAY} />
      <ellipse cx="50" cy="50" rx="36" ry="6" fill={CREAM} />
      <ellipse cx="50" cy="50" rx="36" ry="6" />
      {/* Dough ball */}
      <ellipse cx="50" cy="52" rx="22" ry="6" fill={OFFWHITE} stroke="none" />
      {/* Whisk */}
      <path d="M50 50 L74 18" strokeWidth="2.5" />
      <path d="M70 14 Q78 16 78 22" strokeWidth="2.5" />
      <path d="M68 18 Q76 20 78 26" strokeWidth="2" />
    </Frame>
  );
}

function DoughRising(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Bowl */}
      <path d="M16 56 Q16 80 50 82 Q84 80 84 56 Z" fill={WARM_GRAY} />
      <ellipse cx="50" cy="56" rx="34" ry="5" fill={CREAM} />
      <ellipse cx="50" cy="56" rx="34" ry="5" />
      {/* Risen dough — bulges above the rim */}
      <path d="M22 56 Q22 30 50 28 Q78 30 78 56" fill={OFFWHITE} />
      {/* Tea towel folds */}
      <path d="M22 56 L26 50" strokeWidth="1.5" opacity="0.5" />
      <path d="M78 56 L74 50" strokeWidth="1.5" opacity="0.5" />
    </Frame>
  );
}

function OvenBake(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Oven body */}
      <rect x="14" y="18" width="72" height="68" rx="6" fill={WARM_GRAY} />
      {/* Window */}
      <rect x="22" y="28" width="56" height="40" rx="4" fill={CREAM} />
      {/* Loaf inside */}
      <path d="M30 56 Q30 38 50 38 Q70 38 70 56 Z" fill={MUSTARD} />
      {/* Slash */}
      <path d="M44 42 Q48 50 44 56" stroke={NAVY} strokeWidth="1.6" opacity="0.6" />
      {/* Handle */}
      <rect x="22" y="74" width="56" height="4" rx="2" fill={NAVY} />
      {/* Knobs */}
      <circle cx="80" cy="80" r="3" fill={NAVY} />
      <circle cx="20" cy="80" r="3" fill={NAVY} />
    </Frame>
  );
}

const stepIllustrations: Record<string, ComponentType<SvgProps>> = {
  wheat: WheatStalk,
  harvested: Harvest,
  milled: FlourSack,
  mixed: MixingBowl,
  risen: DoughRising,
  baked: OvenBake,
};

export function BreadStepIllustration({
  stepId,
  ...props
}: SvgProps & { stepId: string }) {
  const Component = stepIllustrations[stepId];
  if (!Component) return null;
  return <Component {...props} />;
}
