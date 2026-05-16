/**
 * Small house icon — paired with CabinetIcon for the top-left home pill.
 *
 * Same construction rules as CabinetIcon: 100x100 viewBox, navy strokes
 * (currentColor so it themes), warm fills.
 */

import { cx } from "@/lib/cx";

interface Props {
  size?: number;
  className?: string;
}

export function HomeIcon({ size = 24, className }: Props) {
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
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      >
        {/* Roof */}
        <path d="M14 50 L50 18 L86 50" fill="#D97757" />
        {/* House body */}
        <path d="M22 50 L22 84 L78 84 L78 50 Z" fill="#FFFCF5" />
        {/* Door */}
        <rect x="42" y="62" width="16" height="22" rx="2" fill="#8AA678" />
        {/* Window */}
        <rect x="28" y="58" width="10" height="10" rx="1.5" fill="#E8B04B" />
        {/* Chimney */}
        <rect x="62" y="22" width="10" height="14" fill="#9C8E7E" />
      </g>
    </svg>
  );
}
