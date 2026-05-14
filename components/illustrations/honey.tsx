/**
 * Honey — hero + step illustrations.
 */

import type { ComponentType } from "react";
import {
  Frame,
  MUSTARD,
  NAVY,
  OFFWHITE,
  SAGE,
  SOFT_PINK,
  TERRACOTTA,
  WARM_GRAY,
  type SvgProps,
} from "./_shared";

export function HoneyJarHero(props: SvgProps) {
  return (
    <Frame {...props} title="Honey jar">
      {/* Ground shadow */}
      <ellipse cx="50" cy="90" rx="26" ry="3" fill={NAVY} opacity="0.12" stroke="none" />
      {/* Jar body */}
      <rect x="22" y="28" width="56" height="58" rx="6" fill={MUSTARD} />
      {/* Lid */}
      <rect x="20" y="18" width="60" height="12" rx="3" fill={WARM_GRAY} />
      <path d="M22 22 L78 22" strokeWidth="1.5" opacity="0.55" />
      {/* Label */}
      <rect x="28" y="48" width="44" height="22" rx="3" fill={OFFWHITE} />
      <path d="M34 58 L66 58" strokeWidth="2" />
      <path d="M36 64 L60 64" strokeWidth="1.5" opacity="0.6" />
      {/* Drip */}
      <path d="M58 86 Q58 96 64 96 Q70 96 64 86" fill={MUSTARD} />
    </Frame>
  );
}

function FlowerBloom(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Stem */}
      <path d="M50 92 L50 56" stroke={SAGE} strokeWidth="3" />
      <path d="M50 78 Q40 72 36 64" stroke={SAGE} strokeWidth="2.5" />
      {/* Petals */}
      {[0, 72, 144, 216, 288].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const cx = 50 + Math.cos(rad) * 14;
        const cy = 36 + Math.sin(rad) * 14;
        return (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx="10"
            ry="14"
            fill={SOFT_PINK}
            transform={`rotate(${deg} ${cx} ${cy})`}
          />
        );
      })}
      {/* Center */}
      <circle cx="50" cy="36" r="8" fill={MUSTARD} />
    </Frame>
  );
}

function Bee(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Wings */}
      <ellipse cx="38" cy="38" rx="14" ry="9" fill={OFFWHITE} opacity="0.85" />
      <ellipse cx="62" cy="38" rx="14" ry="9" fill={OFFWHITE} opacity="0.85" />
      {/* Body */}
      <ellipse cx="50" cy="58" rx="22" ry="16" fill={MUSTARD} />
      {/* Stripes */}
      <path d="M38 50 Q38 66 38 70" stroke={NAVY} strokeWidth="3" />
      <path d="M50 46 Q50 70 50 74" stroke={NAVY} strokeWidth="3" />
      <path d="M62 50 Q62 66 62 70" stroke={NAVY} strokeWidth="3" />
      {/* Flight path */}
      <path d="M14 18 Q24 22 30 28" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.5" />
    </Frame>
  );
}

function Hive(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Hive layers */}
      <path d="M28 78 Q50 86 72 78 L72 70 Q50 78 28 70 Z" fill={MUSTARD} />
      <path d="M24 68 Q50 76 76 68 L76 56 Q50 64 24 56 Z" fill={MUSTARD} />
      <path d="M22 56 Q50 64 78 56 L78 44 Q50 50 22 44 Z" fill={MUSTARD} />
      <path d="M26 44 Q50 50 74 44 L74 34 Q50 40 26 34 Z" fill={MUSTARD} />
      <path d="M32 34 Q50 40 68 34 L68 26 Q50 30 32 26 Z" fill={MUSTARD} />
      {/* Entrance hole */}
      <ellipse cx="50" cy="74" rx="6" ry="3" fill={NAVY} />
      {/* Bees */}
      <circle cx="20" cy="22" r="2.5" fill={MUSTARD} />
      <circle cx="84" cy="30" r="2.5" fill={MUSTARD} />
    </Frame>
  );
}

function Honeycomb(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Hexagonal cells */}
      {[
        [30, 30],
        [50, 30],
        [70, 30],
        [40, 50],
        [60, 50],
        [30, 70],
        [50, 70],
        [70, 70],
      ].map(([cx, cy], i) => (
        <polygon
          key={i}
          points={`${cx} ${cy - 12} ${cx + 10} ${cy - 6} ${cx + 10} ${cy + 6} ${cx} ${cy + 12} ${cx - 10} ${cy + 6} ${cx - 10} ${cy - 6}`}
          fill={MUSTARD}
        />
      ))}
      {/* A few filled with deeper honey */}
      <polygon points="50 18 60 24 60 36 50 42 40 36 40 24" fill={TERRACOTTA} opacity="0.7" stroke="none" />
      <polygon points="50 58 60 64 60 76 50 82 40 76 40 64" fill={TERRACOTTA} opacity="0.7" stroke="none" />
    </Frame>
  );
}

function CappedCells(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Comb base */}
      {[
        [25, 50],
        [45, 50],
        [65, 50],
        [85, 50],
        [35, 70],
        [55, 70],
        [75, 70],
      ].map(([cx, cy], i) => (
        <polygon
          key={i}
          points={`${cx} ${cy - 10} ${cx + 8} ${cy - 5} ${cx + 8} ${cy + 5} ${cx} ${cy + 10} ${cx - 8} ${cy + 5} ${cx - 8} ${cy - 5}`}
          fill={MUSTARD}
        />
      ))}
      {/* Wax caps */}
      <ellipse cx="25" cy="50" rx="8" ry="3" fill={OFFWHITE} />
      <ellipse cx="65" cy="50" rx="8" ry="3" fill={OFFWHITE} />
      <ellipse cx="55" cy="70" rx="8" ry="3" fill={OFFWHITE} />
      {/* A tiny bee at the top */}
      <ellipse cx="50" cy="20" rx="8" ry="5" fill={MUSTARD} />
      <path d="M46 20 L46 25 M50 20 L50 25 M54 20 L54 25" strokeWidth="1.5" />
    </Frame>
  );
}

function HarvestJar(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Frame */}
      <rect x="20" y="22" width="60" height="42" rx="3" fill={MUSTARD} />
      <path d="M30 22 L30 64 M50 22 L50 64 M70 22 L70 64" strokeWidth="1.5" opacity="0.5" />
      {/* Honey flowing into a jar */}
      <rect x="38" y="68" width="24" height="22" rx="3" fill={OFFWHITE} />
      <ellipse cx="50" cy="68" rx="12" ry="2.5" fill={MUSTARD} />
      <path d="M50 64 L50 70" stroke={MUSTARD} strokeWidth="4" />
      <ellipse cx="50" cy="78" rx="10" ry="3" fill={MUSTARD} stroke="none" />
    </Frame>
  );
}

const stepIllustrations: Record<string, ComponentType<SvgProps>> = {
  flowers: FlowerBloom,
  "bees-visit": Bee,
  hive: Hive,
  honeycomb: Honeycomb,
  capped: CappedCells,
  harvested: HarvestJar,
};

export function HoneyStepIllustration({
  stepId,
  ...props
}: SvgProps & { stepId: string }) {
  const Component = stepIllustrations[stepId];
  if (!Component) return null;
  return <Component {...props} />;
}
