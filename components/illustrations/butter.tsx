/**
 * Butter — hero + step illustrations.
 */

import type { ComponentType } from "react";
import {
  Frame,
  CREAM,
  DUSTY_BLUE,
  MUSTARD,
  NAVY,
  OFFWHITE,
  WARM_GRAY,
  type SvgProps,
} from "./_shared";

export function ButterBlockHero(props: SvgProps) {
  return (
    <Frame {...props} title="Block of butter">
      {/* Wrapper paper behind */}
      <rect x="14" y="46" width="72" height="38" rx="3" fill={CREAM} />
      {/* Block of butter — top */}
      <path d="M22 30 L78 30 L70 54 L18 54 Z" fill={MUSTARD} />
      {/* Block side */}
      <rect x="18" y="50" width="64" height="22" rx="2" fill={MUSTARD} />
      {/* Highlights */}
      <path d="M22 32 L74 32" strokeWidth="1.8" opacity="0.55" />
      <path d="M22 54 L78 54" strokeWidth="2" opacity="0.55" />
      {/* Wrapper label */}
      <rect x="34" y="60" width="32" height="10" rx="2" fill={OFFWHITE} />
      <path d="M40 65 L60 65" strokeWidth="1.5" opacity="0.6" />
      {/* Pat of butter sparkle */}
      <path d="M82 22 L86 26 M86 22 L82 26" stroke={MUSTARD} strokeWidth="2" />
    </Frame>
  );
}

function CreamRising(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Glass jar */}
      <rect x="22" y="18" width="56" height="72" rx="4" fill={OFFWHITE} opacity="0.5" stroke="none" />
      <rect x="22" y="18" width="56" height="72" rx="4" />
      {/* Cream layer on top */}
      <rect x="24" y="22" width="52" height="20" fill={CREAM} stroke="none" />
      <path d="M24 42 L76 42" strokeWidth="2" />
      {/* Milk below */}
      <rect x="24" y="42" width="52" height="46" fill={OFFWHITE} stroke="none" />
      {/* Arrow showing upward separation */}
      <path d="M50 60 L50 30" strokeWidth="2.5" />
      <path d="M44 36 L50 30 L56 36" strokeWidth="2.5" />
      {/* Label */}
      <text x="84" y="32" fontFamily="serif" fontSize="6" fill={NAVY} stroke="none">cream</text>
      <text x="84" y="68" fontFamily="serif" fontSize="6" fill={NAVY} stroke="none">milk</text>
    </Frame>
  );
}

function CreamCooled(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Bowl */}
      <path d="M14 48 Q14 80 50 82 Q86 80 86 48 Z" fill={WARM_GRAY} />
      <ellipse cx="50" cy="48" rx="36" ry="6" fill={CREAM} />
      <ellipse cx="50" cy="48" rx="36" ry="6" />
      {/* Ice cubes around */}
      <rect x="20" y="20" width="12" height="12" rx="2" fill={DUSTY_BLUE} opacity="0.65" />
      <rect x="44" y="14" width="12" height="12" rx="2" fill={DUSTY_BLUE} opacity="0.65" />
      <rect x="68" y="22" width="12" height="12" rx="2" fill={DUSTY_BLUE} opacity="0.65" />
      <rect x="20" y="20" width="12" height="12" rx="2" />
      <rect x="44" y="14" width="12" height="12" rx="2" />
      <rect x="68" y="22" width="12" height="12" rx="2" />
    </Frame>
  );
}

function Churning(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Churn body */}
      <path d="M30 28 L70 28 L66 84 L34 84 Z" fill={WARM_GRAY} />
      {/* Lid */}
      <rect x="28" y="22" width="44" height="6" rx="2" fill={NAVY} />
      {/* Plunger sticking up */}
      <rect x="46" y="6" width="8" height="20" rx="2" fill={WARM_GRAY} />
      <rect x="44" y="2" width="12" height="6" rx="2" fill={NAVY} />
      {/* Motion lines */}
      <path d="M40 18 L36 14" strokeWidth="2" />
      <path d="M60 18 L64 14" strokeWidth="2" />
      {/* Splashes */}
      <circle cx="20" cy="40" r="1.5" fill={CREAM} />
      <circle cx="78" cy="46" r="1.5" fill={CREAM} />
      <circle cx="24" cy="52" r="1.2" fill={CREAM} />
    </Frame>
  );
}

