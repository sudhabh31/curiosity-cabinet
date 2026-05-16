/**
 * Fixed home-link pill, top-left of the viewport.
 *
 * Mirrors CabinetBadge top-right. Hidden on the home page itself
 * (would be redundant). Persistent across scene/item/cabinet pages so
 * the user can always escape back to the worlds shelf.
 *
 * Detection: usePathname() on the client; render null when "/".
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon } from "./HomeIcon";

export function HomeBadge() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <div className="fixed left-4 top-4 z-40 sm:left-6 sm:top-6">
      <Link
        href="/"
        aria-label="Home"
        className="inline-flex items-center gap-2 rounded-full border-[2.5px] border-navy bg-offwhite px-3 py-1.5 text-navy shadow-[0_6px_18px_-10px_rgba(42,59,77,0.55)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/20"
      >
        <HomeIcon size={22} />
        <span className="font-display text-sm font-bold">Home</span>
      </Link>
    </div>
  );
}
