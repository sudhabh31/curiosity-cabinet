/**
 * Eggs — hero + step illustrations.
 */

import type { ComponentType } from "react";
import {
  Frame,
  CREAM,
  DUSTY_BLUE,
  MUSTARD,
  NAVY,
  OFFWHITE,
  SOFT_PINK,
  TERRACOTTA,
  WARM_GRAY,
  type SvgProps,
} from "./_shared";

export function EggHero(props: SvgProps) {
  return (
    <Frame {...props} title="Egg in a cup">
      {/* Egg cup */}
      <path d="M30 64 Q30 86 50 88 Q70 86 70 64 Z" fill={DUSTY_BLUE} />
      <ellipse cx="50" cy="64" rx="20" ry="4" fill={SOFT_PINK} />
      <ellipse cx="50" cy="64" rx="20" ry="4" />
      {/* Egg */}
      <ellipse cx="50" cy="46" rx="20" ry="26" fill={OFFWHITE} />
      {/* Highlight */}
      <ellipse cx="42" cy="34" rx="5" ry="8" fill={CREAM} opacity="0.8" stroke="none" />
      {/* Tiny speckles */}
      <circle cx="56" cy="32" r="0.8" fill={WARM_GRAY} />
      <circle cx="44" cy="50" r="0.6" fill={WARM_GRAY} />
      <circle cx="58" cy="54" r="0.7" fill={WARM_GRAY} />
      <circle cx="50" cy="38" r="0.6" fill={WARM_GRAY} />
    </Frame>
  );
}

function HenEating(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Hen body */}
      <ellipse cx="48" cy="56" rx="26" ry="20" fill={OFFWHITE} />
      {/* Head */}
      <circle cx="72" cy="42" r="10" fill={OFFWHITE} />
      {/* Comb (the red bit) */}
      <path d="M68 32 L70 26 L72 30 L74 24 L76 30 L78 26 L80 34" stroke={TERRACOTTA} strokeWidth="3" />
      {/* Beak */}
      <path d="M82 42 L88 44 L82 46 Z" fill={MUSTARD} />
      {/* Wing */}
      <path d="M34 56 Q40 48 50 50 Q56 56 50 64 Q40 66 34 60 Z" fill={CREAM} />
      <path d="M40 52 L46 60" strokeWidth="1.5" opacity="0.6" />
      <path d="M44 50 L50 60" strokeWidth="1.5" opacity="0.6" />
      {/* Legs */}
      <path d="M40 74 L40 84" strokeWidth="3" stroke={MUSTARD} />
      <path d="M56 74 L56 84" strokeWidth="3" stroke={MUSTARD} />
      <path d="M36 84 L44 84" strokeWidth="2.5" stroke={MUSTARD} />
      <path d="M52 84 L60 84" strokeWidth="2.5" stroke={MUSTARD} />
      {/* Tail */}
      <path d="M20 50 Q14 44 14 56 Q18 60 24 56" fill={WARM_GRAY} />
      {/* Grain on ground */}
      <circle cx="84" cy="84" r="1.5" fill={MUSTARD} />
      <circle cx="88" cy="86" r="1.2" fill={MUSTARD} />
      <circle cx="80" cy="86" r="1" fill={MUSTARD} />
    </Frame>
  );
}

function YolkForms(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Body outline (cross-section feel) */}
      <ellipse cx="50" cy="50" rx="38" ry="32" fill={SOFT_PINK} opacity="0.35" stroke="none" />
      <ellipse cx="50" cy="50" rx="38" ry="32" />
      {/* Small yolks at various sizes (ovary representation) */}
      <circle cx="28" cy="40" r="3" fill={MUSTARD} />
      <circle cx="36" cy="34" r="4" fill={MUSTARD} />
      <circle cx="48" cy="32" r="6" fill={MUSTARD} />
      <circle cx="64" cy="46" r="11" fill={MUSTARD} />
      {/* Highlight on the big yolk */}
      <ellipse cx="62" cy="42" rx="2.5" ry="3" fill={CREAM} stroke="none" />
      {/* Tiny yolks */}
      <circle cx="32" cy="58" r="2" fill={MUSTARD} />
      <circle cx="44" cy="62" r="2" fill={MUSTARD} />
    </Frame>
  );
}

