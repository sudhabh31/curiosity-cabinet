/**
 * Orange Juice — hero + step illustrations.
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
  TERRACOTTA,
  WARM_GRAY,
  type SvgProps,
} from "./_shared";

export function OrangeJuiceHero(props: SvgProps) {
  return (
    <Frame {...props} title="Glass of orange juice">
      {/* Ground shadow */}
      <ellipse cx="50" cy="92" rx="22" ry="2.5" fill={NAVY} opacity="0.12" stroke="none" />
      {/* Glass */}
      <path d="M32 22 L68 22 L64 86 L36 86 Z" fill={OFFWHITE} opacity="0.5" stroke="none" />
      <path d="M32 22 L68 22 L64 86 L36 86 Z" />
      {/* Juice fill */}
      <path d="M34 30 L66 30 L62 80 L38 80 Z" fill={MUSTARD} />
      <ellipse cx="50" cy="30" rx="16" ry="2.5" fill={TERRACOTTA} opacity="0.65" stroke="none" />
      <ellipse cx="50" cy="30" rx="16" ry="2.5" />
      {/* Slice of orange on rim */}
      <circle cx="68" cy="18" r="10" fill={TERRACOTTA} />
      <circle cx="68" cy="18" r="6" fill={MUSTARD} />
      <path d="M68 8 L68 28 M58 18 L78 18 M60 12 L76 24 M76 12 L60 24" strokeWidth="1.2" opacity="0.55" />
      <path d="M62 18 L68 18 L72 22" strokeWidth="1.5" />
      {/* Straw */}
      <path d="M44 16 L52 80" stroke={SOFT_PINK_REF} strokeWidth="3" />
    </Frame>
  );
}
// Tiny constant alias so the straw uses soft-pink without re-importing
const SOFT_PINK_REF = "#E8B4B8";

function OrangeTrees(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Ground */}
      <path d="M6 80 Q50 76 94 80 L94 90 L6 90 Z" fill={SAGE} opacity="0.45" stroke="none" />
      {/* Trunk */}
      <rect x="46" y="46" width="8" height="36" rx="2" fill={WARM_GRAY} />
      {/* Foliage */}
      <circle cx="50" cy="34" r="22" fill={SAGE} />
      <circle cx="34" cy="40" r="12" fill={SAGE} />
      <circle cx="66" cy="40" r="12" fill={SAGE} />
      {/* Oranges */}
      <circle cx="38" cy="32" r="4" fill={TERRACOTTA} />
      <circle cx="58" cy="26" r="4" fill={TERRACOTTA} />
      <circle cx="68" cy="36" r="4" fill={TERRACOTTA} />
      <circle cx="44" cy="42" r="4" fill={TERRACOTTA} />
      <circle cx="56" cy="42" r="4" fill={TERRACOTTA} />
      <circle cx="32" cy="42" r="3.5" fill={MUSTARD} />
    </Frame>
  );
}

function OrangeRipens(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Branch */}
      <path d="M14 40 Q50 28 86 40" stroke={SAGE} strokeWidth="3" />
      {/* Leaves */}
      <ellipse cx="22" cy="32" rx="8" ry="4" fill={SAGE} transform="rotate(-30 22 32)" />
      <ellipse cx="78" cy="32" rx="8" ry="4" fill={SAGE} transform="rotate(30 78 32)" />
      {/* Green orange */}
      <circle cx="28" cy="58" r="12" fill={SAGE} />
      {/* Half-ripe */}
      <circle cx="50" cy="62" r="13" fill={MUSTARD} />
      {/* Fully ripe */}
      <circle cx="74" cy="58" r="13" fill={TERRACOTTA} />
      {/* Stem connectors */}
      <path d="M28 46 L28 36" strokeWidth="2" stroke={SAGE} />
      <path d="M50 49 L50 39" strokeWidth="2" stroke={SAGE} />
      <path d="M74 45 L74 38" strokeWidth="2" stroke={SAGE} />
    </Frame>
  );
}

function HarvestOranges(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Basket */}
      <path d="M14 50 L86 50 L78 86 L22 86 Z" fill={WARM_GRAY} />
      {/* Oranges piled */}
      <circle cx="32" cy="44" r="9" fill={TERRACOTTA} />
      <circle cx="50" cy="40" r="10" fill={TERRACOTTA} />
      <circle cx="68" cy="44" r="9" fill={TERRACOTTA} />
      <circle cx="40" cy="54" r="9" fill={TERRACOTTA} />
      <circle cx="58" cy="54" r="9" fill={TERRACOTTA} />
      {/* Highlights */}
      <ellipse cx="30" cy="40" rx="2" ry="3" fill={MUSTARD} stroke="none" />
      <ellipse cx="48" cy="36" rx="2" ry="3" fill={MUSTARD} stroke="none" />
      <ellipse cx="66" cy="40" rx="2" ry="3" fill={MUSTARD} stroke="none" />
      {/* Basket weave */}
      <path d="M22 62 L78 62" strokeWidth="1.5" opacity="0.55" />
      <path d="M24 72 L76 72" strokeWidth="1.5" opacity="0.55" />
    </Frame>
  );
}

