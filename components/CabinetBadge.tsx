/**
 * Fixed-position cabinet counter, top-right of the viewport.
 *
 * Acts as the visual target for the CabinetDrop fly-in animation.
 * Pulses when the count changes. Hidden on screens that haven't loaded
 * client JS yet (no flicker during SSR — the badge is a localStorage
 * concept).
 *
 * The id="cabinet-badge" is read by CabinetDrop.tsx to locate the badge
 * for the fly-to animation.
 */

"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useCabinet } from "@/lib/cabinet";
import { CabinetIcon } from "./CabinetIcon";

export function CabinetBadge() {
  /* useSyncExternalStore in useCabinet returns EMPTY during SSR, so
     hydration is clean — no need for a separate `mounted` flag. */
  const { count } = useCabinet();

  return (
    <div
      id="cabinet-badge"
      className="fixed right-4 top-4 z-40 sm:right-6 sm:top-6"
    >
      <motion.div
        key={count} // re-animates whenever count changes
        initial={{ scale: 1 }}
        animate={{ scale: count > 0 ? [1, 1.18, 1] : 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <Link
          href="/cabinet"
          aria-label={`Your cabinet (${count} ${count === 1 ? "item" : "items"})`}
          className="inline-flex items-center gap-2 rounded-full border-[2.5px] border-navy bg-offwhite px-3 py-1.5 shadow-[0_6px_18px_-10px_rgba(42,59,77,0.55)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/20"
        >
          <CabinetIcon size={22} />
          <span className="font-display text-sm font-bold text-navy tabular-nums">
            {count}
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
