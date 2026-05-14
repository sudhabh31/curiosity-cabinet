/**
 * Scene registry.
 *
 * Mirrors content/items/index.ts. Scenes are added in story 5
 * (Breakfast Table) and beyond.
 */

import type { Scene, Slug } from "@/content/types";
import { breakfastTable } from "./breakfast-table";

export const scenes: readonly Scene[] = [breakfastTable] as const;

export const scenesBySlug: ReadonlyMap<Slug, Scene> = new Map(
  scenes.map((scene) => [scene.slug, scene]),
);

export function getScene(slug: Slug): Scene | undefined {
  return scenesBySlug.get(slug);
}

export function listSceneSlugs(): readonly Slug[] {
  return scenes.map((s) => s.slug);
}
