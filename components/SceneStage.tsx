/**
 * SceneStage — responsive container that lays out hotspots over a scene
 * backdrop.
 *
 * The stage has a fixed 5:3 aspect ratio (tunable below). The backdrop
 * SVG fills it. Hotspots are absolutely positioned at percent x/y from
 * the scene data — they scale with the container.
 *
 * The backdrop component is passed in so we can swap it per scene
 * (kitchen, bedroom, school bag) without touching this file.
 */

import type { ReactNode } from "react";
import type { Scene } from "@/content/types";
import { getItem } from "@/content/items";
import { cx } from "@/lib/cx";
import { SceneHotspot } from "./SceneHotspot";

interface Props {
  scene: Scene;
  backdrop: ReactNode;
  className?: string;
}

export function SceneStage({ scene, backdrop, className }: Props) {
  return (
    <div
      className={cx(
        "relative w-full overflow-hidden rounded-[var(--cc-card-radius)] border-[2.5px] border-navy",
        "shadow-[0_12px_36px_-18px_rgba(42,59,77,0.5)]",
        className,
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
  );
}
