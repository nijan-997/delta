"use client";

import {
  motion,
  useAnimationControls,
  type Transition,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiAgentBlink } from "@/components/hero/workflow/ai-agent-blink";

/** Head overlaps bottom of AI Agent card (~6% into the hub) */
const FIGURE_TOP = "38%";
const WORKFLOW = { w: 1147, h: 464 };
const ARTBOARD = { w: 1147, h: 970 };
const WORKFLOW_HEIGHT = `${(WORKFLOW.h / ARTBOARD.h) * 100}%`;
const WORKFLOW_SLIDE_INTERVAL_MS = 8000;

const WORKFLOW_ASSETS = [
  "/workflow.svg",
  "/workflow 2.svg",
  "/workflow 3.svg",
  "/workflow 4.svg",
] as const;

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

const workflowBounce = {
  y: [96, -18, 8, -3, 0] as number[],
  opacity: [0, 1, 1, 1, 1] as number[],
};

const workflowBounceTransition: Transition = {
  duration: 1.15,
  times: [0, 0.48, 0.68, 0.84, 1],
  ease: [
    [0.33, 0, 0.2, 1],
    [0.55, 0, 0.75, 1],
    [0.55, 0, 0.75, 1],
    [0.55, 0, 0.75, 1],
    [0.33, 0, 0.2, 1],
  ],
};

export function HeroWorkflowVisual() {
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState(0);
  const workflowControls = useAnimationControls();
  const activeWorkflow = WORKFLOW_ASSETS[activeWorkflowIndex];

  useEffect(() => {
    let cancelled = false;
    let index = 0;
    const timers: number[] = [];

    WORKFLOW_ASSETS.forEach((src) => {
      const image = new window.Image();
      image.src = src;
    });

    const wait = (duration: number) =>
      new Promise<void>((resolve) => {
        const timerId = window.setTimeout(resolve, duration);
        timers.push(timerId);
      });

    const nextFrame = () =>
      new Promise<void>((resolve) => {
        window.requestAnimationFrame(() => resolve());
      });

    const runWorkflowLoop = async () => {
      await workflowControls.start({
        y: workflowBounce.y,
        opacity: workflowBounce.opacity,
        transition: workflowBounceTransition,
      });

      while (!cancelled) {
        await wait(WORKFLOW_SLIDE_INTERVAL_MS);
        if (cancelled) return;

        await workflowControls.start({
          y: -64,
          opacity: 0,
          transition: { duration: 0.38, ease: [0.4, 0, 0.2, 1] },
        });
        if (cancelled) return;

        index = (index + 1) % WORKFLOW_ASSETS.length;
        workflowControls.set({ y: workflowBounce.y[0], opacity: 0 });
        setActiveWorkflowIndex(index);

        await nextFrame();
        if (cancelled) return;

        await workflowControls.start({
          y: workflowBounce.y,
          opacity: workflowBounce.opacity,
          transition: workflowBounceTransition,
        });
      }
    };

    void runWorkflowLoop();

    return () => {
      cancelled = true;
      timers.forEach((timerId) => window.clearTimeout(timerId));
      workflowControls.stop();
    };
  }, [workflowControls]);

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
          <motion.div
            className="absolute inset-0"
            initial={{ y: workflowBounce.y[0], opacity: 0 }}
            animate={workflowControls}
          >
            <Image
              src={activeWorkflow}
              alt="AI automation workflow connecting Gmail, Slack, Sheets, Notion, Calendar, and Drive"
              fill
              sizes="(max-width: 1440px) 100vw, 1147px"
              className="absolute inset-0 object-contain object-top"
              priority={activeWorkflowIndex === 0}
              draggable={false}
            />

            <AiAgentBlink />
          </motion.div>
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
