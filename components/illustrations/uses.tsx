/**
 * "In everyday life" use icons.
 *
 * A small shared library — every use slot in every item is matched to
 * one of these via getUseIcon(label) which does case-insensitive
 * substring matching. The set covers the vast majority of authored
 * labels across the 12 launch items; anything unmatched falls back to
 * a generic curiosity icon so the grid never looks broken.
 *
 * Adding more icons: write a new component below, then add it to the
 * `rules` array in getUseIcon with the keywords it should match.
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
  type SvgProps,
} from "./_shared";

/* ---- Drinks ---- */

function HotCup(props: SvgProps) {
  return (
    <Frame {...props}>
      <ellipse cx="50" cy="84" rx="34" ry="3" fill={CREAM} stroke="none" />
      <ellipse cx="50" cy="84" rx="34" ry="3" />
      <path d="M22 36 L78 36 L74 76 L26 76 Z" fill={OFFWHITE} />
      <ellipse cx="50" cy="36" rx="28" ry="5" fill={TERRACOTTA} />
      <ellipse cx="50" cy="36" rx="28" ry="5" />
      <path d="M78 46 Q90 50 90 56 Q90 62 78 60" />
      <path d="M38 24 Q42 16 38 8" stroke={SOFT_PINK} strokeWidth="2" opacity="0.7" />
      <path d="M50 22 Q54 12 50 4" stroke={SOFT_PINK} strokeWidth="2" opacity="0.7" />
      <path d="M62 24 Q58 16 62 8" stroke={SOFT_PINK} strokeWidth="2" opacity="0.7" />
    </Frame>
  );
}

function ColdGlass(props: SvgProps) {
  return (
    <Frame {...props}>
      <path d="M30 14 L70 14 L64 88 L36 88 Z" fill={OFFWHITE} opacity="0.4" stroke="none" />
      <path d="M30 14 L70 14 L64 88 L36 88 Z" />
      <path d="M34 26 L66 26 L60 82 L40 82 Z" fill={MUSTARD} stroke="none" />
      <ellipse cx="50" cy="26" rx="16" ry="2.5" fill={TERRACOTTA} opacity="0.6" stroke="none" />
      <ellipse cx="50" cy="26" rx="16" ry="2.5" />
      <path d="M44 12 L54 80" stroke={SOFT_PINK} strokeWidth="3" />
      <circle cx="42" cy="40" r="2" fill={OFFWHITE} stroke="none" />
      <circle cx="58" cy="50" r="2" fill={OFFWHITE} stroke="none" />
      <circle cx="46" cy="62" r="2" fill={OFFWHITE} stroke="none" />
    </Frame>
  );
}

function Smoothie(props: SvgProps) {
  return (
    <Frame {...props}>
      <path d="M28 18 L72 18 L68 82 L32 82 Z" fill={SOFT_PINK} />
      <ellipse cx="50" cy="18" rx="22" ry="3" fill={SOFT_PINK} />
      <ellipse cx="50" cy="18" rx="22" ry="3" />
      <path d="M44 8 L52 18" stroke={SAGE} strokeWidth="3" />
      <path d="M48 8 L52 18" stroke={SAGE} strokeWidth="3" />
      <ellipse cx="40" cy="10" rx="6" ry="4" fill={SAGE} transform="rotate(-30 40 10)" />
      <path d="M40 28 L56 76" stroke={MUSTARD} strokeWidth="2.5" opacity="0.6" />
    </Frame>
  );
}

/* ---- Desserts ---- */

function CakeSlice(props: SvgProps) {
  return (
    <Frame {...props}>
      <path d="M20 70 L80 70 L70 86 L30 86 Z" fill={CREAM} stroke="none" />
      <path d="M20 70 L80 70 L70 86 L30 86 Z" />
      <rect x="22" y="34" width="56" height="36" rx="3" fill={SOFT_PINK} />
      <rect x="22" y="34" width="56" height="6" fill={TERRACOTTA} stroke="none" />
      <path d="M22 40 L78 40" strokeWidth="1.6" />
      <path d="M22 56 L78 56" strokeWidth="1.6" />
      {/* Single candle on top */}
      <rect x="48" y="20" width="4" height="14" rx="1" fill={MUSTARD} />
      <path d="M50 16 Q52 12 50 8 Q48 12 50 16" fill={TERRACOTTA} stroke="none" />
    </Frame>
  );
}

