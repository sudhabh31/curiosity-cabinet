/**
 * Milk — hero + step illustrations (v2).
 *
 * Design notes for this redraw, vs the v1 pass:
 *   - Each illustration now centres on a recognisable subject. Step 1
 *     shows an actual Holstein cow grazing, not just grass tufts;
 *     step 2 shows the cow with a milking cluster attached, not just
 *     drops over a pail; step 3 shows a real bulk milk tank with a
 *     thermometer instead of a generic blue rectangle.
 *   - Layered fills + a small darker shadow layer per illustration
 *     give shapes physical weight at thumbnail size.
 *   - Per-step composition uses 3–5 colour blocks max so it reads
 *     at the ~60px waypoint thumbnail size as well as the ~200px
 *     hero on the item page.
 *   - Outline rule unchanged: 2.5px navy, rounded ends, all via the
 *     shared Frame component.
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
  TERRACOTTA,
  WARM_GRAY,
  type SvgProps,
} from "./_shared";

/* ---- Hero: a vintage-style glass milk bottle with a cream top ---- */

export function MilkBottleHero(props: SvgProps) {
  return (
    <Frame {...props} title="Milk bottle">
      {/* Soft ground shadow */}
      <ellipse cx="50" cy="92" rx="26" ry="3" fill={NAVY} opacity="0.14" stroke="none" />

      {/* Foil cap top */}
      <rect x="36" y="8" width="28" height="6" rx="1.5" fill={DUSTY_BLUE} />
      <path d="M36 12 L64 12" strokeWidth="1.6" opacity="0.55" />
      {/* Cap collar */}
      <rect x="40" y="14" width="20" height="4" fill={DUSTY_BLUE} />

      {/* Bottle neck */}
      <path d="M40 18 L40 30 Q40 32 42 32 L58 32 Q60 32 60 30 L60 18 Z" fill={OFFWHITE} />

      {/* Shoulder + body */}
      <path
        d="M40 30 Q22 36 22 50 L22 80 Q22 88 30 88 L70 88 Q78 88 78 80 L78 50 Q78 36 60 30 Z"
        fill={OFFWHITE}
      />

      {/* Visible cream line near the top of the body */}
      <path d="M22 44 Q50 42 78 44" strokeWidth="1.6" opacity="0.45" />

      {/* Front label */}
      <rect x="30" y="56" width="40" height="22" rx="3" fill={DUSTY_BLUE} />
      <path d="M36 64 L64 64" stroke={OFFWHITE} strokeWidth="2.5" />
      <path d="M38 70 L62 70" stroke={OFFWHITE} strokeWidth="1.8" opacity="0.7" />
      <path d="M42 75 L58 75" stroke={OFFWHITE} strokeWidth="1.4" opacity="0.55" />

      {/* Glass highlight */}
      <path d="M30 40 L30 80" stroke={OFFWHITE} strokeWidth="2.5" opacity="0.65" />
    </Frame>
  );
}

/* ---- Helper: a small Holstein cow in profile (reused on steps 1 & 2) ----
 * Drawn so the body fills most of the viewBox and the spots read at
 * thumbnail size. The `withMilkingCluster` flag swaps in step 2's
 * milking apparatus.
 */

function HolsteinCow({
  withMilkingCluster = false,
}: {
  withMilkingCluster?: boolean;
}) {
  return (
    <>
      {/* Ground line */}
      <path d="M6 84 L94 84" strokeWidth="2" />

      {/* Body */}
      <path
        d="M16 56 Q14 46 22 44 L66 44 Q78 44 80 56 L80 72 Q80 76 76 76 L20 76 Q16 76 16 72 Z"
        fill={OFFWHITE}
      />
      {/* Black spots — Holstein */}
      <ellipse cx="30" cy="56" rx="6" ry="4" fill={NAVY} />
      <ellipse cx="48" cy="62" rx="7" ry="5" fill={NAVY} />
      <path d="M66 50 Q70 52 72 58 Q68 60 64 58 Z" fill={NAVY} stroke="none" />

      {/* Head — pointed forward (right) */}
      <path
        d="M78 46 Q90 46 90 54 Q90 60 84 62 L80 62 L80 50 Z"
        fill={OFFWHITE}
      />
      {/* Snout band */}
      <path d="M82 58 L90 58" strokeWidth="1.6" opacity="0.55" />
      {/* Ear */}
      <path d="M82 44 Q84 40 88 42 Q88 46 84 46 Z" fill={OFFWHITE} />
      {/* Small horn nub */}
      <path d="M84 42 L86 38" strokeWidth="2" />

      {/* Legs (front + back, simplified) */}
      <rect x="22" y="76" width="4" height="10" fill={OFFWHITE} />
      <rect x="36" y="76" width="4" height="10" fill={OFFWHITE} />
      <rect x="58" y="76" width="4" height="10" fill={OFFWHITE} />
      <rect x="72" y="76" width="4" height="10" fill={OFFWHITE} />

      {/* Tail */}
      <path d="M16 56 Q8 56 8 70" strokeWidth="2.5" />
      <ellipse cx="8" cy="72" rx="2" ry="2.5" fill={NAVY} />

      {/* Udder */}
      <ellipse cx="46" cy="78" rx="8" ry="4" fill={SOFT_PINK} />
      <ellipse cx="46" cy="78" rx="8" ry="4" />

      {withMilkingCluster && (
        <>
          {/* Milking cluster — 4 teat cups hanging below udder */}
          <path d="M42 80 L40 90 M46 80 L46 92 M50 80 L52 90" strokeWidth="2.2" />
          <ellipse cx="40" cy="91" rx="2.2" ry="2" fill={WARM_GRAY} />
          <ellipse cx="46" cy="92" rx="2.2" ry="2" fill={WARM_GRAY} />
          <ellipse cx="52" cy="91" rx="2.2" ry="2" fill={WARM_GRAY} />
          {/* Collection tube going off to the side */}
          <path d="M52 92 Q66 92 70 86" strokeWidth="2.2" />
        </>
      )}
    </>
  );
}

