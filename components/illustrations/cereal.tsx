/**
 * Cereal — hero + step illustrations.
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

export function CerealBowlHero(props: SvgProps) {
  return (
    <Frame {...props} title="Bowl of cereal">
      {/* Bowl */}
      <path d="M10 50 Q10 82 50 84 Q90 82 90 50 Z" fill={SAGE} />
      {/* Inner rim */}
      <ellipse cx="50" cy="50" rx="40" ry="6" fill={OFFWHITE} />
      <ellipse cx="50" cy="50" rx="40" ry="6" />
      {/* Milk */}
      <ellipse cx="50" cy="54" rx="36" ry="6" fill={OFFWHITE} stroke="none" />
      {/* Cereal pieces floating */}
      {[
        [30, 52], [42, 50], [54, 52], [66, 50],
        [36, 56], [50, 56], [62, 56],
        [30, 60], [44, 60], [58, 60], [70, 60],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill={MUSTARD} />
      ))}
      {/* Spoon */}
      <ellipse cx="80" cy="42" rx="8" ry="5" fill={WARM_GRAY} transform="rotate(30 80 42)" />
      <rect x="80" y="22" width="4" height="20" rx="1.5" fill={WARM_GRAY} transform="rotate(30 80 22)" />
    </Frame>
  );
}

function GrainGrows(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Field */}
      <path d="M6 86 Q50 80 94 86 L94 92 L6 92 Z" fill={WARM_GRAY} opacity="0.4" stroke="none" />
      {/* Corn stalks */}
      <path d="M30 86 L30 28" stroke={SAGE} strokeWidth="3" />
      <path d="M50 86 L50 22" stroke={SAGE} strokeWidth="3" />
      <path d="M70 86 L70 28" stroke={SAGE} strokeWidth="3" />
      {/* Corn cobs */}
      <ellipse cx="30" cy="42" rx="5" ry="12" fill={MUSTARD} />
      <ellipse cx="50" cy="38" rx="5" ry="14" fill={MUSTARD} />
      <ellipse cx="70" cy="42" rx="5" ry="12" fill={MUSTARD} />
      {/* Husks */}
      <path d="M26 36 Q22 32 24 26" stroke={SAGE} strokeWidth="2.5" />
      <path d="M34 36 Q38 32 36 26" stroke={SAGE} strokeWidth="2.5" />
      <path d="M46 32 Q42 28 44 22" stroke={SAGE} strokeWidth="2.5" />
      <path d="M54 32 Q58 28 56 22" stroke={SAGE} strokeWidth="2.5" />
      <path d="M66 36 Q62 32 64 26" stroke={SAGE} strokeWidth="2.5" />
      <path d="M74 36 Q78 32 76 26" stroke={SAGE} strokeWidth="2.5" />
      {/* Kernels (dots on cobs) */}
      <circle cx="29" cy="42" r="0.8" fill={NAVY} opacity="0.5" />
      <circle cx="31" cy="46" r="0.8" fill={NAVY} opacity="0.5" />
      <circle cx="49" cy="40" r="0.8" fill={NAVY} opacity="0.5" />
      <circle cx="51" cy="44" r="0.8" fill={NAVY} opacity="0.5" />
    </Frame>
  );
}

function HarvestedCleaned(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Conveyor belt */}
      <rect x="6" y="56" width="88" height="12" rx="2" fill={WARM_GRAY} />
      <circle cx="14" cy="62" r="3" fill={NAVY} />
      <circle cx="86" cy="62" r="3" fill={NAVY} />
      {/* Belt slats */}
      <path d="M22 56 L22 68" strokeWidth="1.5" opacity="0.4" />
      <path d="M42 56 L42 68" strokeWidth="1.5" opacity="0.4" />
      <path d="M62 56 L62 68" strokeWidth="1.5" opacity="0.4" />
      <path d="M78 56 L78 68" strokeWidth="1.5" opacity="0.4" />
      {/* Grain on belt */}
      <ellipse cx="20" cy="50" rx="6" ry="4" fill={MUSTARD} />
      <ellipse cx="38" cy="48" rx="6" ry="4" fill={MUSTARD} />
      <ellipse cx="56" cy="50" rx="6" ry="4" fill={MUSTARD} />
      <ellipse cx="74" cy="48" rx="6" ry="4" fill={MUSTARD} />
      {/* Cleaning brushes (above) */}
      <rect x="20" y="20" width="60" height="14" rx="3" fill={WARM_GRAY} />
      <path d="M26 34 L26 42 M34 34 L34 42 M42 34 L42 42 M50 34 L50 42 M58 34 L58 42 M66 34 L66 42 M74 34 L74 42" strokeWidth="2" />
    </Frame>
  );
}

