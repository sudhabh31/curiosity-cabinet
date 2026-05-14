/**
 * Yogurt — hero + step illustrations.
 */

import type { ComponentType } from "react";
import {
  Frame,
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

export function YogurtPotHero(props: SvgProps) {
  return (
    <Frame {...props} title="Pot of yogurt">
      {/* Pot body — tapered cup */}
      <path d="M30 36 L70 36 L74 86 L26 86 Z" fill={OFFWHITE} />
      {/* Lid */}
      <ellipse cx="50" cy="36" rx="22" ry="4" fill={SOFT_PINK} />
      <rect x="28" y="34" width="44" height="4" fill={SOFT_PINK} />
      <path d="M28 34 L72 34" strokeWidth="2" />
      {/* Pull tab */}
      <path d="M50 30 L54 22 L46 22 Z" fill={SOFT_PINK} />
      {/* Strawberry on top (decorative) */}
      <path d="M50 18 Q44 14 38 20 Q40 30 50 30" fill={TERRACOTTA} />
      <path d="M44 14 L44 8 M48 14 L48 8" stroke={SAGE} strokeWidth="2" />
      {/* Label */}
      <rect x="32" y="56" width="36" height="18" rx="2" fill={SOFT_PINK} opacity="0.35" stroke="none" />
      <rect x="32" y="56" width="36" height="18" rx="2" />
      <path d="M38 64 L62 64" strokeWidth="2" opacity="0.7" />
      <path d="M40 70 L60 70" strokeWidth="1.5" opacity="0.55" />
    </Frame>
  );
}

function MilkWarming(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Pot */}
      <path d="M20 42 L80 42 L74 86 L26 86 Z" fill={WARM_GRAY} />
      {/* Handle */}
      <path d="M80 50 Q92 52 92 60" />
      {/* Milk inside */}
      <ellipse cx="50" cy="42" rx="30" ry="4" fill={OFFWHITE} />
      {/* Heat waves */}
      <path d="M34 36 Q38 28 34 20" stroke={TERRACOTTA} opacity="0.65" strokeWidth="2.5" />
      <path d="M50 32 Q54 24 50 16" stroke={TERRACOTTA} opacity="0.65" strokeWidth="2.5" />
      <path d="M66 36 Q70 28 66 20" stroke={TERRACOTTA} opacity="0.65" strokeWidth="2.5" />
      {/* Thermometer */}
      <rect x="74" y="28" width="4" height="22" rx="2" fill={OFFWHITE} />
      <circle cx="76" cy="52" r="3.5" fill={TERRACOTTA} />
    </Frame>
  );
}

function Cooling(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Bowl */}
      <path d="M22 42 L78 42 L72 86 L28 86 Z" fill={WARM_GRAY} />
      <ellipse cx="50" cy="42" rx="28" ry="4" fill={OFFWHITE} />
      {/* Thermometer leaning */}
      <rect x="68" y="30" width="4" height="22" rx="2" fill={OFFWHITE} transform="rotate(15 70 41)" />
      <circle cx="73" cy="56" r="3.5" fill={DUSTY_BLUE} />
      {/* Snowflake decoration suggesting cooling */}
      <g stroke={DUSTY_BLUE} strokeWidth="2" opacity="0.7">
        <path d="M18 22 L18 32" />
        <path d="M14 27 L22 27" />
        <path d="M15 24 L21 30" />
        <path d="M21 24 L15 30" />
      </g>
    </Frame>
  );
}

