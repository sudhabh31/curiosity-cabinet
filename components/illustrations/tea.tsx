/**
 * Tea — hero + step illustrations.
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
  WARM_GRAY,
  type SvgProps,
} from "./_shared";

export function TeacupHero(props: SvgProps) {
  return (
    <Frame {...props} title="Cup of tea">
      {/* Saucer */}
      <ellipse cx="50" cy="80" rx="38" ry="6" fill={SOFT_PINK} opacity="0.4" stroke="none" />
      <ellipse cx="50" cy="80" rx="38" ry="6" fill={CREAM} />
      <ellipse cx="50" cy="78" rx="36" ry="4" fill="none" />
      {/* Cup body */}
      <path d="M22 42 Q22 70 36 76 L64 76 Q78 70 78 42 Z" fill={OFFWHITE} />
      {/* Cup rim ellipse */}
      <ellipse cx="50" cy="42" rx="28" ry="6" fill={WARM_GRAY} />
      {/* Tea inside */}
      <ellipse cx="50" cy="42" rx="24" ry="4" fill={MUSTARD} stroke="none" />
      <ellipse cx="50" cy="42" rx="24" ry="4" />
      {/* Handle */}
      <path d="M78 50 Q90 52 90 60 Q90 68 78 66" />
      {/* Steam wisps */}
      <path d="M40 30 Q44 22 40 14" stroke={DUSTY_BLUE} opacity="0.55" strokeWidth="2" />
      <path d="M50 28 Q54 18 50 10" stroke={DUSTY_BLUE} opacity="0.55" strokeWidth="2" />
      <path d="M60 30 Q56 22 60 14" stroke={DUSTY_BLUE} opacity="0.55" strokeWidth="2" />
      {/* Tea leaf decoration on saucer */}
      <path d="M14 84 Q16 80 22 82" stroke={SAGE} strokeWidth="2" />
    </Frame>
  );
}

function TeaBushes(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Hillside */}
      <path d="M6 90 L94 90 L94 70 Q60 60 50 64 Q40 68 6 60 Z" fill={SAGE} opacity="0.5" stroke="none" />
      {/* Rows of bushes */}
      <path d="M10 70 Q24 64 38 70 Q52 64 66 70 Q80 64 94 70" stroke={SAGE} strokeWidth="3" />
      <path d="M6 80 Q22 74 38 80 Q56 74 72 80 Q88 76 94 80" stroke={SAGE} strokeWidth="3" />
      {/* Individual bushes */}
      <ellipse cx="20" cy="68" rx="6" ry="4" fill={SAGE} />
      <ellipse cx="42" cy="68" rx="6" ry="4" fill={SAGE} />
      <ellipse cx="64" cy="68" rx="6" ry="4" fill={SAGE} />
      <ellipse cx="84" cy="68" rx="6" ry="4" fill={SAGE} />
      <ellipse cx="14" cy="78" rx="6" ry="4" fill={SAGE} />
      <ellipse cx="34" cy="78" rx="6" ry="4" fill={SAGE} />
      <ellipse cx="56" cy="78" rx="6" ry="4" fill={SAGE} />
      <ellipse cx="78" cy="78" rx="6" ry="4" fill={SAGE} />
      {/* Distant hill outline */}
      <path d="M6 58 Q30 50 50 52 Q70 50 94 58" strokeWidth="2" opacity="0.55" />
    </Frame>
  );
}

function PluckLeaves(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Bush mass */}
      <ellipse cx="50" cy="60" rx="32" ry="22" fill={SAGE} />
      {/* Leaves on top */}
      <path d="M40 36 Q44 30 50 32 L50 38" fill={SAGE} stroke={NAVY} strokeWidth="2" />
      <path d="M50 30 Q56 26 60 32 L56 38" fill={SAGE} stroke={NAVY} strokeWidth="2" />
      <path d="M58 36 Q66 32 68 38 L62 42" fill={SAGE} stroke={NAVY} strokeWidth="2" />
      {/* Plucking hand simplified — just a circle with two fingers */}
      <circle cx="34" cy="20" r="6" fill={SOFT_PINK} />
      <path d="M30 24 L28 32" strokeWidth="2.5" />
      <path d="M36 24 L36 32" strokeWidth="2.5" />
      {/* Plucked leaf falling */}
      <path d="M70 14 Q76 18 76 24" stroke={SAGE} strokeWidth="2.5" />
    </Frame>
  );
}