function CowGrazing(props: SvgProps) {
  return (
    <Frame {...props} title="Cow grazing">
      <HolsteinCow />
      {/* Grass tufts under the cow's nose */}
      <path d="M88 84 L88 78 M92 84 L92 80 M84 84 L84 78" stroke={SAGE} strokeWidth="2.5" />
      <path d="M14 84 L14 78 M10 84 L10 76 M18 84 L18 80" stroke={SAGE} strokeWidth="2.5" />
    </Frame>
  );
}

function MilkingMachine(props: SvgProps) {
  return (
    <Frame {...props} title="Milking machine attached">
      <HolsteinCow withMilkingCluster />
      {/* Pulsator hint (small motor box to the right) */}
      <rect x="76" y="78" width="10" height="8" rx="1.5" fill={DUSTY_BLUE} />
    </Frame>
  );
}

/* ---- Step 3: bulk milk tank with thermometer ---- */

function BulkTank(props: SvgProps) {
  return (
    <Frame {...props} title="Bulk milk tank">
      {/* Tank body — horizontal cylinder */}
      <rect x="14" y="34" width="72" height="40" rx="20" fill={DUSTY_BLUE} />
      {/* Tank highlight */}
      <path d="M20 40 L20 68" stroke={OFFWHITE} strokeWidth="3" opacity="0.55" />

      {/* Inspection window with milk visible */}
      <circle cx="50" cy="54" r="11" fill={OFFWHITE} />
      <circle cx="50" cy="54" r="11" />
      {/* Milk level inside the window */}
      <path
        d="M40 56 Q50 53 60 56 L60 64 L40 64 Z"
        fill={OFFWHITE}
      />
      <path d="M40 56 Q50 53 60 56" strokeWidth="1.5" />

      {/* Thermometer dial at top-right */}
      <circle cx="76" cy="28" r="6" fill={CREAM} />
      <path d="M76 22 L76 28 L80 28" strokeWidth="1.6" />

      {/* Output pipe / valve at bottom-left */}
      <rect x="6" y="64" width="10" height="6" rx="1.5" fill={WARM_GRAY} />

      {/* Floor support legs */}
      <rect x="22" y="74" width="4" height="12" fill={WARM_GRAY} />
      <rect x="74" y="74" width="4" height="12" fill={WARM_GRAY} />

      {/* Tiny snowflake to signal cold */}
      <g stroke={OFFWHITE} strokeWidth="1.6">
        <path d="M82 50 L82 60" />
        <path d="M78 55 L86 55" />
        <path d="M79 51 L85 59" />
        <path d="M85 51 L79 59" />
      </g>
    </Frame>
  );
}

/* ---- Step 4: refrigerated tanker truck ---- */

function Truck(props: SvgProps) {
  return (
    <Frame {...props} title="Refrigerated tanker truck">
      {/* Ground */}
      <path d="M4 82 L96 82" strokeWidth="2" />

      {/* Tanker body — round-ended */}
      <rect x="28" y="34" width="62" height="32" rx="16" fill={OFFWHITE} />
      <path d="M32 38 L32 62" strokeWidth="1.6" opacity="0.4" />
      <path d="M86 38 L86 62" strokeWidth="1.6" opacity="0.4" />

      {/* Cab */}
      <path d="M6 50 L6 66 L28 66 L28 42 L20 42 Z" fill={DUSTY_BLUE} />
      {/* Window */}
      <rect x="10" y="46" width="14" height="10" rx="2" fill={OFFWHITE} />

      {/* Tanker label band */}
      <rect x="42" y="46" width="36" height="8" fill={DUSTY_BLUE} />
      <path d="M48 50 L52 50 M58 50 L72 50" stroke={OFFWHITE} strokeWidth="1.8" />

      {/* Refrigeration unit on top of cab */}
      <rect x="10" y="36" width="14" height="6" rx="1.5" fill={WARM_GRAY} />

      {/* Wheels */}
      <circle cx="18" cy="76" r="6" fill={NAVY} />
      <circle cx="18" cy="76" r="2" fill={OFFWHITE} />
      <circle cx="48" cy="76" r="6" fill={NAVY} />
      <circle cx="48" cy="76" r="2" fill={OFFWHITE} />
      <circle cx="78" cy="76" r="6" fill={NAVY} />
      <circle cx="78" cy="76" r="2" fill={OFFWHITE} />
    </Frame>
  );
}

