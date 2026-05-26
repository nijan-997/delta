"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SiteContainer } from "@/components/layout/site-container";
import { easeOutSmooth } from "@/lib/motion-ease";
import { PainPointCardItem } from "@/components/pain-points/pain-point-card";
import {
  PAIN_POINT_CARDS,
  PAIN_POINTS_HEADING,
} from "@/components/pain-points/pain-points-data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutSmooth },
  },
};

export function PainPointsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      ref={ref}
      className="relative z-10 bg-background pb-[var(--section-gap-tight)]"
      aria-labelledby="pain-points-heading"
    >
      <SiteContainer>
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <h2
            id="pain-points-heading"
            className="text-balance text-[2.25rem] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-5xl md:text-[3.25rem]"
          >
            {PAIN_POINTS_HEADING.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
            {PAIN_POINTS_HEADING.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {PAIN_POINT_CARDS.map((card) => (
            <PainPointCardItem key={card.title} card={card} />
          ))}
        </motion.div>
      </SiteContainer>
    </section>
  );
}
