/**
 * JourneyPath — the winding-path layout for an item's origin flow.
 *
 * Desktop (sm+): waypoints alternate left/right with a curving navy
 *                dashed line. Reads like a storybook treasure map.
 *
 * Mobile (<sm):  waypoints stack down the left side; a straight dashed
 *                navy line runs through their centers; caption to the
 *                right of each one.
 *
 * Interaction (Story 4):
 *   Caption + duration are always visible. The detail text lives in a
 *   modal that opens on waypoint tap. The journey reads as a scannable
 *   map; tapping a waypoint dives into the explainer.
 *
 * Cosmetic knobs:
 *   LEFT_X / RIGHT_X      where the curve enters/exits on desktop
 *   ROW_UNITS / CENTER_Y  vertical spacing per waypoint
 *   row min-height       below
 */

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { FlowStep, Item } from "@/content/types";
import { accent } from "@/lib/accent";
import { cx } from "@/lib/cx";
import { SectionHeading } from "./SectionHeading";
import { getStepIllustration } from "./illustrations";

interface Props {
  item: Item;
  className?: string;
}

const LEFT_X = 18;
const RIGHT_X = 82;
const ROW_UNITS = 100;
const CENTER_Y = 50;

function buildZigzagPath(stepCount: number): string {
  let d = "";
  for (let i = 0; i < stepCount; i++) {
    const x = i % 2 === 0 ? LEFT_X : RIGHT_X;
    const y = i * ROW_UNITS + CENTER_Y;
    if (i === 0) {
      d += `M ${x} ${y}`;
    } else {
      const prevX = (i - 1) % 2 === 0 ? LEFT_X : RIGHT_X;
      const prevY = (i - 1) * ROW_UNITS + CENTER_Y;
      const midY = (prevY + y) / 2;
      d += ` C ${prevX} ${midY}, ${x} ${midY}, ${x} ${y}`;
    }
  }
  return d;
}