function Cookies(props: SvgProps) {
  return (
    <Frame {...props}>
      <ellipse cx="36" cy="50" rx="22" ry="20" fill={MUSTARD} />
      <ellipse cx="72" cy="58" rx="18" ry="16" fill={MUSTARD} />
      {/* Chocolate chips */}
      <circle cx="28" cy="44" r="2.5" fill={NAVY} />
      <circle cx="40" cy="48" r="2.5" fill={NAVY} />
      <circle cx="34" cy="58" r="2.5" fill={NAVY} />
      <circle cx="46" cy="56" r="2.5" fill={NAVY} />
      <circle cx="68" cy="54" r="2.5" fill={NAVY} />
      <circle cx="78" cy="62" r="2.5" fill={NAVY} />
      <circle cx="74" cy="68" r="2.5" fill={NAVY} />
    </Frame>
  );
}

function Doughnut(props: SvgProps) {
  return (
    <Frame {...props}>
      <circle cx="50" cy="50" r="34" fill={SOFT_PINK} />
      <circle cx="50" cy="50" r="14" fill={CREAM} />
      <circle cx="50" cy="50" r="14" />
      {/* Sprinkles */}
      <path d="M28 38 L32 36" strokeWidth="2" stroke={MUSTARD} />
      <path d="M40 28 L44 30" strokeWidth="2" stroke={SAGE} />
      <path d="M60 28 L58 32" strokeWidth="2" stroke={TERRACOTTA} />
      <path d="M70 38 L74 40" strokeWidth="2" stroke={MUSTARD} />
      <path d="M76 54 L72 56" strokeWidth="2" stroke={DUSTY_BLUE} />
      <path d="M64 72 L66 76" strokeWidth="2" stroke={SAGE} />
      <path d="M36 72 L34 76" strokeWidth="2" stroke={MUSTARD} />
      <path d="M24 60 L28 62" strokeWidth="2" stroke={TERRACOTTA} />
    </Frame>
  );
}

function Tart(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Crust ring */}
      <ellipse cx="50" cy="56" rx="36" ry="20" fill={MUSTARD} />
      <ellipse cx="50" cy="54" rx="30" ry="14" fill={SOFT_PINK} />
      {/* Berries on top */}
      <circle cx="40" cy="50" r="4" fill={TERRACOTTA} />
      <circle cx="50" cy="48" r="4" fill={TERRACOTTA} />
      <circle cx="60" cy="50" r="4" fill={TERRACOTTA} />
      <circle cx="44" cy="56" r="3.5" fill={TERRACOTTA} />
      <circle cx="56" cy="56" r="3.5" fill={TERRACOTTA} />
      {/* Crust scallops */}
      <path d="M14 56 Q18 52 22 56 Q26 52 30 56 Q34 52 38 56 Q42 52 46 56 Q50 52 54 56 Q58 52 62 56 Q66 52 70 56 Q74 52 78 56 Q82 52 86 56" strokeWidth="1.8" />
    </Frame>
  );
}

function IceCream(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Cone */}
      <path d="M30 50 L70 50 L50 92 Z" fill={MUSTARD} />
      <path d="M34 58 L66 58" strokeWidth="1.5" opacity="0.55" />
      <path d="M38 66 L62 66" strokeWidth="1.5" opacity="0.55" />
      <path d="M42 74 L58 74" strokeWidth="1.5" opacity="0.55" />
      {/* Scoops */}
      <ellipse cx="42" cy="38" rx="14" ry="12" fill={SOFT_PINK} />
      <ellipse cx="58" cy="38" rx="14" ry="12" fill={CREAM} />
      <ellipse cx="50" cy="22" rx="14" ry="12" fill={TERRACOTTA} />
      {/* Cherry */}
      <circle cx="50" cy="10" r="3" fill={TERRACOTTA} />
      <path d="M50 7 L52 2" strokeWidth="2" stroke={SAGE} />
    </Frame>
  );
}

function Croissant(props: SvgProps) {
  return (
    <Frame {...props}>
      <path d="M14 50 Q22 26 50 24 Q78 26 86 50 Q72 60 50 56 Q28 60 14 50 Z" fill={MUSTARD} />
      {/* Layers */}
      <path d="M22 46 Q30 36 50 36 Q70 36 78 46" strokeWidth="1.6" />
      <path d="M28 52 Q40 48 50 48 Q60 48 72 52" strokeWidth="1.6" />
      <path d="M34 56 Q44 54 50 54 Q56 54 66 56" strokeWidth="1.6" />
      {/* Crescent ends */}
      <circle cx="14" cy="50" r="6" fill={MUSTARD} />
      <circle cx="86" cy="50" r="6" fill={MUSTARD} />
    </Frame>
  );
}

