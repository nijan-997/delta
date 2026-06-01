"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SiteContainer } from "@/components/layout/site-container";
import { Pressable3dCta } from "@/components/ui/pressable-3d-cta";
import { easeOutProminent } from "@/lib/motion-ease";

const sectionVariants = {
  hidden: { opacity: 0, y: 42, scale: 0.975 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easeOutProminent,
      staggerChildren: 0.12,
      delayChildren: 0.16,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: easeOutProminent },
  },
};

const backgroundVariants = {
  hidden: { scale: 1.07 },
  visible: {
    scale: 1,
    transition: { duration: 1.2, ease: easeOutProminent },
  },
};

export function FinalCtaSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section ref={ref} className="relative z-10 bg-background">
      <SiteContainer>
        <motion.div
          className="relative isolate aspect-[4/3] min-h-[310px] w-full overflow-hidden rounded-[22px] sm:aspect-video sm:min-h-[360px] sm:rounded-[28px] md:aspect-[1313/739] md:min-h-[420px] lg:min-h-0"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-bottom sm:bg-center"
            style={{ backgroundImage: "url('/final cta bg.png')" }}
            variants={backgroundVariants}
            aria-hidden
          />
          <div
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/45 via-black/18 to-transparent"
            aria-hidden
          />

          <div className="relative z-10 flex h-full flex-col items-center px-5 pt-12 text-center sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28">
            <motion.h2
              className="max-w-[22rem] text-balance text-[1.35rem] font-semibold leading-[1.12] tracking-normal text-white sm:max-w-2xl sm:text-4xl md:text-[2.75rem]"
              variants={contentVariants}
            >
              Gather Around The Campfire.
              <br />
              Make Work Run Itself.
            </motion.h2>

            <motion.div className="mt-7 sm:mt-9" variants={contentVariants}>
              <Pressable3dCta />
            </motion.div>
          </div>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
