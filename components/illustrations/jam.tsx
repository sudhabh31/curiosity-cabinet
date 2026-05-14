/**
 * Jam — hero + step illustrations.
 */

import type { ComponentType } from "react";
import {
  Frame,
  CREAM,
  MUSTARD,
  NAVY,
  OFFWHITE,
  SAGE,
  SOFT_PINK,
  TERRACOTTA,
  WARM_GRAY,
  type SvgProps,
} from "./_shared";

export function JamJarHero(props: SvgProps) {
  return (
    <Frame {...props} title="Jam jar">
      {/* Ground shadow */}
      <ellipse cx="50" cy="92" rx="26" ry="3" fill={NAVY} opacity="0.12" stroke="none" />
      {/* Jar body */}
      <rect x="22" y="26" width="56" height="60" rx="6" fill={TERRACOTTA} />
      {/* Glass highlight */}
      <rect x="26" y="30" width="6" height="50" rx="3" fill={OFFWHITE} opacity="0.35" stroke="none" />
      {/* Top of jam visible */}
      <ellipse cx="50" cy="26" rx="28" ry="3" fill={SOFT_PINK} />
      {/* Lid */}
      <rect x="20" y="14" width="60" height="14" rx="3" fill={SAGE} />
      <path d="M22 18 L78 18" strokeWidth="1.5" opacity="0.6" />
      <path d="M22 22 L78 22" strokeWidth="1.5" opacity="0.6" />
      {/* Label */}
      <rect x="28" y="48" width="44" height="22" rx="3" fill={CREAM} />
      <path d="M34 56 L66 56" strokeWidth="2" />
      <path d="M36 62 L60 62" strokeWidth="1.5" opacity="0.6" />
      <path d="M40 68 L56 68" strokeWidth="1.5" opacity="0.55" />
    </Frame>
  );
}

function FruitGrows(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Strawberry plant leaves */}
      <path d="M50 86 L50 56" stroke={SAGE} strokeWidth="3" />
      <path d="M50 60 Q34 52 26 58" stroke={SAGE} strokeWidth="2.5" />
      <ellipse cx="22" cy="56" rx="8" ry="5" fill={SAGE} transform="rotate(-20 22 56)" />
      <path d="M50 60 Q66 52 74 58" stroke={SAGE} strokeWidth="2.5" />
      <ellipse cx="78" cy="56" rx="8" ry="5" fill={SAGE} transform="rotate(20 78 56)" />
      {/* Strawberries */}
      <path d="M50 30 Q42 28 40 36 Q42 48 50 50 Q58 48 60 36 Q58 28 50 30 Z" fill={TERRACOTTA} />
      <path d="M30 50 Q24 48 22 56 Q24 64 30 64 Q36 64 36 56 Z" fill={TERRACOTTA} />
      <path d="M70 50 Q64 48 64 56 Q64 64 70 64 Q76 64 78 56 Z" fill={TERRACOTTA} />
      {/* Strawberry tops */}
      <path d="M46 30 L46 24 M50 30 L50 22 M54 30 L54 24" stroke={SAGE} strokeWidth="2" />
      {/* Seeds */}
      <circle cx="46" cy="38" r="0.8" fill={MUSTARD} />
      <circle cx="50" cy="42" r="0.8" fill={MUSTARD} />
      <circle cx="54" cy="38" r="0.8" fill={MUSTARD} />
    </Frame>
  );
}

function PickedWashed(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Basket */}
      <path d="M14 50 L86 50 L78 86 L22 86 Z" fill={WARM_GRAY} />
      {/* Weave lines */}
      <path d="M18 60 L82 60" strokeWidth="1.5" opacity="0.5" />
      <path d="M22 70 L78 70" strokeWidth="1.5" opacity="0.5" />
      <path d="M26 80 L74 80" strokeWidth="1.5" opacity="0.5" />
      {/* Strawberries piled */}
      <path d="M30 38 Q26 34 26 42 Q28 50 32 50 Q40 50 40 42 Z" fill={TERRACOTTA} />
      <path d="M50 34 Q44 32 44 40 Q46 50 50 50 Q56 50 58 40 Z" fill={TERRACOTTA} />
      <path d="M70 38 Q66 34 64 42 Q68 50 72 50 Q78 50 78 42 Z" fill={TERRACOTTA} />
      <path d="M40 44 Q36 42 36 48 Q38 52 42 52 Q46 50 46 46 Z" fill={TERRACOTTA} />
      <path d="M58 44 Q54 42 54 48 Q56 52 60 52 Q64 50 64 46 Z" fill={TERRACOTTA} />
      {/* Stems */}
      <path d="M30 32 L30 26" stroke={SAGE} strokeWidth="2" />
      <path d="M50 26 L50 20" stroke={SAGE} strokeWidth="2" />
      <path d="M70 32 L70 26" stroke={SAGE} strokeWidth="2" />
    </Frame>
  );
}

