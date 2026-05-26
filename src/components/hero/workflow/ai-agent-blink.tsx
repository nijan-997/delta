"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/** Eye centers from workflow.svg (viewBox 1204×597) */
const EYES = [
  { left: 41.28, top: 43.83 },
  { left: 43.11, top: 43.83 },
] as const;

const EYE_SIZE = { w: 1.05, h: 1.65 };
const LID_COLOR = "#C2E25B";

export function AiAgentBlink() {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const timers: number[] = [];

    const schedule = () => {
      if (cancelled) return;

      const wait = 2400 + Math.random() * 3200;
      const waitId = window.setTimeout(() => {
        if (cancelled) return;
        setBlink(true);

        const closeId = window.setTimeout(() => {
          if (cancelled) return;
          setBlink(false);
          schedule();
        }, 150);
        timers.push(closeId);
      }, wait);
      timers.push(waitId);
    };

    schedule();

    return () => {
      cancelled = true;
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-[4]" aria-hidden>
      {EYES.map((eye, index) => (
        <motion.span
          key={index}
          className="absolute block origin-center -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            left: `${eye.left}%`,
            top: `${eye.top}%`,
            width: `${EYE_SIZE.w}%`,
            height: `${EYE_SIZE.h}%`,
            backgroundColor: LID_COLOR,
          }}
          initial={false}
          animate={{
            scaleY: blink ? 1 : 0.05,
            opacity: blink ? 1 : 0,
          }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