function Withering(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Tray */}
      <rect x="12" y="38" width="76" height="46" rx="3" fill={WARM_GRAY} />
      <rect x="16" y="42" width="68" height="38" rx="2" fill={CREAM} />
      {/* Spread leaves */}
      <ellipse cx="28" cy="54" rx="6" ry="3" fill={SAGE} transform="rotate(-15 28 54)" />
      <ellipse cx="44" cy="56" rx="6" ry="3" fill={SAGE} transform="rotate(20 44 56)" />
      <ellipse cx="62" cy="52" rx="6" ry="3" fill={SAGE} transform="rotate(-10 62 52)" />
      <ellipse cx="76" cy="60" rx="6" ry="3" fill={SAGE} transform="rotate(35 76 60)" />
      <ellipse cx="30" cy="70" rx="6" ry="3" fill={SAGE} transform="rotate(10 30 70)" />
      <ellipse cx="50" cy="68" rx="6" ry="3" fill={SAGE} transform="rotate(-25 50 68)" />
      <ellipse cx="68" cy="74" rx="6" ry="3" fill={SAGE} transform="rotate(15 68 74)" />
      {/* Heat/air wisps */}
      <path d="M30 30 Q34 24 30 18" stroke={SOFT_PINK} opacity="0.5" strokeWidth="2" />
      <path d="M50 28 Q54 22 50 16" stroke={SOFT_PINK} opacity="0.5" strokeWidth="2" />
      <path d="M70 30 Q66 24 70 18" stroke={SOFT_PINK} opacity="0.5" strokeWidth="2" />
    </Frame>
  );
}

function Rolling(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Big roller (top) */}
      <rect x="14" y="22" width="72" height="14" rx="7" fill={WARM_GRAY} />
      {/* Bottom roller */}
      <rect x="14" y="52" width="72" height="14" rx="7" fill={WARM_GRAY} />
      {/* Leaves being squished out */}
      <path d="M16 44 Q40 42 60 46 Q78 48 84 44" stroke={SAGE} strokeWidth="3" />
      {/* Rolled leaf shapes — twirly */}
      <path d="M28 76 Q32 80 28 84 Q24 80 28 76" fill={SAGE} />
      <path d="M48 78 Q54 82 50 86 Q44 84 48 78" fill={SAGE} />
      <path d="M68 76 Q72 80 68 84 Q64 80 68 76" fill={SAGE} />
      {/* Roller axles */}
      <circle cx="14" cy="29" r="3" fill={NAVY} />
      <circle cx="86" cy="29" r="3" fill={NAVY} />
      <circle cx="14" cy="59" r="3" fill={NAVY} />
      <circle cx="86" cy="59" r="3" fill={NAVY} />
    </Frame>
  );
}

function Oxidising(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Tray */}
      <rect x="14" y="38" width="72" height="46" rx="3" fill={WARM_GRAY} />
      <rect x="18" y="42" width="64" height="38" rx="2" fill={CREAM} />
      {/* Half green, half darkened */}
      <rect x="18" y="42" width="32" height="38" rx="2" fill={SAGE} opacity="0.55" stroke="none" />
      <rect x="50" y="42" width="32" height="38" rx="2" fill={NAVY} opacity="0.55" stroke="none" />
      {/* Arrow showing change */}
      <path d="M30 28 L70 28" strokeWidth="2.5" />
      <path d="M64 22 L70 28 L64 34" strokeWidth="2.5" />
      <text x="50" y="20" fontFamily="serif" fontSize="9" textAnchor="middle" fill={NAVY} stroke="none">
        time
      </text>
    </Frame>
  );
}

function FiringDrum(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Drum/oven body */}
      <rect x="20" y="32" width="60" height="44" rx="6" fill={WARM_GRAY} />
      {/* Door */}
      <rect x="28" y="44" width="44" height="22" rx="3" fill={NAVY} />
      {/* Heat indicator */}
      <circle cx="70" cy="38" r="3" fill={MUSTARD} />
      {/* Heat waves below */}
      <path d="M30 84 Q34 80 30 76" stroke={MUSTARD} strokeWidth="2.5" />
      <path d="M50 84 Q54 80 50 76" stroke={MUSTARD} strokeWidth="2.5" />
      <path d="M70 84 Q66 80 70 76" stroke={MUSTARD} strokeWidth="2.5" />
      {/* Stack/chimney */}
      <rect x="40" y="14" width="20" height="14" rx="2" fill={WARM_GRAY} />
      <path d="M44 14 Q48 8 44 2" stroke={WARM_GRAY} opacity="0.6" strokeWidth="3" />
      <path d="M56 14 Q60 8 56 2" stroke={WARM_GRAY} opacity="0.6" strokeWidth="3" />
    </Frame>
  );
}

const stepIllustrations: Record<string, ComponentType<SvgProps>> = {
  "bushes-grow": TeaBushes,
  "leaves-plucked": PluckLeaves,
  withered: Withering,
  rolled: Rolling,
  oxidised: Oxidising,
  fired: FiringDrum,
};

export function TeaStepIllustration({
  stepId,
  ...props
}: SvgProps & { stepId: string }) {
  const Component = stepIllustrations[stepId];
  if (!Component) return null;
  return <Component {...props} />;
}
