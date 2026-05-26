"use client";

import { motion } from "framer-motion";
import { easeOutSmooth } from "@/lib/motion-ease";

/** Inset between green fill and dashed stroke (reference gap) */
const STROKE_INSET = 10;

export function AiPill() {
  return (
    <motion.span
      initial={{ rotate: 0, opacity: 0, y: 6 }}
      animate={{ rotate: -3, opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeOutSmooth, delay: 0.12 }}
      whileHover={{ scale: 1.05, rotate: -3 }}
      className="relative mx-1 inline-flex align-middle"
    >
      <span
        className="relative inline-flex rounded-full bg-[#CCE576]"
        style={{ padding: STROKE_INSET }}
      >
        <span className="relative inline-flex items-center justify-center rounded-full px-6 py-1 md:px-7 md:py-1.5">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 132 56"
            preserveAspectRatio="none"
            aria-hidden
          >
            <rect
              x="1.5"
              y="1.5"
              width="129"
              height="53"
              rx="26"
              fill="none"
              stroke="#282320"
              strokeWidth="3"
              strokeDasharray="20 16"
              strokeLinecap="butt"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <span className="relative text-[0.72em] font-extrabold leading-none tracking-tight text-foreground md:text-[0.74em]">
            AI
          </span>
        </span>
      </span>
    </motion.span>
  );
}
