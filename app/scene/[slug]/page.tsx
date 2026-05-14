/**
 * Scene page — a still-life of tappable items.
 *
 * Each scene has its own backdrop SVG. The backdrop registry below maps
 * scene slug → backdrop component; when a new scene is added (bedroom,
 * school bag, etc.), add a case here.
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import { getScene, listSceneSlugs } from "@/content/scenes";
import { SceneStage } from "@/components/SceneStage";
import { BreakfastTableBackdrop } from "@/components/illustrations/breakfast-table";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return listSceneSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const scene = getScene(slug);
  if (!scene) return { title: "Not found — Curiosity Cabinet" };
  return {
    title: `${scene.name} — Curiosity Cabinet`,
    description: scene.tagline,
  };
}

function backdropFor(sceneSlug: string) {
  switch (sceneSlug) {
    case "breakfast-table":
      return <BreakfastTableBackdrop className="h-full w-full" />;
    default:
      return null;
  }
}

export default async function ScenePage({ params }: PageProps) {
  const { slug } = await params;
  const scene = getScene(slug);
  if (!scene) notFound();

  return (
    <main className="relative z-10 mx-auto w-full max-w-5xl px-5 pb-24 pt-10 sm:px-8 sm:pt-16">
      <nav className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1 font-body text-sm font-medium text-warm-gray transition-colors hover:text-navy"
        >
          <span aria-hidden>←</span>
          Home
        </Link>
      </nav>

      <header className="mb-8 text-center sm:mb-10">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-warm-gray">
          A scene
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          {scene.name}
        </h1>
        <p className="mt-4 mx-auto max-w-md font-body text-base leading-relaxed text-charcoal sm:text-lg">
          {scene.tagline}
        </p>
      </header>

      <SceneStage scene={scene} backdrop={backdropFor(scene.slug)} />
    </main>
  );
}
