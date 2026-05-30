"use client";

import { motion, type Transition } from "framer-motion";
import Image from "next/image";
import { AiAgentBlink } from "@/components/hero/workflow/ai-agent-blink";

/** Head overlaps bottom of AI Agent card (~6% into the hub) */
const FIGURE_TOP = "38%";
const WORKFLOW = { w: 1147, h: 464 };
const ARTBOARD = { w: 1147, h: 970 };
const WORKFLOW_HEIGHT = `${(WORKFLOW.h / ARTBOARD.h) * 100}%`;

const figureBounce = {
  y: [72, -14, 9, -4, 1, 0] as number[],
  opacity: [0, 1, 1, 1, 1, 1] as number[],
};

const figureBounceTransition: Transition = {
  duration: 1.25,
  times: [0, 0.42, 0.58, 0.74, 0.88, 1],
  ease: [
    [0.33, 0, 0.2, 1],
    [0.55, 0, 0.75, 1],
    [0.55, 0, 0.75, 1],
    [0.55, 0, 0.75, 1],
    [0.55, 0, 0.75, 1],
    [0.33, 0, 0.2, 1],
  ],
  delay: 0.15,
};

export function HeroWorkflowVisual() {
  return (
    <div className="relative mt-12 w-full max-w-[1147px] sm:mt-14 md:mt-16">
      <div
        className="relative mx-auto w-full"
        style={{ aspectRatio: `${ARTBOARD.w} / ${ARTBOARD.h}` }}
      >
        <div
          className="absolute inset-x-0 top-0 z-[3]"
          style={{ height: WORKFLOW_HEIGHT }}
        >
          <Image
            src="/workflow.svg"
            alt="AI automation workflow connecting Gmail, Slack, Sheets, Notion, Calendar, and Drive"
            fill
            sizes="(max-width: 1440px) 100vw, 1147px"
            className="absolute inset-0 object-contain object-top"
            priority
            draggable={false}
          />

          <AiAgentBlink />
        </div>

        <motion.div
          className="pointer-events-none absolute left-1/2 z-[5] w-[80%] max-w-[790px] -translate-x-1/2 sm:w-[74%] md:w-[69%]"
          style={{ top: FIGURE_TOP }}
          initial={{ y: figureBounce.y[0], opacity: 0 }}
          animate={{ y: figureBounce.y, opacity: figureBounce.opacity }}
          transition={figureBounceTransition}
        >
          <Image
            src="/guy under flow.png"
            alt="Professional using a laptop with AI automation"
            width={1120}
            height={900}
            className="h-auto w-full object-contain object-bottom"
            priority
            draggable={false}
          />
        </motion.div>
      </div>
    </div>
  );
}
