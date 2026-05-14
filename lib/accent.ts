/**
 * Per-item accent helper.
 *
 * Each Item has a PaletteRole (one of the 6 locked accents). Section
 * components ask this helper "give me the Tailwind classes for the
 * background tint / outline / chip / text colour" so we never sprinkle
 * conditional class strings across components.
 *
 * If we ever want to retune a single accent's tint strength, this is the
 * one place to do it.
 */

import type { PaletteRole } from "@/content/types";

export interface AccentClasses {
  /** Soft tinted surface, e.g. for stat cards and section backgrounds. */
  tintBg: string;
  /** Solid swatch — used for chips, pills, decorative dots. */
  solidBg: string;
  /** Foreground / outline colour to pair with tintBg. */
  ink: string;
  /** Border colour, ~30% opacity of the accent. */
  border: string;
}

const map: Record<PaletteRole, AccentClasses> = {
  terracotta: {
    tintBg: "bg-terracotta/10",
    solidBg: "bg-terracotta",
    ink: "text-terracotta",
    border: "border-terracotta/30",
  },
  mustard: {
    tintBg: "bg-mustard/15",
    solidBg: "bg-mustard",
    ink: "text-mustard",
    border: "border-mustard/40",
  },
  sage: {
    tintBg: "bg-sage/15",
    solidBg: "bg-sage",
    ink: "text-sage",
    border: "border-sage/40",
  },
  "dusty-blue": {
    tintBg: "bg-dusty-blue/15",
    solidBg: "bg-dusty-blue",
    ink: "text-dusty-blue",
    border: "border-dusty-blue/40",
  },
  "soft-pink": {
    tintBg: "bg-soft-pink/20",
    solidBg: "bg-soft-pink",
    ink: "text-soft-pink",
    border: "border-soft-pink/50",
  },
  "warm-gray": {
    tintBg: "bg-warm-gray/15",
    solidBg: "bg-warm-gray",
    ink: "text-warm-gray",
    border: "border-warm-gray/40",
  },
};

export function accent(role: PaletteRole): AccentClasses {
  return map[role];
}
