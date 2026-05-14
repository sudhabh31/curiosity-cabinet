/**
 * Small cabinet icon — used by the corner badge and the drop button.
 *
 * Three little drawers, navy outlines, warm-gray body. Stays
 * recognisable down to 24px.
 */

import { cx } from "@/lib/cx";

interface Props {
  size?: number;
  className?: string;
}

export function CabinetIcon({ size = 24, className }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={cx("", className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="#2A3B4D"
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* Cabinet body */}
        <rect x="14" y="10" width="72" height="80" rx="6" fill="#9C8E7E" />
        {/* Drawers */}
        <rect x="22" y="20" width="56" height="18" rx="3" fill="#FFFCF5" />
        <rect x="22" y="42" width="56" height="18" rx="3" fill="#FFFCF5" />
        <rect x="22" y="64" width="56" height="18" rx="3" fill="#FFFCF5" />
        {/* Drawer pulls */}
        <circle cx="50" cy="29" r="2.5" fill="#2A3B4D" />
        <circle cx="50" cy="51" r="2.5" fill="#2A3B4D" />
        <circle cx="50" cy="73" r="2.5" fill="#2A3B4D" />
      </g>
    </svg>
  );
}
