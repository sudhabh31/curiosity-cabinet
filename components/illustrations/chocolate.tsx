/**
 * Chocolate — hand-authored SVG placeholders.
 *
 * One SVG per step of the chocolate origin flow, plus the hero. These
 * are intentionally minimal flat vector illustrations that follow the
 * locked visual rules:
 *
 *   - 2-3px navy outlines, rounded ends/joins
 *   - Chunky shapes; no spindly thin elements
 *   - Palette only (terracotta, mustard, sage, dusty-blue, soft-pink,
 *     warm-gray, navy, off-white) — never pure white or pure black
 *   - No faces on objects
 *   - Slight hand-drawn imperfection (offset shapes, not perfectly
 *     geometric)
 *
 * When real AI-generated artwork lands, drop SVGs under
 * /public/illustrations/chocolate/ and set `heroIllustration` or per-step
 * `illustration` on the item. The components prefer the real asset.
 */

import type { ComponentType } from "react";
import {
  Frame,
  NAVY,
  OFFWHITE,
  TERRACOTTA,
  MUSTARD,
  SAGE,
  DUSTY_BLUE,
  SOFT_PINK,
  WARM_GRAY,
  type SvgProps,
} from "./_shared";

/* ---- Hero: a single ripe cocoa pod with a leaf ---- */

export function CocoaPodHero(props: SvgProps) {
  return (
    <Frame {...props} title="Cocoa pod">
      {/* Soft ground shadow */}
      <ellipse cx="50" cy="88" rx="30" ry="3.5" fill={NAVY} opacity="0.12" stroke="none" />

      {/* Leaf — sage with veins */}
      <path
        d="M64 20 Q86 28 84 50 Q82 60 70 60 Q58 60 60 46 Q60 30 64 20 Z"
        fill={SAGE}
      />
      <path d="M68 24 L74 56" stroke={NAVY} strokeWidth="1.8" opacity="0.55" />

      {/* Stem */}
      <path d="M50 18 Q52 14 58 16" />

      {/* Pod body — football shape, terracotta with mustard ridges */}
      <path
        d="M50 18 C30 22 22 44 30 70 C36 86 64 86 70 70 C78 44 70 22 50 18 Z"
        fill={TERRACOTTA}
      />
      {/* Ridges along the pod */}
      <path d="M40 26 Q38 50 42 76" stroke={NAVY} strokeWidth="1.8" opacity="0.65" />
      <path d="M50 24 Q50 50 50 78" stroke={NAVY} strokeWidth="1.8" opacity="0.65" />
      <path d="M60 26 Q62 50 58 76" stroke={NAVY} strokeWidth="1.8" opacity="0.65" />

      {/* Mustard highlight along one side */}
      <path
        d="M50 22 C36 26 30 42 34 64"
        stroke={MUSTARD}
        strokeWidth="3"
        opacity="0.55"
        fill="none"
      />
    </Frame>
  );
}

/* ---- Step 1: cocoa tree with flowers on the trunk (cauliflory) ---- */

function CocoaTreeFlowers(props: SvgProps) {
  return (
    <Frame {...props} title="Cocoa tree with flowers">
      {/* Foliage clusters */}
      <ellipse cx="50" cy="26" rx="28" ry="14" fill={SAGE} />
      <ellipse cx="30" cy="22" rx="12" ry="9" fill={SAGE} />
      <ellipse cx="70" cy="22" rx="12" ry="9" fill={SAGE} />

      {/* Trunk */}
      <rect x="44" y="38" width="12" height="44" rx="4" fill={WARM_GRAY} />

      {/* Flowers on trunk (cauliflory) */}
      <circle cx="42" cy="50" r="3.5" fill={SOFT_PINK} />
      <circle cx="58" cy="60" r="3.5" fill={OFFWHITE} />
      <circle cx="42" cy="70" r="3" fill={SOFT_PINK} />
      <circle cx="58" cy="78" r="2.5" fill={OFFWHITE} />

      {/* Ground line */}
      <path d="M22 84 Q50 90 78 84" fill="none" />
    </Frame>
  );
}

/* ---- Step 2: colourful pods ripening on a branch ---- */

