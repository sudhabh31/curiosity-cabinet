/**
 * SceneStage — responsive container for a scene's items.
 *
 * Two layouts, switched purely by CSS (no JS device detection):
 *
 *   Desktop (sm+):  the original "still life" \u2014 backdrop SVG fills a
 *                   5:3 stage; hotspots are absolutely positioned at
 *                   percent x/y from the scene data. Items wiggle.
 *
 *   Mobile (<sm):   a 2-column grid of cards, one per hotspot. Each
 *                   card is a navy-bordered tile with the item's
 *                   illustration on a tinted wood-coloured background
 *                   (so the table metaphor survives) and the item name
 *                   below. Same content, far more readable at phone
 *                   widths than a cramped still-life.
 *
 * The backdrop component is passed in so each scene can swap it
 * (kitchen, bedroom, school bag) without touching this file.
 */

import type { ReactNode } from "react";
import type { Scene } from "@/content/types";
import { getItem } from "@/content/items";
import { cx } from "@/lib/cx";
import { SceneHotspot } from "./SceneHotspot";
import { SceneCard } from "./SceneCard";

interface Props {
  scene: Scene;
  backdrop: ReactNode;
  className?: string;
}

export function SceneStage({ scene, backdrop, className }: Props) {
  return (
    <div className={cx("relative w-full", className)}>
      {/* ---- Desktop (sm+): still-life stage ---- */}
      <div
        className={cx(
          "relative hidden w-full overflow-hidden rounded-[var(--cc-card-radius)] border-[2.5px] border-navy",
          "shadow-[0_12px_36px_-18px_rgba(42,59,77,0.5)]",
          "sm:block",
        )}
        style={{ aspectRatio: "5 / 3" }}
      >
        {/* Backdrop fills the stage */}
        <div className="absolute inset-0">{backdrop}</div>

        {/* Hotspots layer */}
        <div className="absolute inset-0">
          {scene.hotspots.map((h, idx) => {
            const scale = h.scale ?? 12;
            const wiggleDelay = h.wiggleDelay ?? idx * 0.4;
            if (h.kind === "live") {
              const item = getItem(h.itemSlug);
              if (!item) return null;
              return (
                <SceneHotspot
                  key={`${h.itemSlug}-${idx}`}
                  kind="live"
                  item={item}
                  x={h.x}
                  y={h.y}
                  scale={scale}
                  wiggleDelay={wiggleDelay}
                />
              );
            }
            return (
              <SceneHotspot
                key={`coming-${h.name}-${idx}`}
                kind="coming-soon"
                name={h.name}
                x={h.x}
                y={h.y}
                scale={scale}
                wiggleDelay={wiggleDelay}
              />
            );
          })}
        </div>
      </div>

      {/* ---- Mobile (<sm): 2-column card grid ---- */}
      <ul
        className="grid grid-cols-2 gap-3 sm:hidden"
        aria-label={`${scene.name} — items`}
      >
        {scene.hotspots.map((h, idx) => {
          if (h.kind === "live") {
            const item = getItem(h.itemSlug);
            if (!item) return null;
            return (
              <li key={`${h.itemSlug}-${idx}`}>
                <SceneCard kind="live" item={item} />
              </li>
            );
          }
          return (
            <li key={`coming-${h.name}-${idx}`}>
              <SceneCard kind="coming-soon" name={h.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