function WhiteWraps(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Egg cross-section */}
      <ellipse cx="50" cy="50" rx="32" ry="40" fill={OFFWHITE} />
      {/* Layered whites */}
      <ellipse cx="50" cy="50" rx="22" ry="28" fill={CREAM} stroke="none" />
      <ellipse cx="50" cy="50" rx="22" ry="28" strokeWidth="1.5" opacity="0.55" />
      <ellipse cx="50" cy="50" rx="14" ry="18" fill={OFFWHITE} stroke="none" />
      <ellipse cx="50" cy="50" rx="14" ry="18" strokeWidth="1.5" opacity="0.55" />
      {/* Yolk in center */}
      <circle cx="50" cy="50" r="10" fill={MUSTARD} />
      {/* Chalaza twist */}
      <path d="M50 40 Q44 44 50 50" strokeWidth="1.5" opacity="0.7" />
      <path d="M50 60 Q56 56 50 50" strokeWidth="1.5" opacity="0.7" />
    </Frame>
  );
}

function ShellHardens(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Solid egg with shell highlighted */}
      <ellipse cx="50" cy="50" rx="32" ry="42" fill={OFFWHITE} />
      {/* Shell texture dots */}
      <circle cx="36" cy="32" r="0.8" fill={WARM_GRAY} />
      <circle cx="58" cy="28" r="0.8" fill={WARM_GRAY} />
      <circle cx="42" cy="48" r="0.6" fill={WARM_GRAY} />
      <circle cx="60" cy="56" r="0.7" fill={WARM_GRAY} />
      <circle cx="38" cy="68" r="0.6" fill={WARM_GRAY} />
      <circle cx="54" cy="72" r="0.7" fill={WARM_GRAY} />
      {/* Calcium label arrows */}
      <path d="M84 42 L74 46" strokeWidth="1.8" />
      <path d="M80 38 L84 42 L80 46" strokeWidth="1.8" />
      <text x="86" y="44" fontFamily="serif" fontSize="6" fill={NAVY} stroke="none">Ca</text>
      <path d="M16 60 L26 56" strokeWidth="1.8" />
      <path d="M20 56 L16 60 L20 64" strokeWidth="1.8" />
    </Frame>
  );
}

function Laid(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Nest */}
      <ellipse cx="50" cy="68" rx="36" ry="16" fill={MUSTARD} opacity="0.5" stroke="none" />
      <ellipse cx="50" cy="68" rx="36" ry="16" />
      {/* Straw strokes */}
      <path d="M18 62 L24 66" strokeWidth="2" stroke={MUSTARD} />
      <path d="M28 60 L32 66" strokeWidth="2" stroke={MUSTARD} />
      <path d="M68 60 L72 66" strokeWidth="2" stroke={MUSTARD} />
      <path d="M78 62 L82 66" strokeWidth="2" stroke={MUSTARD} />
      {/* Eggs in the nest */}
      <ellipse cx="36" cy="64" rx="8" ry="10" fill={OFFWHITE} />
      <ellipse cx="50" cy="60" rx="8" ry="10" fill={OFFWHITE} />
      <ellipse cx="64" cy="64" rx="8" ry="10" fill={OFFWHITE} />
    </Frame>
  );
}

function CollectedEggs(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Carton */}
      <rect x="10" y="34" width="80" height="50" rx="3" fill={WARM_GRAY} />
      {/* Carton cells */}
      {[20, 38, 56, 74].map((x, col) => (
        <g key={col}>
          {/* Top row */}
          <circle cx={x + 4} cy={48} r="9" fill={CREAM} />
          <ellipse cx={x + 4} cy={48} rx="6" ry="7" fill={OFFWHITE} />
          {/* Bottom row */}
          <circle cx={x + 4} cy={70} r="9" fill={CREAM} />
          <ellipse cx={x + 4} cy={70} rx="6" ry="7" fill={OFFWHITE} />
        </g>
      ))}
      {/* Carton lid hint */}
      <path d="M10 34 L90 34 L86 26 L14 26 Z" fill={WARM_GRAY} />
    </Frame>
  );
}

const stepIllustrations: Record<string, ComponentType<SvgProps>> = {
  "hen-eats": HenEating,
  "yolk-forms": YolkForms,
  "white-wraps": WhiteWraps,
  "shell-builds": ShellHardens,
  laid: Laid,
  collected: CollectedEggs,
};

export function EggsStepIllustration({
  stepId,
  ...props
}: SvgProps & { stepId: string }) {
  const Component = stepIllustrations[stepId];
  if (!Component) return null;
  return <Component {...props} />;
}
