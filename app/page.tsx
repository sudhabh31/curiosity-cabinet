/**
 * Home — the curated shelf of worlds.
 *
 * Hero headline + a horizontal shelf (vertical stack on mobile) of
 * world cards: Breakfast Table is live, the others are coming-soon
 * placeholders. Progress reads from localStorage via useCabinet.
 */

import { worlds } from "@/content/worlds";
import { WorldCard } from "@/components/WorldCard";
import {
  BreakfastTablePreview,
  SchoolBagPreview,
  BedroomPreview,
} from "@/components/illustrations/worlds";

function previewFor(slug: string) {
  switch (slug) {
    case "breakfast-table":
      return <BreakfastTablePreview className="h-full w-full" />;
    case "school-bag":
      return <SchoolBagPreview className="h-full w-full" />;
    case "bedroom":
      return <BedroomPreview className="h-full w-full" />;
    default:
      return null;
  }
}

export default function Home() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-5xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
      <header className="text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-warm-gray">
          Curiosity Cabinet
        </p>
        <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-navy sm:text-6xl">
          Have you ever wondered where things come from?
        </h1>
        <p className="mt-6 mx-auto max-w-xl font-body text-lg leading-relaxed text-charcoal">
          A journey through the stories behind ordinary objects.
        </p>
      </header>

      <section
        aria-label="Worlds to explore"
        className="mt-14 grid gap-6 sm:mt-20 sm:grid-cols-3 sm:gap-7"
      >
        {worlds.map((world) => (
          <WorldCard
            key={world.slug}
            world={world}
            preview={previewFor(world.slug)}
          />
        ))}
      </section>
    </main>
  );
}