function Cooked(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Big vat */}
      <rect x="14" y="22" width="72" height="60" rx="4" fill={WARM_GRAY} />
      <rect x="20" y="28" width="60" height="48" rx="3" fill={MUSTARD} />
      {/* Bubbles */}
      <circle cx="32" cy="40" r="3" fill={CREAM} />
      <circle cx="44" cy="36" r="2.5" fill={CREAM} />
      <circle cx="56" cy="40" r="3" fill={CREAM} />
      <circle cx="68" cy="38" r="2.5" fill={CREAM} />
      <circle cx="50" cy="52" r="2.5" fill={CREAM} />
      <circle cx="36" cy="56" r="2" fill={CREAM} />
      <circle cx="64" cy="56" r="2" fill={CREAM} />
      {/* Pressure gauge */}
      <circle cx="86" cy="22" r="5" fill={OFFWHITE} />
      <path d="M86 18 L86 22 L89 24" strokeWidth="1.5" />
      {/* Steam */}
      <path d="M30 14 Q34 8 30 2" stroke={DUSTY_BLUE} opacity="0.55" strokeWidth="2" />
      <path d="M50 14 Q54 8 50 2" stroke={DUSTY_BLUE} opacity="0.55" strokeWidth="2" />
      <path d="M70 14 Q66 8 70 2" stroke={DUSTY_BLUE} opacity="0.55" strokeWidth="2" />
    </Frame>
  );
}

function Shaped(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Pair of rollers */}
      <rect x="14" y="28" width="72" height="14" rx="7" fill={WARM_GRAY} />
      <rect x="14" y="50" width="72" height="14" rx="7" fill={WARM_GRAY} />
      <circle cx="14" cy="35" r="3" fill={NAVY} />
      <circle cx="86" cy="35" r="3" fill={NAVY} />
      <circle cx="14" cy="57" r="3" fill={NAVY} />
      <circle cx="86" cy="57" r="3" fill={NAVY} />
      {/* Cooked mass entering top */}
      <path d="M40 18 Q50 14 60 18 Q60 24 50 24 Q40 24 40 18" fill={MUSTARD} />
      {/* Flakes coming out */}
      <ellipse cx="22" cy="78" rx="6" ry="2" fill={MUSTARD} transform="rotate(-10 22 78)" />
      <ellipse cx="38" cy="80" rx="6" ry="2" fill={MUSTARD} transform="rotate(5 38 80)" />
      <ellipse cx="54" cy="78" rx="6" ry="2" fill={MUSTARD} transform="rotate(-12 54 78)" />
      <ellipse cx="70" cy="80" rx="6" ry="2" fill={MUSTARD} transform="rotate(8 70 80)" />
      <ellipse cx="86" cy="78" rx="5" ry="2" fill={MUSTARD} transform="rotate(-6 86 78)" />
    </Frame>
  );
}

function ToastedFlakes(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Oven body */}
      <rect x="14" y="20" width="72" height="58" rx="6" fill={WARM_GRAY} />
      {/* Window */}
      <rect x="22" y="28" width="56" height="34" rx="3" fill={CREAM} />
      {/* Flakes inside */}
      <ellipse cx="34" cy="48" rx="5" ry="2.2" fill={MUSTARD} transform="rotate(-12 34 48)" />
      <ellipse cx="48" cy="46" rx="5" ry="2.2" fill={MUSTARD} transform="rotate(8 48 46)" />
      <ellipse cx="62" cy="50" rx="5" ry="2.2" fill={MUSTARD} transform="rotate(-6 62 50)" />
      <ellipse cx="40" cy="54" rx="5" ry="2.2" fill={MUSTARD} transform="rotate(15 40 54)" />
      <ellipse cx="56" cy="54" rx="5" ry="2.2" fill={MUSTARD} transform="rotate(-10 56 54)" />
      {/* Heating element */}
      <path d="M22 66 Q30 64 38 66 Q46 68 54 66 Q62 64 70 66 Q78 68 78 66" stroke={TERRACOTTA} strokeWidth="2.5" />
      {/* Handle */}
      <rect x="22" y="68" width="56" height="3" rx="1.5" fill={NAVY} />
    </Frame>
  );
}

function CoatedBoxed(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Cereal box */}
      <rect x="22" y="14" width="56" height="72" rx="3" fill={TERRACOTTA} />
      {/* Top fold */}
      <path d="M22 14 L78 14 L74 8 L26 8 Z" fill={TERRACOTTA} />
      {/* Label/title band */}
      <rect x="28" y="22" width="44" height="14" rx="2" fill={MUSTARD} />
      <path d="M34 30 L66 30" strokeWidth="2" opacity="0.7" />
      {/* Cereal picture box */}
      <rect x="28" y="42" width="44" height="34" rx="3" fill={CREAM} />
      {/* Tiny flake details */}
      <ellipse cx="38" cy="56" rx="4" ry="1.8" fill={MUSTARD} transform="rotate(-10 38 56)" />
      <ellipse cx="50" cy="58" rx="4" ry="1.8" fill={MUSTARD} transform="rotate(6 50 58)" />
      <ellipse cx="62" cy="56" rx="4" ry="1.8" fill={MUSTARD} transform="rotate(-12 62 56)" />
      <ellipse cx="44" cy="66" rx="4" ry="1.8" fill={MUSTARD} transform="rotate(10 44 66)" />
      <ellipse cx="56" cy="66" rx="4" ry="1.8" fill={MUSTARD} transform="rotate(-8 56 66)" />
    </Frame>
  );
}

const stepIllustrations: Record<string, ComponentType<SvgProps>> = {
  "grain-grows": GrainGrows,
  "harvested-cleaned": HarvestedCleaned,
  cooked: Cooked,
  shaped: Shaped,
  toasted: ToastedFlakes,
  "coated-boxed": CoatedBoxed,
};

export function CerealStepIllustration({
  stepId,
  ...props
}: SvgProps & { stepId: string }) {
  const Component = stepIllustrations[stepId];
  if (!Component) return null;
  return <Component {...props} />;
}