function PodsRipening(props: SvgProps) {
  return (
    <Frame {...props} title="Cocoa pods ripening">
      {/* Branch */}
      <path d="M14 30 Q50 22 86 30" stroke={SAGE} strokeWidth="3" />
      {/* Leaf */}
      <path d="M22 24 Q12 16 18 8 Q30 10 28 24" fill={SAGE} />

      {/* Pod 1 — terracotta */}
      <path d="M30 32 Q26 32 28 36" />
      <ellipse cx="32" cy="52" rx="9" ry="18" fill={TERRACOTTA} />
      <path d="M28 38 L36 68" stroke={NAVY} strokeWidth="1.5" opacity="0.6" />

      {/* Pod 2 — mustard */}
      <path d="M54 30 Q52 32 56 34" />
      <ellipse cx="56" cy="58" rx="11" ry="22" fill={MUSTARD} />
      <path d="M52 40 L60 76" stroke={NAVY} strokeWidth="1.5" opacity="0.6" />

      {/* Pod 3 — soft pink (unripe) */}
      <path d="M76 32 Q74 34 78 36" />
      <ellipse cx="78" cy="50" rx="8" ry="14" fill={SOFT_PINK} />
      <path d="M75 40 L81 60" stroke={NAVY} strokeWidth="1.4" opacity="0.55" />
    </Frame>
  );
}

/* ---- Step 3: split pod with beans inside ---- */

function BeansScooped(props: SvgProps) {
  return (
    <Frame {...props} title="Pod split open, beans inside">
      {/* Bottom half (interior visible) */}
      <path
        d="M14 50 C18 80 82 80 86 50 C80 56 70 60 50 60 C30 60 20 56 14 50 Z"
        fill={OFFWHITE}
      />
      {/* Bottom shell rim */}
      <path d="M14 50 C20 56 30 60 50 60 C70 60 80 56 86 50" fill={TERRACOTTA} />

      {/* Top half */}
      <path
        d="M14 50 C18 28 36 18 50 18 C64 18 82 28 86 50 C80 44 70 40 50 40 C30 40 20 44 14 50 Z"
        fill={TERRACOTTA}
      />
      {/* Ridge */}
      <path d="M50 18 L50 38" stroke={NAVY} strokeWidth="1.6" opacity="0.55" />

      {/* Beans inside the bottom */}
      <ellipse cx="36" cy="56" rx="5" ry="3.5" fill={NAVY} />
      <ellipse cx="48" cy="58" rx="5" ry="3.5" fill={NAVY} />
      <ellipse cx="60" cy="56" rx="5" ry="3.5" fill={NAVY} />
      <ellipse cx="42" cy="62" rx="4" ry="3" fill={NAVY} opacity="0.85" />
      <ellipse cx="54" cy="62" rx="4" ry="3" fill={NAVY} opacity="0.85" />
    </Frame>
  );
}

/* ---- Step 4: fermenting in banana leaves ---- */

function FermentingInLeaves(props: SvgProps) {
  return (
    <Frame {...props} title="Beans fermenting in banana leaves">
      {/* Banana leaf */}
      <path
        d="M10 60 Q14 36 50 30 Q86 36 90 60 Q86 82 50 84 Q14 82 10 60 Z"
        fill={SAGE}
      />
      {/* Leaf midrib */}
      <path d="M14 60 L86 60" stroke={NAVY} strokeWidth="1.8" opacity="0.55" />

      {/* Mound of beans */}
      <path
        d="M28 60 Q34 42 50 42 Q66 42 72 60 Z"
        fill={WARM_GRAY}
      />
      {/* Individual beans on the mound */}
      <ellipse cx="40" cy="54" rx="4" ry="3" fill={NAVY} />
      <ellipse cx="50" cy="50" rx="4" ry="3" fill={NAVY} />
      <ellipse cx="60" cy="54" rx="4" ry="3" fill={NAVY} />
      <ellipse cx="44" cy="60" rx="3.5" ry="2.5" fill={NAVY} opacity="0.9" />
      <ellipse cx="56" cy="60" rx="3.5" ry="2.5" fill={NAVY} opacity="0.9" />

      {/* Wisps of warmth */}
      <path
        d="M36 36 Q40 30 36 24"
        stroke={DUSTY_BLUE}
        strokeWidth="2"
        opacity="0.6"
      />
      <path
        d="M64 36 Q60 30 64 24"
        stroke={DUSTY_BLUE}
        strokeWidth="2"
        opacity="0.6"
      />
    </Frame>
  );
}

/* ---- Step 5: drying in the sun ---- */

