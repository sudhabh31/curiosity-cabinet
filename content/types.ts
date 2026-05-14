/**
 * Curiosity Cabinet — content data model.
 *
 * Authoring rule of thumb: every Item follows the 8-section template from
 * the brief (hero → flow → stat → history → uses → did-you-know → cabinet
 * drop → quiz contributions). The cabinet drop is purely animation, so
 * only seven sections appear here.
 *
 * Keep this file small and prose-light. The shape *is* the contract — if
 * a field is unclear, fix the field name, don't paper over it with a
 * comment.
 */

/* ---------- Primitives ---------- */

/** URL-safe slug, lowercase letters, digits, and hyphens. */
export type Slug = string;

/** Path to an illustration under /public. e.g. "/illustrations/chocolate/hero.svg" */
export type IllustrationSrc = string;

/** Palette role — keeps per-item accents inside the locked palette. */
export type PaletteRole =
  | "terracotta"
  | "mustard"
  | "sage"
  | "dusty-blue"
  | "soft-pink"
  | "warm-gray";

/* ---------- Item sub-shapes ---------- */

/** One node in the origin flow chart (5–7 per item). */
export interface FlowStep {
  /** Stable within the item. Used as React key and for quiz refs. */
  id: string;
  /** One-line caption shown under the node thumbnail. */
  caption: string;
  /** Short explainer revealed when the node is tapped. */
  detail: string;
  /** Optional duration label, e.g. "5–7 days", "9 months". */
  duration?: string;
  /** Thumbnail illustration. Optional during placeholder phase. */
  illustration?: IllustrationSrc;
}

/** The "This took how long?!" stat card — punchy, one wow-number. */
export interface StatCard {
  /** The number-y bit, e.g. "9 months" or "~4 bars". */
  headline: string;
  /** One sentence of context that gives the headline its punch. */
  body: string;
}

/** History — exactly 3 short paragraphs by the brief's template. */
export type HistoryParagraphs = readonly [string, string, string];

/** One cell in the "Where you'll find it" grid. */
export interface UseExample {
  /** Short label, e.g. "Birthday cakes". */
  label: string;
  /** Optional thumbnail illustration. */
  illustration?: IllustrationSrc;
}

/** One trivia surprise, kept separate from the main flow. */
export interface DidYouKnow {
  fact: string;
}

/* ---------- Quiz ---------- */

/** Tagged union covering all four quiz modes from the brief. */
export type QuizQuestion =
  | FlowScrambleQuestion
  | WhichTookLongerQuestion
  | OriginMatchQuestion
  | MysteryItemQuestion;

/** Reorder a flow chart's steps. */
export interface FlowScrambleQuestion {
  type: "flow-scramble";
  id: string;
  /** Item the steps belong to. */
  itemSlug: Slug;
  /** Subset of flow step ids in the *correct* order. */
  correctOrder: readonly string[];
}

/** Which of two items took longer to make? */
export interface WhichTookLongerQuestion {
  type: "which-took-longer";
  id: string;
  optionA: Slug;
  optionB: Slug;
  /** The slug whose total origin time is longer. */
  answer: Slug;
}

/** Match a single short clue to the right item. */
export interface OriginMatchQuestion {
  type: "origin-match";
  id: string;
  /** e.g. "Comes from a tree pod, fermented in banana leaves." */
  clue: string;
  /** The correct item slug. */
  answer: Slug;
  /** Distractor item slugs shown alongside the answer. */
  distractors: readonly Slug[];
}

/** Mystery item — reveal clues one by one, guess the item. */
export interface MysteryItemQuestion {
  type: "mystery-item";
  id: string;
  /** Ordered clues, easiest-last so reveals get progressively easier. */
  clues: readonly string[];
  /** The item being described. */
  answer: Slug;
  /** Pool of plausible wrong guesses. */
  distractors: readonly Slug[];
}

/* ---------- Item ---------- */

/** Everything needed to render an item page and contribute to quizzes. */
export interface Item {
  slug: Slug;
  /** Display name, e.g. "Chocolate". */
  name: string;
  /** One-line hook under the name on the hero panel. */
  hook: string;
  /** Accent colour for this item's page chrome. */
  accent: PaletteRole;

  /** Hero illustration — large, centred. May be omitted during placeholder phase. */
  heroIllustration?: IllustrationSrc;

  /** 5–7 nodes. The flow chart is authored, not generated. */
  flow: readonly FlowStep[];

  stat: StatCard;
  history: HistoryParagraphs;
  uses: readonly UseExample[];
  didYouKnow: DidYouKnow;

  /** 2–3 questions per item per the brief. */
  quizContributions: readonly QuizQuestion[];
}

/* ---------- Scene ---------- */

/**
 * A position on the scene illustration. Two flavours:
 *   - `live`: linked to an Item slug; tappable; pulls in the item's art
 *     and accent from the registry.
 *   - `coming-soon`: placeholder slot to preserve scene composition while
 *     content is still being authored. Greyed out, non-clickable.
 */
export type ItemHotspot = LiveHotspot | ComingSoonHotspot;

interface HotspotBase {
  /** Percent from left (0–100). */
  x: number;
  /** Percent from top (0–100). */
  y: number;
  /**
   * Visual size of the item as a percent of the scene container's width.
   * Defaults to 12 — adjust per item so bigger objects (loaf, cereal bowl)
   * read larger than smaller ones (jar, cup).
   */
  scale?: number;
  /** Wiggle delay (seconds) so items don't bob in metronome sync. */
  wiggleDelay?: number;
}

export interface LiveHotspot extends HotspotBase {
  kind: "live";
  itemSlug: Slug;
}

export interface ComingSoonHotspot extends HotspotBase {
  kind: "coming-soon";
  /** Display label for the placeholder, e.g. "Eggs". */
  name: string;
}

export interface Scene {
  slug: Slug;
  name: string;
  /** One-line invitation shown on the scene header. */
  tagline: string;
  /** Background scene illustration. Optional during placeholder phase. */
  illustration?: IllustrationSrc;
  /** Items placed on the scene. 12–15 per the brief. */
  hotspots: readonly ItemHotspot[];
  /**
   * Minimum number of explored items before the quiz unlocks.
   * Brief says 5; kept here so each scene can tune it.
   */
  quizUnlocksAt: number;
}
