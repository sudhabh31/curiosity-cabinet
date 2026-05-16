/**
 * Item page — composes the 8-section template.
 *
 * V1 layout: hero → flow → stat → history → uses → did-you-know.
 * Cabinet-drop animation (section 7) lands in story 4; quiz
 * contributions live in the data, not on the page.
 *
 * Cosmetic knobs:
 *   - Section gap and page max-width: styles/tokens.css (--cc-section-gap, --cc-page-max)
 *   - Per-item accent: content/items/<slug>.ts → `accent`
 *   - Component-specific tweaks: pass `className` to the section
 */

import { notFound } from "next/navigation";
import { getItem, listItemSlugs } from "@/content/items";
import { ItemHero } from "@/components/ItemHero";
import { JourneyPath } from "@/components/JourneyPath";
import { StatCard } from "@/components/StatCard";
import { HistorySection } from "@/components/HistorySection";
import { UsesGrid } from "@/components/UsesGrid";
import { DidYouKnow } from "@/components/DidYouKnow";
import { SourcesSection } from "@/components/SourcesSection";
import { CabinetDrop } from "@/components/CabinetDrop";
import { BackToScene } from "@/components/BackToScene";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return listItemSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item) return { title: "Not found — Curiosity Cabinet" };
  return {
    title: `${item.name} — Curiosity Cabinet`,
    description: item.hook,
  };
}

export default async function ItemPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item) notFound();

  return (
    <main className="relative z-10 mx-auto w-full max-w-[var(--cc-page-max)] px-5 pb-24 pt-28 sm:px-8 sm:pt-32">
      <BackToScene itemSlug={item.slug} />
      <div className="flex flex-col gap-[var(--cc-section-gap-sm)] sm:gap-[var(--cc-section-gap)]">
        <ItemHero item={item} />
        <JourneyPath item={item} />
        <StatCard item={item} />
        <HistorySection item={item} />
        <UsesGrid item={item} />
        <DidYouKnow item={item} />
        <SourcesSection item={item} />
        <CabinetDrop item={item} />
      </div>
    </main>
  );
}