/* ---- Step 5: pasteurisation — heated tube + thermometer + clock ---- */

function Pasteuriser(props: SvgProps) {
  return (
    <Frame {...props} title="Pasteurisation tube">
      {/* Heat-exchanger tube — looped */}
      <path
        d="M14 32 L70 32 Q82 32 82 42 Q82 52 70 52 L24 52 Q12 52 12 62 Q12 72 24 72 L86 72"
        stroke={WARM_GRAY}
        strokeWidth="6"
        fill="none"
      />
      <path
        d="M14 32 L70 32 Q82 32 82 42 Q82 52 70 52 L24 52 Q12 52 12 62 Q12 72 24 72 L86 72"
      />
      {/* Inlet (cold) */}
      <rect x="4" y="28" width="12" height="8" rx="1.5" fill={DUSTY_BLUE} />
      {/* Outlet (hot then re-cooled) */}
      <rect x="84" y="68" width="12" height="8" rx="1.5" fill={DUSTY_BLUE} />
      {/* Heat coils underneath the second pass */}
      <g stroke={TERRACOTTA} strokeWidth="2" opacity="0.85">
        <path d="M22 80 Q26 76 30 80 Q34 84 38 80 Q42 76 46 80 Q50 84 54 80 Q58 76 62 80 Q66 84 70 80" />
      </g>
      {/* Thermometer dial */}
      <circle cx="50" cy="14" r="7" fill={CREAM} />
      <circle cx="50" cy="14" r="7" />
      <path d="M50 8 L50 14 L54 16" strokeWidth="1.8" />
      {/* Dial tick marks */}
      <path d="M50 8 L50 9 M56 14 L55 14 M44 14 L45 14" strokeWidth="1" opacity="0.6" />
    </Frame>
  );
}

/* ---- Step 6: milk carton on a conveyor ---- */

function Bottled(props: SvgProps) {
  return (
    <Frame {...props} title="Cartoned and packed">
      {/* Conveyor belt */}
      <rect x="6" y="80" width="88" height="6" rx="2" fill={WARM_GRAY} />
      <path d="M14 80 L14 86 M30 80 L30 86 M46 80 L46 86 M62 80 L62 86 M78 80 L78 86" strokeWidth="1.4" opacity="0.5" />

      {/* Carton 1 — front, full colour */}
      <g transform="translate(28 0)">
        {/* Top fold */}
        <path d="M0 18 L24 18 L20 8 L4 8 Z" fill={OFFWHITE} />
        <path d="M4 8 L20 8" strokeWidth="1.5" opacity="0.55" />
        {/* Carton body */}
        <rect x="0" y="18" width="24" height="62" fill={OFFWHITE} />
        {/* Side fold line */}
        <path d="M24 18 L24 80" strokeWidth="1.6" opacity="0.45" />
        {/* Label band */}
        <rect x="2" y="42" width="20" height="20" fill={DUSTY_BLUE} />
        <path d="M5 50 L19 50" stroke={OFFWHITE} strokeWidth="2" />
        <path d="M6 56 L18 56" stroke={OFFWHITE} strokeWidth="1.5" opacity="0.7" />
        {/* Cap */}
        <rect x="10" y="2" width="4" height="6" rx="1" fill={MUSTARD} />
      </g>

      {/* Carton 2 — back-left, slightly smaller */}
      <g transform="translate(8 12)">
        <path d="M0 14 L16 14 L13 7 L3 7 Z" fill={OFFWHITE} opacity="0.85" />
        <rect x="0" y="14" width="16" height="52" fill={OFFWHITE} opacity="0.85" />
        <rect x="2" y="32" width="12" height="14" fill={DUSTY_BLUE} opacity="0.85" />
      </g>

      {/* Carton 3 — back-right */}
      <g transform="translate(76 12)">
        <path d="M0 14 L16 14 L13 7 L3 7 Z" fill={OFFWHITE} opacity="0.85" />
        <rect x="0" y="14" width="16" height="52" fill={OFFWHITE} opacity="0.85" />
        <rect x="2" y="32" width="12" height="14" fill={DUSTY_BLUE} opacity="0.85" />
      </g>
    </Frame>
  );
}

const stepIllustrations: Record<string, ComponentType<SvgProps>> = {
  grass: CowGrazing,
  milking: MilkingMachine,
  chilled: BulkTank,
  trucked: Truck,
  pasteurised: Pasteuriser,
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
