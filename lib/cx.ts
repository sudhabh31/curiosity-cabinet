/**
 * Tiny className joiner. No dependency on clsx — we only need the
 * "drop falsy values, join with spaces" behaviour.
 */
export function cx(
  ...parts: Array<string | false | null | undefined>
): string {
  return parts.filter(Boolean).join(" ");
}
