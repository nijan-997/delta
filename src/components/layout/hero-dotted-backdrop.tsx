/** Full-bleed dot grid layer — parent must be `position: relative` + `isolate`. */
export function HeroDottedBackdrop() {
  return (
    <div
      className="hero-dotted-canvas pointer-events-none absolute inset-0 z-0"
      aria-hidden
    />
  );
}
