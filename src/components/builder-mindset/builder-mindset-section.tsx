"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SiteContainer } from "@/components/layout/site-container";
import { BuilderMindsetRow } from "@/components/builder-mindset/builder-mindset-row";
import {
  BUILDER_MINDSET_HEADING,
  BUILDER_MINDSET_PARTS,
} from "@/components/builder-mindset/builder-mindset-data";
import { easeOutProminent } from "@/lib/motion-ease";

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeOutProminent },
  },
};

export function BuilderMindsetSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      ref={ref}
      className="relative z-10 bg-background"
      aria-labelledby="builder-mindset-heading"
    >
      <SiteContainer>
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <h2
            id="builder-mindset-heading"
            className="text-balance text-[2.25rem] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-5xl md:text-[3.25rem]"
          >
            {BUILDER_MINDSET_HEADING.line1}
            <br />
            {BUILDER_MINDSET_HEADING.line2}
          </h2>
        </motion.div>

        <div className="mt-14 flex flex-col gap-16 sm:mt-16 sm:gap-20 md:mt-20 md:gap-24 lg:gap-28">
          {BUILDER_MINDSET_PARTS.map((part, index) => (
            <BuilderMindsetRow
              key={part.title}
              part={part}
              reverse={index % 2 === 1}
              eager={index === 0}
            />
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