function SugarAdded(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Pot */}
      <path d="M16 46 L84 46 L78 86 L22 86 Z" fill={WARM_GRAY} />
      {/* Pot contents */}
      <ellipse cx="50" cy="46" rx="34" ry="4" fill={TERRACOTTA} />
      <ellipse cx="50" cy="46" rx="34" ry="4" />
      {/* Sugar bag pouring */}
      <path d="M40 8 L60 8 L66 30 L34 30 Z" fill={OFFWHITE} />
      <path d="M40 8 L48 4 L52 4 L60 8" strokeWidth="2" />
      <text x="50" y="22" fontFamily="serif" fontSize="6" textAnchor="middle" fill={NAVY} stroke="none">sugar</text>
      {/* Sugar pouring down */}
      <circle cx="48" cy="36" r="1" fill={CREAM} />
      <circle cx="50" cy="40" r="1" fill={CREAM} />
      <circle cx="52" cy="44" r="1" fill={CREAM} />
      <circle cx="46" cy="38" r="0.8" fill={CREAM} />
      <circle cx="54" cy="42" r="0.8" fill={CREAM} />
    </Frame>
  );
}

function BoilingPot(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Pot */}
      <path d="M16 46 L84 46 L78 86 L22 86 Z" fill={WARM_GRAY} />
      {/* Bubbling jam */}
      <ellipse cx="50" cy="46" rx="34" ry="4" fill={TERRACOTTA} />
      <ellipse cx="50" cy="46" rx="34" ry="4" />
      {/* Bubbles */}
      <circle cx="32" cy="40" r="3" fill={TERRACOTTA} opacity="0.7" />
      <circle cx="44" cy="36" r="2.5" fill={TERRACOTTA} opacity="0.7" />
      <circle cx="56" cy="40" r="3" fill={TERRACOTTA} opacity="0.7" />
      <circle cx="68" cy="38" r="2.5" fill={TERRACOTTA} opacity="0.7" />
      <circle cx="50" cy="32" r="2.5" fill={TERRACOTTA} opacity="0.7" />
      <circle cx="32" cy="40" r="3" />
      <circle cx="44" cy="36" r="2.5" />
      <circle cx="56" cy="40" r="3" />
      <circle cx="68" cy="38" r="2.5" />
      <circle cx="50" cy="32" r="2.5" />
      {/* Steam */}
      <path d="M36 24 Q40 18 36 12" stroke={SOFT_PINK} opacity="0.6" strokeWidth="2" />
      <path d="M64 24 Q60 18 64 12" stroke={SOFT_PINK} opacity="0.6" strokeWidth="2" />
      {/* Heat under */}
      <path d="M30 90 Q34 86 30 82" stroke={MUSTARD} strokeWidth="2" />
      <path d="M50 90 Q54 86 50 82" stroke={MUSTARD} strokeWidth="2" />
      <path d="M70 90 Q66 86 70 82" stroke={MUSTARD} strokeWidth="2" />
    </Frame>
  );
}

function WrinkleTest(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Plate */}
      <ellipse cx="50" cy="70" rx="40" ry="14" fill={CREAM} />
      <ellipse cx="50" cy="68" rx="38" ry="12" fill={OFFWHITE} />
      {/* Jam dollop */}
      <path d="M42 60 Q46 56 50 58 Q56 60 58 64 Q56 70 52 70 Q44 70 42 66 Z" fill={TERRACOTTA} />
      {/* Wrinkle lines */}
      <path d="M46 64 Q50 62 54 64" strokeWidth="1.5" stroke={NAVY} opacity="0.6" />
      <path d="M44 67 Q50 65 56 67" strokeWidth="1.5" stroke={NAVY} opacity="0.6" />
      {/* Finger pushing */}
      <circle cx="42" cy="38" r="6" fill={SOFT_PINK} />
      <rect x="38" y="42" width="8" height="14" rx="3" fill={SOFT_PINK} />
      <path d="M44 56 L46 60" strokeWidth="1.5" opacity="0.55" />
    </Frame>
  );
}

function JarredSealed(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Row of three jars */}
      {[24, 50, 76].map((x, i) => (
        <g key={i}>
          <rect x={x - 12} y="32" width="24" height="40" rx="3" fill={TERRACOTTA} />
          <rect x={x - 12} y="22" width="24" height="10" rx="2" fill={SAGE} />
          <rect x={x - 10} y="48" width="20" height="14" rx="2" fill={CREAM} />
          <path d={`M${x - 6} 56 L${x + 6} 56`} strokeWidth="1.5" opacity="0.7" />
        </g>
      ))}
      {/* Shelf line */}
      <path d="M6 72 L94 72" strokeWidth="2" />
      <path d="M10 78 L90 78" strokeWidth="1.5" opacity="0.5" />
    </Frame>
  );
}

const stepIllustrations: Record<string, ComponentType<SvgProps>> = {
  "fruit-grows": FruitGrows,
  "picked-washed": PickedWashed,
  "sugar-added": SugarAdded,
  boiled: BoilingPot,
  tested: WrinkleTest,
  "jarred-sealed": JarredSealed,
};

export function JamStepIllustration({
  stepId,
  ...props
}: SvgProps & { stepId: string }) {
  const Component = stepIllustrations[stepId];
  if (!Component) return null;
  return <Component {...props} />;
}
