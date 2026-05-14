/**
 * WorldCard — a single tile on the home shelf.
 *
 * Two states:
 *   - live: tappable Link; navy-bordered card with a preview SVG above
 *     the name, tagline, and a quiet 'N of M collected' line.
 *   - coming-soon: same shape, muted palette, no link, "Coming soon"
 *     in place of the progress line.
 *
 * The progress line only renders client-side (after useCabinet hydrates)
 * because it depends on localStorage.
 */

"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useCabinet } from "@/lib/cabinet";
import { sceneProgress } from "@/lib/progress";
import { cx } from "@/lib/cx";
import type { World } from "@/content/worlds";

interface Props {
  world: World;
  preview: ReactNode;
  className?: string;
}

export function WorldCard({ world, preview, className }: Props) {
  if (world.status === "live") {
    return <LiveCard world={world} preview={preview} className={className} />;
  }
  return <ComingSoonCard world={world} preview={preview} className={className} />;
}

function LiveCard({ world, preview, className }: Props) {
  const { slugs } = useCabinet();
  const { collected, total } = sceneProgress(world.slug, slugs);

  return (
    <Link
      href={`/scene/${world.slug}`}
      aria-label={`${world.name} — ${world.tagline}`}
      className={cx(
        "group relative flex flex-col rounded-[var(--cc-card-radius)] border-[2.5px] border-navy bg-offwhite",
        "shadow-[0_10px_28px_-18px_rgba(42,59,77,0.55)]",
        "transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_18px_36px_-18px_rgba(42,59,77,0.7)]",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/25",
        className,
      )}
    >
      {/* Preview panel */}
      <div className="aspect-[5/3] w-full overflow-hidden rounded-t-[calc(var(--cc-card-radius)-2px)] bg-cream">
        {preview}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2 p-5">
        <h3 className="font-display text-xl font-semibold text-navy">
          {world.name}
        </h3>
        <p className="font-body text-sm leading-relaxed text-charcoal">
          {world.tagline}
        </p>
        <p className="mt-1 font-body text-xs font-medium text-warm-gray">
          {total === 0
            ? "Tap to explore"
            : collected === 0
              ? `${total} things to discover`
              : `${collected} of ${total} collected`}
        </p>
      </div>
    </Link>
  );
}

function ComingSoonCard({ world, preview, className }: Props) {
  return (
    <div
      className={cx(
        "relative flex flex-col rounded-[var(--cc-card-radius)] border-[2px] border-dashed border-warm-gray/60 bg-cream/60",
        className,
      )}
      aria-label={`${world.name} — coming soon`}
    >
      <div className="aspect-[5/3] w-full overflow-hidden rounded-t-[calc(var(--cc-card-radius)-2px)] bg-cream/70 opacity-60">
        {preview}
      </div>
      <div className="flex flex-col gap-2 p-5">
        <h3 className="font-display text-xl font-semibold text-warm-gray">
          {world.name}
        </h3>
        <p className="font-body text-sm leading-relaxed text-warm-gray/85">
          {world.tagline}
        </p>
        <p className="mt-1 inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.16em] text-warm-gray/80">
          <span className="h-1.5 w-1.5 rounded-full bg-warm-gray/70" />
          Coming soon
        </p>
      </div>
    </div>
  );
}
