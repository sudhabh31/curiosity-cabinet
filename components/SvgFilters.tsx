/**
 * Global SVG filter defs.
 *
 * Mounted once in the root layout so every inline SVG illustration can
 * reference filter="url(#handdrawn)" without each Frame shipping its
 * own copy. Hidden via the .svg-defs class in globals.css.
 *
 * Adding a new filter? Append a <filter> here and reference it by id.
 */

export function SvgFilters() {
  return (
    <svg className="svg-defs" aria-hidden="true">
      <defs>
        {/* Hand-drawn jitter — applies a tiny non-uniform displacement so
            strokes and fills feel hand-drawn instead of perfectly
            geometric. scale of 0.7 in viewBox units = ~0.7% offset on a
            100x100 viewBox. Subtle enough that small details survive. */}
        <filter id="handdrawn" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04"
            numOctaves="2"
            seed="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="0.7"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
