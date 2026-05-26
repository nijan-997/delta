/** Smooth ease-out for scroll-driven UI (slow start, gentle finish). */
export function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function mapScroll(
  scrollY: number,
  range: number,
  from: number,
  to: number,
): number {
  const progress = Math.min(Math.max(scrollY / range, 0), 1);
  return from + easeOutCubic(progress) * (to - from);
}
