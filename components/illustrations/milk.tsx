/**
 * Milk — hero + step illustrations.
 */

import type { ComponentType } from "react";
import {
  Frame,
  MUSTARD,
  NAVY,
  OFFWHITE,
  SAGE,
  WARM_GRAY,
  DUSTY_BLUE,
  SOFT_PINK,
  type SvgProps,
} from "./_shared";

export function MilkBottleHero(props: SvgProps) {
  return (
    <Frame {...props} title="Milk bottle">
      {/* Ground shadow */}
      <ellipse cx="50" cy="92" rx="26" ry="3" fill={NAVY} opacity="0.12" stroke="none" />
      {/* Bottle neck */}
      <rect x="40" y="14" width="20" height="14" rx="2" fill={OFFWHITE} />
      {/* Cap */}
      <rect x="38" y="10" width="24" height="8" rx="2" fill={DUSTY_BLUE} />
      <path d="M38 14 L62 14" strokeWidth="1.6" opacity="0.6" />
      {/* Shoulder */}
      <path d="M40 28 Q26 34 26 46 L26 80 Q26 88 34 88 L66 88 Q74 88 74 80 L74 46 Q74 34 60 28 Z" fill={OFFWHITE} />
      {/* Label */}
      <rect x="32" y="52" width="36" height="20" rx="3" fill={DUSTY_BLUE} />
      <path d="M38 60 L62 60" stroke={OFFWHITE} strokeWidth="2" />
      <path d="M40 66 L60 66" stroke={OFFWHITE} strokeWidth="1.5" opacity="0.7" />
    </Frame>
  );
}

function GrassTufts(props: SvgProps) {
  return (
    <Frame {...props}>
      <path d="M14 90 L86 90" stroke={WARM_GRAY} strokeWidth="3" />
      <path d="M22 90 L18 70 M22 90 L26 72" stroke={SAGE} strokeWidth="3" />
      <path d="M38 90 L34 66 M38 90 L42 70" stroke={SAGE} strokeWidth="3" />
      <path d="M56 90 L52 72 M56 90 L60 66" stroke={SAGE} strokeWidth="3" />
      <path d="M74 90 L70 68 M74 90 L78 72" stroke={SAGE} strokeWidth="3" />
      <circle cx="20" cy="64" r="4" fill={SOFT_PINK} />
      <circle cx="62" cy="60" r="4" fill={OFFWHITE} />
    </Frame>
  );
}

function MilkingPail(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Drops of milk */}
      <ellipse cx="44" cy="22" rx="3" ry="6" fill={OFFWHITE} />
      <ellipse cx="56" cy="30" rx="3" ry="6" fill={OFFWHITE} />
      {/* Pail */}
      <path d="M22 50 L78 50 L72 86 L28 86 Z" fill={WARM_GRAY} />
      {/* Pail handle */}
      <path d="M28 50 Q50 36 72 50" stroke={NAVY} strokeWidth="2" fill="none" />
      {/* Milk inside */}
      <ellipse cx="50" cy="50" rx="28" ry="5" fill={OFFWHITE} />
      <ellipse cx="50" cy="50" rx="28" ry="5" />
    </Frame>
  );
}

function ChilledTank(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Tank */}
      <rect x="20" y="22" width="60" height="60" rx="10" fill={DUSTY_BLUE} />
      {/* Highlight */}
      <rect x="26" y="28" width="6" height="48" rx="3" fill={OFFWHITE} opacity="0.7" stroke="none" />
      {/* Snowflake */}
      <g stroke={OFFWHITE} strokeWidth="2.5">
        <path d="M50 36 L50 68" />
        <path d="M36 52 L64 52" />
        <path d="M40 42 L60 62" />
        <path d="M60 42 L40 62" />
      </g>
      {/* Gauge */}
      <circle cx="68" cy="34" r="5" fill={OFFWHITE} />
    </Frame>
  );
}

function Truck(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Tanker body */}
      <rect x="34" y="38" width="56" height="28" rx="14" fill={OFFWHITE} />
      {/* Cab */}
      <path d="M10 50 L10 66 L34 66 L34 42 L24 42 Z" fill={DUSTY_BLUE} />
      {/* Cab window */}
      <rect x="14" y="46" width="14" height="10" rx="2" fill={OFFWHITE} />
      {/* Wheels */}
      <circle cx="22" cy="74" r="6" fill={NAVY} />
      <circle cx="22" cy="74" r="2" fill={OFFWHITE} />
      <circle cx="58" cy="74" r="6" fill={NAVY} />
      <circle cx="58" cy="74" r="2" fill={OFFWHITE} />
      <circle cx="80" cy="74" r="6" fill={NAVY} />
      <circle cx="80" cy="74" r="2" fill={OFFWHITE} />
      {/* Tank stripe */}
      <path d="M40 52 L86 52" strokeWidth="1.5" opacity="0.4" />
    </Frame>
  );
}

function Pasteurised(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Pot */}
      <path d="M22 46 L78 46 L72 84 L28 84 Z" fill={WARM_GRAY} />
      {/* Pot lid */}
      <rect x="18" y="42" width="64" height="6" rx="2" fill={NAVY} />
      <circle cx="50" cy="40" r="3" fill={NAVY} />
      {/* Milk inside */}
      <ellipse cx="50" cy="46" rx="28" ry="4" fill={OFFWHITE} />
      {/* Heat waves rising */}
      <path d="M34 36 Q38 28 34 20" stroke={TERRA} strokeWidth="2.5" opacity="0.7" />
      <path d="M50 34 Q54 26 50 18" stroke={TERRA} strokeWidth="2.5" opacity="0.7" />
      <path d="M66 36 Q70 28 66 20" stroke={TERRA} strokeWidth="2.5" opacity="0.7" />
    </Frame>
  );
}

const TERRA = "#D97757";

function Bottled(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Carton */}
      <path d="M28 30 L72 30 L78 38 L78 84 L22 84 L22 38 Z" fill={OFFWHITE} />
      {/* Top fold */}
      <path d="M28 30 L40 14 L60 14 L72 30" fill={OFFWHITE} />
      <path d="M40 14 L60 14" strokeWidth="1.5" opacity="0.5" />
      {/* Label band */}
      <rect x="22" y="52" width="56" height="16" fill={DUSTY_BLUE} />
      <path d="M28 60 L72 60" stroke={OFFWHITE} strokeWidth="2" />
      {/* Cap */}
      <rect x="44" y="6" width="12" height="10" rx="2" fill={MUSTARD} />
    </Frame>
  );
}

const stepIllustrations: Record<string, ComponentType<SvgProps>> = {
  grass: GrassTufts,
  milking: MilkingPail,
  chilled: ChilledTank,
  trucked: Truck,
  pasteurised: Pasteurised,
  bottled: Bottled,
};

export function MilkStepIllustration({
  stepId,
  ...props
}: SvgProps & { stepId: string }) {
  const Component = stepIllustrations[stepId];
  if (!Component) return null;
  return <Component {...props} />;
}
