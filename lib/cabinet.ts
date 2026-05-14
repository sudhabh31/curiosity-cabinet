/**
 * Curiosity Cabinet — localStorage persistence layer.
 *
 * V1: a single localStorage key holds an array of item slugs that the
 * child has dropped into their cabinet. No accounts, no server sync.
 *
 * The cabinet exposes a useSyncExternalStore-friendly snapshot. Critical
 * detail: getSnapshot MUST return a stable reference between renders if
 * the underlying data hasn't changed — otherwise React detects "infinite
 * snapshot churn" and bails. We keep a cached array at module scope and
 * only swap the reference when storage actually changes.
 */

"use client";

import { useSyncExternalStore } from "react";
import type { Slug } from "@/content/types";

const STORAGE_KEY = "curiosity-cabinet:collected";
const EVENT_NAME = "curiosity-cabinet:change";

const EMPTY: readonly Slug[] = Object.freeze([]);

/** Module-scope cache so getSnapshot returns a stable reference. */
let cached: readonly Slug[] = EMPTY;
let cacheInitialized = false;

function readFromStorage(): readonly Slug[] {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return EMPTY;
    const filtered = parsed.filter((s): s is string => typeof s === "string");
    return filtered.length === 0 ? EMPTY : Object.freeze(filtered);
  } catch {
    return EMPTY;
  }
}

function arraysEqual(a: readonly Slug[], b: readonly Slug[]): boolean {
  if (a === b) return true;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

/** Refresh the cache from storage. Returns true if the reference changed. */
function refreshCache(): boolean {
  const next = readFromStorage();
  if (arraysEqual(cached, next)) return false;
  cached = next;
  return true;
}

function getSnapshot(): readonly Slug[] {
  /* On the very first call (e.g. before any subscribe), prime the cache
     so a fresh page reload reflects existing localStorage. */
  if (!cacheInitialized) {
    cacheInitialized = true;
    refreshCache();
  }
  return cached;
}

function getServerSnapshot(): readonly Slug[] {
  return EMPTY;
}

function writeSlugs(slugs: readonly Slug[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
    refreshCache();
    window.dispatchEvent(new Event(EVENT_NAME));
  } catch {
    /* Storage full / disabled — silently noop. */
  }
}

export function isCollected(slug: Slug): boolean {
  return getSnapshot().includes(slug);
}

export function addToCabinet(slug: Slug): void {
  const current = getSnapshot();
  if (current.includes(slug)) return;
  writeSlugs([...current, slug]);
}

export function removeFromCabinet(slug: Slug): void {
  const current = getSnapshot();
  if (!current.includes(slug)) return;
  writeSlugs(current.filter((s) => s !== slug));
}

/* ---- React hook ---- */

function subscribe(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  const onChange = () => {
    refreshCache();
    cb();
  };
  window.addEventListener(EVENT_NAME, onChange);
  // Cross-tab sync — another tab mutating the same key.
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) onChange();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(EVENT_NAME, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

/**
 * Subscribe a component to the cabinet's contents. Returns a stable
 * snapshot — the same array reference between renders unless storage
 * actually changed.
 */
export function useCabinet(): { slugs: readonly Slug[]; count: number } {
  const slugs = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return { slugs, count: slugs.length };
}