function WashedSqueezed(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Juicer body */}
      <rect x="20" y="22" width="60" height="40" rx="6" fill={WARM_GRAY} />
      {/* Funnel/dome on top */}
      <path d="M30 22 L70 22 L60 12 L40 12 Z" fill={WARM_GRAY} />
      {/* Orange going in */}
      <circle cx="50" cy="10" r="6" fill={TERRACOTTA} />
      {/* Spout */}
      <rect x="40" y="62" width="20" height="6" rx="2" fill={NAVY} />
      {/* Juice pouring */}
      <rect x="46" y="68" width="8" height="14" fill={MUSTARD} />
      {/* Glass below */}
      <path d="M38 82 L62 82 L60 92 L40 92 Z" fill={OFFWHITE} opacity="0.5" stroke="none" />
      <path d="M38 82 L62 82 L60 92 L40 92 Z" />
      <rect x="40" y="86" width="20" height="6" fill={MUSTARD} stroke="none" />
    </Frame>
  );
}

function PasteurisedJuice(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Heating chamber */}
      <rect x="14" y="34" width="72" height="32" rx="4" fill={WARM_GRAY} />
      <rect x="20" y="38" width="60" height="24" rx="3" fill={MUSTARD} />
      {/* Pipes in and out */}
      <rect x="2" y="42" width="14" height="6" rx="2" fill={MUSTARD} />
      <rect x="84" y="50" width="14" height="6" rx="2" fill={MUSTARD} />
      {/* Heat coils */}
      <path d="M26 42 Q34 42 34 46 Q34 50 26 50 Q34 50 34 54 Q34 58 26 58" stroke={TERRACOTTA} strokeWidth="2" opacity="0.85" />
      <path d="M66 42 Q74 42 74 46 Q74 50 66 50 Q74 50 74 54 Q74 58 66 58" stroke={TERRACOTTA} strokeWidth="2" opacity="0.85" />
      {/* Temp gauge */}
      <circle cx="50" cy="20" r="6" fill={OFFWHITE} />
      <path d="M50 16 L50 20 L53 22" strokeWidth="1.6" />
      {/* Steam */}
      <path d="M34 28 Q38 22 34 14" stroke={DUSTY_BLUE} opacity="0.55" strokeWidth="2" />
      <path d="M66 28 Q62 22 66 14" stroke={DUSTY_BLUE} opacity="0.55" strokeWidth="2" />
    </Frame>
  );
}

function BottledShipped(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Truck (just back) */}
      <rect x="10" y="34" width="60" height="36" rx="3" fill={OFFWHITE} />
      <rect x="22" y="40" width="36" height="24" rx="2" fill={CREAM} />
      {/* Bottles inside */}
      {[28, 36, 44, 52].map((x, i) => (
        <g key={i}>
          <rect x={x - 2} y="42" width="4" height="14" rx="1" fill={MUSTARD} />
          <circle cx={x} cy="42" r="2" fill={NAVY} />
        </g>
      ))}
      {/* Wheels */}
      <circle cx="22" cy="74" r="6" fill={NAVY} />
      <circle cx="58" cy="74" r="6" fill={NAVY} />
      {/* Cab */}
      <rect x="68" y="44" width="22" height="26" rx="3" fill={TERRACOTTA} />
      <rect x="72" y="48" width="14" height="10" rx="2" fill={OFFWHITE} />
      <circle cx="80" cy="74" r="6" fill={NAVY} />
    </Frame>
  );
}

const stepIllustrations: Record<string, ComponentType<SvgProps>> = {
  "trees-grow": OrangeTrees,
  "fruit-ripens": OrangeRipens,
  harvested: HarvestOranges,
  "washed-squeezed": WashedSqueezed,
  pasteurised: PasteurisedJuice,
  "bottled-shipped": BottledShipped,
};

export function OrangeJuiceStepIllustration({
  stepId,
  ...props
}: SvgProps & { stepId: string }) {
  const Component = stepIllustrations[stepId];
  if (!Component) return null;
  return <Component {...props} />;
}