function ButtermilkDrained(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Bowl with butter lumps */}
      <path d="M14 50 Q14 78 50 80 Q86 78 86 50 Z" fill={WARM_GRAY} />
      <ellipse cx="50" cy="50" rx="36" ry="5" fill={CREAM} />
      <ellipse cx="50" cy="50" rx="36" ry="5" />
      {/* Yellow butter lumps inside */}
      <ellipse cx="38" cy="56" rx="8" ry="5" fill={MUSTARD} />
      <ellipse cx="56" cy="58" rx="10" ry="5" fill={MUSTARD} />
      <ellipse cx="44" cy="64" rx="6" ry="3.5" fill={MUSTARD} />
      {/* Buttermilk pouring out */}
      <path d="M86 56 L96 76 L92 80 L82 60 Z" fill={OFFWHITE} />
      <path d="M86 56 L96 76" strokeWidth="2" />
      <path d="M82 60 L92 80" strokeWidth="2" />
      {/* Drips */}
      <ellipse cx="98" cy="84" rx="2" ry="3" fill={OFFWHITE} />
    </Frame>
  );
}

function WashedShaped(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Cutting board */}
      <rect x="10" y="56" width="80" height="22" rx="3" fill={CREAM} />
      <path d="M10 66 L90 66" strokeWidth="1.4" opacity="0.4" />
      {/* Butter block being shaped */}
      <path d="M28 28 L72 28 L68 56 L32 56 Z" fill={MUSTARD} />
      <path d="M28 28 L32 56" strokeWidth="1.8" opacity="0.55" />
      <path d="M72 28 L68 56" strokeWidth="1.8" opacity="0.55" />
      {/* Paddle/molder */}
      <rect x="18" y="14" width="22" height="6" rx="1.5" fill={WARM_GRAY} />
      <rect x="60" y="14" width="22" height="6" rx="1.5" fill={WARM_GRAY} />
      {/* Water drops */}
      <ellipse cx="20" cy="38" rx="2" ry="3" fill={DUSTY_BLUE} opacity="0.7" />
      <ellipse cx="84" cy="40" rx="2" ry="3" fill={DUSTY_BLUE} opacity="0.7" />
    </Frame>
  );
}

function SaltedPacked(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Wrapped butter package */}
      <rect x="14" y="32" width="72" height="50" rx="3" fill={CREAM} />
      {/* Butter visible inside */}
      <rect x="24" y="44" width="52" height="26" fill={MUSTARD} />
      {/* Wrapper folds */}
      <path d="M14 32 L86 32" strokeWidth="1.5" opacity="0.55" />
      <path d="M14 82 L86 82" strokeWidth="1.5" opacity="0.55" />
      <path d="M50 32 L50 44" strokeWidth="1.5" opacity="0.55" />
      <path d="M50 70 L50 82" strokeWidth="1.5" opacity="0.55" />
      {/* Label */}
      <rect x="32" y="50" width="36" height="14" rx="2" fill={OFFWHITE} />
      <path d="M38 56 L62 56" strokeWidth="2" opacity="0.7" />
      <path d="M40 60 L60 60" strokeWidth="1.4" opacity="0.55" />
      {/* Salt sprinkle */}
      <circle cx="22" cy="18" r="1" fill={NAVY} />
      <circle cx="28" cy="22" r="1" fill={NAVY} />
      <circle cx="36" cy="16" r="1" fill={NAVY} />
      <circle cx="78" cy="20" r="1" fill={NAVY} />
    </Frame>
  );
}

const stepIllustrations: Record<string, ComponentType<SvgProps>> = {
  "cream-rises": CreamRising,
  "cream-cooled": CreamCooled,
  churned: Churning,
  "buttermilk-drained": ButtermilkDrained,
  "washed-shaped": WashedShaped,
  "salted-packed": SaltedPacked,
};

export function ButterStepIllustration({
  stepId,
  ...props
}: SvgProps & { stepId: string }) {
  const Component = stepIllustrations[stepId];
  if (!Component) return null;
  return <Component {...props} />;
}