function CultureAdded(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Bowl with milk */}
      <path d="M22 50 L78 50 L72 84 L28 84 Z" fill={WARM_GRAY} />
      <ellipse cx="50" cy="50" rx="28" ry="4" fill={OFFWHITE} />
      <ellipse cx="50" cy="50" rx="28" ry="4" />
      {/* Spoon */}
      <ellipse cx="50" cy="28" rx="10" ry="6" fill={WARM_GRAY} />
      <ellipse cx="50" cy="28" rx="8" ry="5" fill={OFFWHITE} />
      <rect x="48" y="14" width="4" height="14" rx="1.5" fill={WARM_GRAY} />
      {/* Tiny dots showing culture */}
      <circle cx="44" cy="40" r="0.8" fill={NAVY} />
      <circle cx="48" cy="42" r="0.8" fill={NAVY} />
      <circle cx="52" cy="40" r="0.8" fill={NAVY} />
      <circle cx="56" cy="42" r="0.8" fill={NAVY} />
      <circle cx="46" cy="44" r="0.6" fill={NAVY} />
      <circle cx="54" cy="44" r="0.6" fill={NAVY} />
    </Frame>
  );
}

function Fermenting(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Pot wrapped in cloth */}
      <path d="M22 36 L78 36 L72 86 L28 86 Z" fill={SOFT_PINK} />
      {/* Cloth wrap pattern (checkered) */}
      <path d="M22 50 L78 50" strokeWidth="1.5" opacity="0.55" />
      <path d="M22 64 L78 64" strokeWidth="1.5" opacity="0.55" />
      <path d="M50 36 L50 86" strokeWidth="1.5" opacity="0.55" />
      {/* Tied top knot */}
      <path d="M40 34 Q50 26 60 34" strokeWidth="3" />
      <path d="M44 28 L40 18" strokeWidth="2.5" />
      <path d="M56 28 L60 18" strokeWidth="2.5" />
      {/* Clock or warmth indication */}
      <circle cx="22" cy="22" r="6" fill={MUSTARD} />
      <path d="M22 18 L22 22 L26 22" strokeWidth="1.6" />
    </Frame>
  );
}

function Chilling(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Fridge */}
      <rect x="22" y="14" width="56" height="76" rx="4" fill={OFFWHITE} />
      {/* Door split */}
      <path d="M22 42 L78 42" strokeWidth="2" />
      {/* Handles */}
      <rect x="36" y="22" width="4" height="14" rx="1" fill={NAVY} />
      <rect x="36" y="52" width="4" height="28" rx="1" fill={NAVY} />
      {/* Snowflake on door */}
      <g stroke={DUSTY_BLUE} strokeWidth="2">
        <path d="M62 60 L62 76" />
        <path d="M54 68 L70 68" />
        <path d="M56 62 L68 74" />
        <path d="M68 62 L56 74" />
      </g>
      {/* Yogurt pot on top */}
      <rect x="44" y="6" width="14" height="10" rx="1" fill={SOFT_PINK} />
    </Frame>
  );
}

function Packaged(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Three yogurt pots side by side */}
      {[20, 50, 80].map((x, i) => (
        <g key={i}>
          <path d={`M${x - 12} 38 L${x + 12} 38 L${x + 10} 84 L${x - 10} 84 Z`} fill={OFFWHITE} />
          <ellipse cx={x} cy="38" rx="12" ry="3" fill={SOFT_PINK} />
          <rect x={x - 12} y="36" width="24" height="4" fill={SOFT_PINK} />
          <rect x={x - 8} y="56" width="16" height="14" rx="1.5" fill={SOFT_PINK} opacity="0.4" stroke="none" />
        </g>
      ))}
      {/* Tray base */}
      <rect x="4" y="84" width="92" height="4" rx="2" fill={WARM_GRAY} />
    </Frame>
  );
}

const stepIllustrations: Record<string, ComponentType<SvgProps>> = {
  "milk-warmed": MilkWarming,
  cooled: Cooling,
  "culture-added": CultureAdded,
  fermented: Fermenting,
  chilled: Chilling,
  packaged: Packaged,
};

export function YogurtStepIllustration({
  stepId,
  ...props
}: SvgProps & { stepId: string }) {
  const Component = stepIllustrations[stepId];
  if (!Component) return null;
  return <Component {...props} />;
}
