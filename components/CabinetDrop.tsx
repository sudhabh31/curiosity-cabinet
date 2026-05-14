/**
 * Cabinet drop button + fly-to-cabinet animation.
 *
 * UX:
 *   - "Drop into Curiosity Cabinet" pill button at the bottom of an item
 *     page.
 *   - On click: a ghost copy of the item's illustration flies in an arc
 *     from the button to the corner badge, then disappears. The badge
 *     pulses (its own animation). The slug is persisted to localStorage.
 *   - Once collected, the button switches to a quieter "In your cabinet"
 *     state.
 *
 * Notes:
 *   - Reads the badge position via document.getElementById("cabinet-badge")
 *     so we don't need a context. Resilient to the badge not yet being
 *     mounted — falls back to instantaneous add.
 *   - Animation uses motion.div with keyframed x/y to arc upward before
 *     landing. Respects prefers-reduced-motion globally via styles/tokens.
 */

"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Item } from "@/content/types";
import { accent } from "@/lib/accent";
import { addToCabinet, useCabinet } from "@/lib/cabinet";
import { cx } from "@/lib/cx";
import { getHeroIllustration } from "./illustrations";

interface Props {
  item: Item;
  className?: string;
}

type FlyState = {
  from: { x: number; y: number; size: number };
  to: { x: number; y: number };
};

export function CabinetDrop({ item, className }: Props) {
  const a = accent(item.accent);
  const { slugs } = useCabinet();
  const collected = slugs.includes(item.slug);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [fly, setFly] = useState<FlyState | null>(null);

  function handleDrop() {
    if (collected || fly) return;
    const btn = buttonRef.current;
    const badge = typeof document !== "undefined"
      ? document.getElementById("cabinet-badge")
      : null;

    if (!btn || !badge) {
      // Fallback: persist without animation.
      addToCabinet(item.slug);
      return;
    }

    // Initial fallback: if the user prefers reduced motion, the
    // CSS @media block already squashes durations — but we still spawn
    // the ghost so the visual logic stays consistent.
    const fromRect = btn.getBoundingClientRect();
    const toRect = badge.getBoundingClientRect();
    const size = 56;
    setFly({
      from: {
        x: fromRect.left + fromRect.width / 2 - size / 2,
        y: fromRect.top + fromRect.height / 2 - size / 2,
        size,
      },
      to: {
        x: toRect.left + toRect.width / 2 - size / 2,
        y: toRect.top + toRect.height / 2 - size / 2,
      },
    });
  }

  function onFlightDone() {
    addToCabinet(item.slug);
    setFly(null);
  }

  /* Mid-flight arc: peak ~80px above the higher of the two endpoints. */
  const arcKeyframes = fly
    ? {
        x: [fly.from.x, (fly.from.x + fly.to.x) / 2, fly.to.x],
        y: [
          fly.from.y,
          Math.min(fly.from.y, fly.to.y) - 80,
          fly.to.y,
        ],
        scale: [1, 1.05, 0.35],
        opacity: [1, 1, 0.2],
        rotate: [0, -6, 12],
      }
    : undefined;

  return (
    <section className={cx("text-center", className)}>
      <button
        ref={buttonRef}
        type="button"
        onClick={handleDrop}
        disabled={collected || !!fly}
        className={cx(
          "group relative inline-flex items-center gap-2.5 rounded-full px-6 py-3 font-body text-base font-semibold transition-all",
          "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/20",
          collected
            ? "border-[2.5px] border-sage/70 bg-sage/15 text-sage cursor-default"
            : cx(
                "border-[2.5px] border-navy bg-navy text-offwhite shadow-[0_8px_20px_-10px_rgba(42,59,77,0.6)]",
                "hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-12px_rgba(42,59,77,0.75)]",
                "active:translate-y-0",
              ),
          fly && "opacity-70",
        )}
      >
        <span
          className={cx(
            "inline-flex h-5 w-5 items-center justify-center rounded-full",
            collected ? "bg-sage text-offwhite" : a.solidBg,
          )}
          aria-hidden
        >
          {collected ? (
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
              <path
                d="M5 12 L10 17 L19 7"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          ) : (
            <span className="h-2 w-2 rounded-full bg-offwhite" />
          )}
        </span>
        {collected ? "In your Curiosity Cabinet" : "Drop into Curiosity Cabinet"}
      </button>

      {!collected && (
        <p className="mt-3 font-body text-sm text-warm-gray">
          Collect what you&rsquo;ve explored.
        </p>
      )}

      {/* Flying ghost — only mounted during the animation */}
      <AnimatePresence>
        {fly && (
          <motion.div
            key="fly"
            initial={{
              x: fly.from.x,
              y: fly.from.y,
              scale: 1,
              opacity: 1,
              rotate: 0,
            }}
            animate={arcKeyframes}
            transition={{
              duration: 0.85,
              ease: [0.4, 0, 0.2, 1],
              times: [0, 0.55, 1],
            }}
            onAnimationComplete={onFlightDone}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: fly.from.size,
              height: fly.from.size,
              pointerEvents: "none",
              zIndex: 60,
            }}
          >
            <div
              className={cx(
                "flex h-full w-full items-center justify-center rounded-full border-[2.5px] border-navy",
                a.tintBg,
              )}
            >
              <div className="h-[78%] w-[78%]">
                {getHeroIllustration(item.slug) ?? (
                  <div className={cx("h-full w-full rounded-full", a.solidBg)} />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