export function JourneyPath({ item, className }: Props) {
  const a = accent(item.accent);
  const n = item.flow.length;
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const openStep = openIdx !== null ? item.flow[openIdx] : null;

  /* Keyboard: Escape closes the popup. */
  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIdx]);

  return (
    <section className={cx("relative", className)}>
      <SectionHeading eyebrow="Where it comes from" title="The journey" />

      {/* ---- Mobile (<sm) ---- */}
      <ol className="relative sm:hidden">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-[2.25rem] top-6 bottom-6 w-0.5"
          preserveAspectRatio="none"
          viewBox="0 0 2 100"
        >
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="100"
            stroke="#2A3B4D"
            strokeOpacity="0.35"
            strokeWidth="0.5"
            strokeDasharray="2 2"
            strokeLinecap="round"
          />
        </svg>

        {item.flow.map((step, idx) => (
          <li key={step.id} className="relative flex items-start gap-4 py-3">
            <WaypointButton
              idx={idx}
              accentRole={item.accent}
              itemSlug={item.slug}
              stepId={step.id}
              caption={step.caption}
              onClick={() => setOpenIdx(idx)}
              compact
            />
            <CaptionBlock step={step} accentClasses={a} />
          </li>
        ))}
      </ol>

      {/* ---- Desktop (sm+) ---- */}
      <div className="relative hidden sm:block">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          viewBox={`0 0 100 ${n * ROW_UNITS}`}
        >
          <path
            d={buildZigzagPath(n)}
            fill="none"
            stroke="#2A3B4D"
            strokeOpacity="0.32"
            strokeWidth="0.55"
            strokeDasharray="2.4 2.4"
            strokeLinecap="round"
          />
        </svg>

        <ol className="relative flex flex-col">
          {item.flow.map((step, idx) => {
            const onLeft = idx % 2 === 0;
            return (
              <li
                key={step.id}
                className="relative grid min-h-[10rem] grid-cols-2 items-center gap-6"
              >
                <div
                  className={cx(
                    "flex items-center gap-5",
                    onLeft
                      ? "col-start-1 justify-start"
                      : "col-start-2 flex-row-reverse justify-start text-right",
                  )}
                >
                  <WaypointButton
                    idx={idx}
                    accentRole={item.accent}
                    itemSlug={item.slug}
                    stepId={step.id}
                    caption={step.caption}
                    onClick={() => setOpenIdx(idx)}
                  />
                  <CaptionBlock
                    step={step}
                    accentClasses={a}
                    align={onLeft ? "left" : "right"}
                  />
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* ---- Detail popup ---- */}
      <AnimatePresence>
        {openStep && openIdx !== null && (
          <StepDetailModal
            step={openStep}
            stepNumber={openIdx + 1}
            totalSteps={n}
            itemSlug={item.slug}
            accentClasses={a}
            accentRole={item.accent}
            onClose={() => setOpenIdx(null)}
            onPrev={
              openIdx > 0 ? () => setOpenIdx(openIdx - 1) : undefined
            }
            onNext={
              openIdx < n - 1 ? () => setOpenIdx(openIdx + 1) : undefined
            }
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---- Waypoint (now a real button) ---- */

interface WaypointButtonProps {
  idx: number;
  accentRole: Item["accent"];
  itemSlug: string;
  stepId: string;
  caption: string;
  onClick: () => void;
  compact?: boolean;
}

function WaypointButton({
  idx,
  accentRole,
  itemSlug,
  stepId,
  caption,
  onClick,
  compact,
}: WaypointButtonProps) {
  const a = accent(accentRole);
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Step ${idx + 1}: ${caption}. Tap for details.`}
      className={cx(
        "group relative shrink-0 rounded-full border-[2.5px] border-navy bg-offwhite",
        "shadow-[0_6px_18px_-12px_rgba(42,59,77,0.55)]",
        "flex items-center justify-center",
        "transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_22px_-12px_rgba(42,59,77,0.7)]",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/20",
        "cursor-pointer",
        compact ? "h-[4.5rem] w-[4.5rem]" : "h-24 w-24",
      )}
    >
      <div className={cx("absolute inset-1 rounded-full", a.tintBg)} />
      <div
        className={cx(
          "relative transition-transform duration-300 group-hover:scale-105",
          compact ? "h-[60%] w-[60%]" : "h-[70%] w-[70%]",
        )}
      >
        {getStepIllustration(itemSlug, stepId, { size: compact ? 60 : 80 }) ?? (
          <div
            className={cx("h-full w-full rounded-full", a.solidBg, "opacity-80")}
          />
        )}
      </div>
      <span
        className={cx(
          "absolute -bottom-1 -left-1 inline-flex items-center justify-center rounded-full border-[2px] border-navy bg-offwhite font-display font-bold text-navy",
          compact ? "h-6 w-6 text-xs" : "h-7 w-7 text-sm",
        )}
      >
        {idx + 1}
      </span>
    </button>
  );
}

/* ---- Caption (no detail text — that moved to the popup) ---- */

interface CaptionBlockProps {
  step: FlowStep;
  accentClasses: ReturnType<typeof accent>;
  align?: "left" | "right";
}

function CaptionBlock({ step, accentClasses, align = "left" }: CaptionBlockProps) {
  return (
    <div
      className={cx(
        "min-w-0 flex-1",
        align === "right" ? "text-right" : "text-left",
      )}
    >
      <div
        className={cx(
          "flex flex-wrap items-baseline gap-x-3 gap-y-1",
          align === "right" && "justify-end",
        )}
      >
        <h3 className="font-display text-base font-semibold leading-snug text-navy sm:text-lg">
          {step.caption}
        </h3>
        {step.duration && (
          <span
            className={cx(
              "inline-flex items-center rounded-full px-2.5 py-0.5 font-body text-xs font-medium",
              accentClasses.tintBg,
              accentClasses.ink,
            )}
          >
            {step.duration}
          </span>
        )}
      </div>
      <p className="mt-1 font-body text-xs font-medium uppercase tracking-[0.12em] text-warm-gray">
        Tap for the story
      </p>
    </div>
  );
}

/* ---- Detail modal ---- */

interface ModalProps {
  step: FlowStep;
  stepNumber: number;
  totalSteps: number;
  itemSlug: string;
  accentClasses: ReturnType<typeof accent>;
  accentRole: Item["accent"];
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

function StepDetailModal({
  step,
  stepNumber,
  totalSteps,
  itemSlug,
  accentClasses,
  accentRole,
  onClose,
  onPrev,
  onNext,
}: ModalProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="step-detail-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-navy/40 backdrop-blur-[2px]"
      />

      {/* Panel */}
      <motion.div
        initial={{ y: 24, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 16, opacity: 0, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
        className={cx(
          "relative z-10 w-full max-w-md rounded-t-[var(--cc-card-radius)] border-[2.5px] border-navy bg-offwhite p-6 shadow-2xl",
          "sm:rounded-[var(--cc-card-radius)]",
        )}
      >
        <div className="flex items-start gap-5">
          {/* Larger illustration in the popup */}
          <div
            className={cx(
              "shrink-0 flex h-20 w-20 items-center justify-center rounded-full border-[2.5px] border-navy",
              accentClasses.tintBg,
            )}
          >
            <div className="h-[70%] w-[70%]">
              {getStepIllustration(itemSlug, step.id, { size: 64 }) ?? (
                <div
                  className={cx(
                    "h-full w-full rounded-full",
                    accent(accentRole).solidBg,
                  )}
                />
              )}
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-warm-gray">
              Step {stepNumber} of {totalSteps}
            </p>
            <h3
              id="step-detail-title"
              className="mt-1 font-display text-xl font-semibold text-navy"
            >
              {step.caption}
            </h3>
            {step.duration && (
              <span
                className={cx(
                  "mt-2 inline-flex items-center rounded-full px-2.5 py-0.5 font-body text-xs font-medium",
                  accentClasses.tintBg,
                  accentClasses.ink,
                )}
              >
                {step.duration}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="-mr-1 -mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-warm-gray transition-colors hover:bg-cream hover:text-navy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/20"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
              <path
                d="M6 6 L18 18 M18 6 L6 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <p className="mt-5 font-body text-base leading-relaxed text-charcoal">
          {step.detail}
        </p>

        {/* Footer: prev / next */}
        <div className="mt-6 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={onPrev}
            disabled={!onPrev}
            className={cx(
              "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-body text-sm font-medium",
              onPrev
                ? "text-navy hover:bg-cream"
                : "text-warm-gray/50",
              "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/20",
            )}
          >
            <span aria-hidden>←</span>
            Previous
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={!onNext}
            className={cx(
              "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-body text-sm font-medium",
              onNext
                ? "text-navy hover:bg-cream"
                : "text-warm-gray/50",
              "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/20",
            )}
          >
            Next
            <span aria-hidden>→</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