function PancakeStack(props: SvgProps) {
  return (
    <Frame {...props}>
      <ellipse cx="50" cy="72" rx="34" ry="6" fill={MUSTARD} />
      <ellipse cx="50" cy="62" rx="34" ry="6" fill={MUSTARD} />
      <ellipse cx="50" cy="52" rx="34" ry="6" fill={MUSTARD} />
      <ellipse cx="50" cy="42" rx="32" ry="6" fill={MUSTARD} />
      {/* Pat of butter on top */}
      <rect x="44" y="36" width="12" height="6" rx="1" fill={CREAM} />
      {/* Drizzle */}
      <path d="M40 38 Q44 44 38 50 Q44 56 40 62 Q44 68 40 74" stroke={TERRACOTTA} strokeWidth="2.5" />
      <path d="M58 36 Q62 42 58 50 Q62 56 58 62 Q62 68 58 74" stroke={TERRACOTTA} strokeWidth="2.5" />
    </Frame>
  );
}

/* ---- Bread / savory ---- */

function ToastSlice(props: SvgProps) {
  return (
    <Frame {...props}>
      <path d="M22 30 Q22 18 50 18 Q78 18 78 30 L78 80 Q78 84 74 84 L26 84 Q22 84 22 80 Z" fill={MUSTARD} />
      {/* Crust line */}
      <path d="M22 30 Q22 22 50 22 Q78 22 78 30" strokeWidth="1.8" />
      {/* Texture pores */}
      <circle cx="36" cy="44" r="1.5" fill={NAVY} opacity="0.35" />
      <circle cx="48" cy="40" r="1.2" fill={NAVY} opacity="0.35" />
      <circle cx="60" cy="46" r="1.5" fill={NAVY} opacity="0.35" />
      <circle cx="42" cy="58" r="1.5" fill={NAVY} opacity="0.35" />
      <circle cx="56" cy="62" r="1.2" fill={NAVY} opacity="0.35" />
      <circle cx="50" cy="72" r="1.5" fill={NAVY} opacity="0.35" />
    </Frame>
  );
}

function Sandwich(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Top bread */}
      <path d="M14 38 Q14 26 50 26 Q86 26 86 38 L86 44 L14 44 Z" fill={MUSTARD} />
      {/* Filling layer */}
      <rect x="14" y="44" width="72" height="6" fill={SAGE} />
      <rect x="14" y="50" width="72" height="4" fill={TERRACOTTA} />
      <rect x="14" y="54" width="72" height="4" fill={CREAM} />
      {/* Bottom bread */}
      <path d="M14 58 L86 58 L86 70 Q86 78 50 78 Q14 78 14 70 Z" fill={MUSTARD} />
      {/* Lettuce poking out */}
      <path d="M14 50 Q18 48 22 50 Q26 48 30 50" stroke={SAGE} strokeWidth="2.5" />
      <path d="M70 50 Q74 48 78 50 Q82 48 86 50" stroke={SAGE} strokeWidth="2.5" />
    </Frame>
  );
}

function CerealBowl(props: SvgProps) {
  return (
    <Frame {...props}>
      <path d="M10 46 Q10 78 50 80 Q90 78 90 46 Z" fill={SAGE} />
      <ellipse cx="50" cy="46" rx="40" ry="6" fill={OFFWHITE} />
      <ellipse cx="50" cy="46" rx="40" ry="6" />
      {[
        [30, 50], [42, 48], [54, 50], [66, 48],
        [36, 56], [50, 56], [62, 56],
        [32, 62], [44, 64], [56, 62], [68, 64],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.8" fill={MUSTARD} />
      ))}
    </Frame>
  );
}

/* ---- Eggs ---- */

function FriedEgg(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* White */}
      <path d="M24 48 Q14 38 22 28 Q30 18 44 24 Q52 12 64 22 Q82 16 86 36 Q92 52 80 60 Q86 76 72 80 Q60 90 46 80 Q30 88 22 74 Q12 64 24 48 Z" fill={OFFWHITE} />
      {/* Yolk */}
      <circle cx="52" cy="50" r="16" fill={MUSTARD} />
      <ellipse cx="46" cy="44" rx="3.5" ry="5" fill={CREAM} stroke="none" />
    </Frame>
  );
}

/* ---- Misc ---- */

