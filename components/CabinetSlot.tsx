/**
 * One cell on a cabinet shelf.
 *
 * Two visual states:
 *   - collected: the item's hero illustration rendered in full colour
 *     inside its accent-tinted ring; the name appears below; a small
 *     remove button (×) appears on hover/focus and on long-press for
 *     mobile.
 *   - silhouette: faded grey version of the same hero, hinting at what's
 *     left to find. Clicking still goes to the item page.
 *
 * Either way the slot is wrapped in a Link to the item so the kid can
 * always tap a slot and dive into the story.
 */

"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Item } from "@/content/types";
import { accent } from "@/lib/accent";
import { removeFromCabinet } from "@/lib/cabinet";
import { cx } from "@/lib/cx";
import { getHeroIllustration } from "./illustrations";

interface Props {
  item: Item;
  collected: boolean;
}

const LONG_PRESS_MS = 450;

export function CabinetSlot({ item, collected }: Props) {
  const a = accent(item.accent);
  const [showRemove, setShowRemove] = useState(false);
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Long-press: start a timer on touch/pointer-down; if it fires, we
     surface the remove control; tapping anywhere else dismisses it. */
  useEffect(() => {
    if (!showRemove) return;
    const onPointer = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("[data-cabinet-slot]")) return;
      setShowRemove(false);
    };
    window.addEventListener("pointerdown", onPointer);
    return () => window.removeEventListener("pointerdown", onPointer);
  }, [showRemove]);

  function startLongPress() {
    if (!collected) return;
    if (longPressTimer.current) clearTimeout(longPressTimer.current);
    longPressTimer.current = setTimeout(() => setShowRemove(true), LONG_PRESS_MS);
  }
  function cancelLongPress() {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  }

  return (
    <div
      data-cabinet-slot
      className="group relative flex flex-col items-center text-center"
    >
      <Link
        href={`/item/${item.slug}`}
        aria-label={
          collected
            ? `${item.name} — in your cabinet`
            : `${item.name} — explore`
        }
        onPointerDown={startLongPress}
        onPointerUp={cancelLongPress}
        onPointerLeave={cancelLongPress}
        onPointerCancel={cancelLongPress}
        onContextMenu={(e) => {
          // Suppress the OS context menu on long-press touch.
          if (showRemove) e.preventDefault();
        }}
        className={cx(
          "relative aspect-square w-full rounded-full border-[2.5px] border-navy",
          "transition-transform duration-200 ease-out",
          "hover:-translate-y-0.5",
          "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/25",
          collected ? a.tintBg : "bg-cream/60",
        )}
      >
        <span
          className={cx(
            "absolute inset-[14%] flex items-center justify-center transition-[filter,opacity] duration-300",
            collected ? "opacity-100" : "opacity-30 grayscale",
          )}
        >
          {getHeroIllustration(item.slug) ?? (
            <span className={cx("h-full w-full rounded-full", a.solidBg)} />
          )}
        </span>

        {collected && (
          <span
            className="pointer-events-none absolute -bottom-1 -right-1 inline-flex h-6 w-6 items-center justify-center rounded-full border-[2px] border-navy bg-sage text-offwhite"
            aria-hidden
          >
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
          </span>
        )}
      </Link>

      <span
        className={cx(
          "mt-2 font-body text-xs font-semibold",
          collected ? "text-navy" : "text-warm-gray/80",
        )}
      >
        {item.name}
      </span>

      {/* Remove control: shown on hover (desktop) or after long-press (mobile). */}
      <AnimatePresence>
        {collected && (showRemove || true) && (
          <RemoveButton
            visible={showRemove}
            itemName={item.name}
            onClick={() => {
              removeFromCabinet(item.slug);
              setShowRemove(false);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

interface RemoveButtonProps {
  visible: boolean;
  itemName: string;
  onClick: () => void;
}

function RemoveButton({ visible, itemName, onClick }: RemoveButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        onClick();
      }}
      aria-label={`Remove ${itemName} from your cabinet`}
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.7,
      }}
      transition={{ duration: 0.14 }}
      className={cx(
        "absolute -top-1 -right-1 inline-flex h-7 w-7 items-center justify-center rounded-full border-[2px] border-navy bg-offwhite text-navy",
        // Hover state on desktop, in addition to the long-press flow.
        "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100",
        visible && "!opacity-100",
        "transition-opacity duration-150",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/25",
      )}
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
        <path
          d="M6 6 L18 18 M18 6 L6 18"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
      </svg>
    </motion.button>
  );
}