function SunDried(props: SvgProps) {
  return (
    <Frame {...props} title="Beans drying in the sun">
      {/* Sun */}
      <circle cx="50" cy="32" r="16" fill={MUSTARD} />
      {/* Sun rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 50 + Math.cos(rad) * 22;
        const y1 = 32 + Math.sin(rad) * 22;
        const x2 = 50 + Math.cos(rad) * 28;
        const y2 = 32 + Math.sin(rad) * 28;
        return (
          <path
            key={deg}
            d={`M${x1} ${y1} L${x2} ${y2}`}
            stroke={MUSTARD}
            strokeWidth="3"
          />
        );
      })}

      {/* Drying tray */}
      <path d="M10 78 L90 78 L84 88 L16 88 Z" fill={WARM_GRAY} />
      {/* Tray slats */}
      <path d="M22 78 L20 88" stroke={NAVY} strokeWidth="1.5" opacity="0.5" />
      <path d="M50 78 L50 88" stroke={NAVY} strokeWidth="1.5" opacity="0.5" />
      <path d="M78 78 L80 88" stroke={NAVY} strokeWidth="1.5" opacity="0.5" />

      {/* Beans scattered on tray */}
      <ellipse cx="26" cy="74" rx="3.5" ry="2.5" fill={NAVY} />
      <ellipse cx="42" cy="74" rx="3.5" ry="2.5" fill={NAVY} />
      <ellipse cx="58" cy="74" rx="3.5" ry="2.5" fill={NAVY} />
      <ellipse cx="74" cy="74" rx="3.5" ry="2.5" fill={NAVY} />
    </Frame>
  );
}

/* ---- Step 6: roasted beans, ground into liquor ---- */

function RoastedAndGround(props: SvgProps) {
  return (
    <Frame {...props} title="Beans roasted and ground">
      {/* Bowl */}
      <path
        d="M14 50 Q14 78 50 80 Q86 78 86 50 Z"
        fill={WARM_GRAY}
      />
      {/* Bowl rim ellipse — sits ON TOP, gives depth */}
      <ellipse cx="50" cy="50" rx="36" ry="6" fill={NAVY} opacity="0.18" stroke="none" />
      <ellipse cx="50" cy="50" rx="36" ry="6" />

      {/* Pool of chocolate liquor inside */}
      <ellipse cx="50" cy="50" rx="30" ry="4" fill={TERRACOTTA} />
      <path
        d="M22 50 Q22 60 50 62 Q78 60 78 50"
        fill={NAVY}
        opacity="0.78"
      />

      {/* A few beans nearby */}
      <ellipse cx="22" cy="32" rx="4" ry="3" fill={NAVY} />
      <ellipse cx="32" cy="28" rx="4" ry="3" fill={NAVY} />
      <ellipse cx="76" cy="30" rx="4" ry="3" fill={NAVY} />
    </Frame>
  );
}

/* ---- Step 7: chocolate bar moulded ---- */

function ChocolateBar(props: SvgProps) {
  return (
    <Frame {...props} title="Moulded chocolate bar">
      {/* Bar body — slight tilt for hand-drawn feel */}
      <g transform="rotate(-6 50 50)">
        <rect x="14" y="32" width="72" height="40" rx="5" fill={TERRACOTTA} />
        {/* Highlight */}
        <rect x="16" y="34" width="68" height="4" rx="2" fill={MUSTARD} opacity="0.6" stroke="none" />
        {/* Segments */}
        <path d="M14 52 L86 52" strokeWidth="2" />
        <path d="M32 32 L32 72" strokeWidth="2" />
        <path d="M50 32 L50 72" strokeWidth="2" />
        <path d="M68 32 L68 72" strokeWidth="2" />
      </g>
      {/* Sparkles */}
      <path d="M16 18 L20 22" />
      <path d="M82 22 L86 18" />
      <path d="M84 50 L88 50" />
    </Frame>
  );
}

/* ---- Registry: step.id → component ---- */

const stepIllustrations: Record<string, ComponentType<SvgProps>> = {
  "tree-flowers": CocoaTreeFlowers,
  "pods-ripen": PodsRipening,
  "beans-scooped": BeansScooped,
  fermented: FermentingInLeaves,
  "sun-dried": SunDried,
  "roasted-ground": RoastedAndGround,
  "mixed-molded": ChocolateBar,
};

export function ChocolateStepIllustration({
  stepId,
  ...props
}: SvgProps & { stepId: string }) {
  const Component = stepIllustrations[stepId];
  if (!Component) return null;
  return <Component {...props} />;
}

export const HAS_CHOCOLATE_HERO = true;
