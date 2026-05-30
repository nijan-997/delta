"use client";

import { useInView } from "framer-motion";
import type { RefObject } from "react";

/** Viewport band where the element is treated as "centered" (~16% tall, mid-screen). */
export const CENTER_IN_VIEW_MARGIN = "-42% 0px -42% 0px";

export function useCenterInView(
  ref: RefObject<Element | null>,
  options?: { once?: boolean },
) {
  return useInView(ref, {
    once: options?.once ?? false,
    margin: CENTER_IN_VIEW_MARGIN,
  });
}

/** Fires once when the element first reaches the viewport center band. */
export function useCenterInViewOnce(ref: RefObject<Element | null>) {
  const isAtCenter = useCenterInView(ref);
  const hasTriggered = useCenterInView(ref, { once: true });

  return { isAtCenter, hasTriggered };
}