function Popcorn(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Striped box */}
      <path d="M18 48 L82 48 L74 86 L26 86 Z" fill={TERRACOTTA} />
      <path d="M30 48 L26 86" strokeWidth="2" stroke={OFFWHITE} />
      <path d="M50 48 L50 86" strokeWidth="2" stroke={OFFWHITE} />
      <path d="M70 48 L74 86" strokeWidth="2" stroke={OFFWHITE} />
      {/* Popcorn pieces */}
      <circle cx="30" cy="36" r="6" fill={CREAM} />
      <circle cx="44" cy="28" r="7" fill={CREAM} />
      <circle cx="60" cy="30" r="6" fill={CREAM} />
      <circle cx="72" cy="38" r="6" fill={CREAM} />
      <circle cx="50" cy="42" r="5" fill={CREAM} />
      <circle cx="38" cy="44" r="4" fill={CREAM} />
      <circle cx="66" cy="44" r="4" fill={CREAM} />
    </Frame>
  );
}

function Gift(props: SvgProps) {
  return (
    <Frame {...props}>
      {/* Box */}
      <rect x="14" y="40" width="72" height="44" rx="3" fill={TERRACOTTA} />
      {/* Vertical ribbon */}
      <rect x="44" y="40" width="12" height="44" fill={MUSTARD} />
      {/* Horizontal ribbon */}
      <rect x="14" y="56" width="72" height="10" fill={MUSTARD} />
      {/* Bow loops */}
      <ellipse cx="38" cy="32" rx="10" ry="8" fill={MUSTARD} />
      <ellipse cx="62" cy="32" rx="10" ry="8" fill={MUSTARD} />
      <circle cx="50" cy="36" r="4" fill={TERRACOTTA} />
      <circle cx="50" cy="36" r="4" />
    </Frame>
  );
}

function Apple(props: SvgProps) {
  return (
    <Frame {...props}>
      <path d="M30 38 Q30 28 42 28 Q50 28 50 36 Q50 28 58 28 Q70 28 70 38 Q78 50 70 70 Q60 84 50 80 Q40 84 30 70 Q22 50 30 38 Z" fill={TERRACOTTA} />
      <path d="M50 28 Q54 18 60 18" strokeWidth="2.5" stroke={SAGE} />
      <ellipse cx="58" cy="22" rx="6" ry="3" fill={SAGE} transform="rotate(30 58 22)" />
      <ellipse cx="40" cy="44" rx="2.5" ry="4" fill={MUSTARD} opacity="0.6" stroke="none" />
    </Frame>
  );
}

/* ---- Matcher ---- */

interface Rule {
  keywords: readonly string[];
  Icon: ComponentType<SvgProps>;
}

/* Order matters: more specific rules first. Each keyword is matched
   case-insensitively as a substring of the use label. */
const rules: readonly Rule[] = [
  // Eggs first so "easter eggs", "fried eggs" don't hit "fried"
  { keywords: ["egg", "scrambl", "omelette", "boiled"], Icon: FriedEgg },

  // Drinks
  { keywords: ["hot chocolate", "morning cup", "tea", "chai", "kombucha", "remedy", "matcha"], Icon: HotCup },
  { keywords: ["iced", "cocktail", "mocktail", "ice pop", "breakfast drink"], Icon: ColdGlass },
  { keywords: ["smoothie"], Icon: Smoothie },

  // Desserts
  { keywords: ["pancake"], Icon: PancakeStack },
  { keywords: ["croissant"], Icon: Croissant },
  { keywords: ["doughnut", "donut"], Icon: Doughnut },
  { keywords: ["tart", "scone", "pie"], Icon: Tart },
  { keywords: ["ice cream", "frozen yogurt"], Icon: IceCream },
  { keywords: ["cookies", "brownies"], Icon: Cookies },
  { keywords: ["cake", "bake", "brownie", "muffin", "cupcake", "glaze", "bread pudding"], Icon: CakeSlice },

  // Savoury
  { keywords: ["sandwich"], Icon: Sandwich },
  { keywords: ["toast", "french toast", "garlic bread", "crouton"], Icon: ToastSlice },
  { keywords: ["popcorn"], Icon: Popcorn },
  { keywords: ["bowl", "pot", "cereal", "granola", "trail mix", "topping", "swirl", "drizzle", "raita", "tzatziki", "pasta", "marinade", "snack"], Icon: CerealBowl },

  // Misc
  { keywords: ["gift", "valentine"], Icon: Gift },
];

/** Returns the matching icon component for a use label, or Apple as fallback. */
export function getUseIcon(label: string): ComponentType<SvgProps> {
  const lower = label.toLowerCase();
  for (const rule of rules) {
    if (rule.keywords.some((k) => lower.includes(k))) {
      return rule.Icon;
    }
  }
  return Apple;
}
