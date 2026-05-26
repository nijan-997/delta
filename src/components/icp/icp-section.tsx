"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SiteContainer } from "@/components/layout/site-container";
import { IcpCtaCard } from "@/components/icp/icp-cta-card";
import { ICP_HEADING, ICP_PROFILES } from "@/components/icp/icp-data";
import { IcpProfileCard } from "@/components/icp/icp-profile-card";
import {
  icpGridVariants,
  icpHeaderVariants,
} from "@/components/icp/icp-motion";

export function IcpSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px -5% 0px" });

  return (
    <section
      ref={ref}
      className="relative z-10 bg-background pb-[var(--section-gap)]"
      aria-labelledby="icp-heading"
    >
      <SiteContainer>
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={icpHeaderVariants}
        >
          <h2
            id="icp-heading"
            className="text-balance text-[2.25rem] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-5xl md:text-[3.25rem]"
          >
            {ICP_HEADING.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
            {ICP_HEADING.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={icpGridVariants}
        >
          {ICP_PROFILES.map((profile) => (
            <IcpProfileCard key={profile.title} profile={profile} />
          ))}
          <IcpCtaCard />
        </motion.div>
      </SiteContainer>
    </section>
  );
}
