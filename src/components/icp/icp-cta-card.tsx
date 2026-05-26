"use client";

import { motion } from "framer-motion";
import { icpCardVariants } from "@/components/icp/icp-motion";
import { PrimaryCtaArrow } from "@/components/ui/primary-cta-arrow";

export function IcpCtaCard() {
  return (
    <motion.article
      variants={icpCardVariants}
      className="flex h-full min-h-[340px] flex-col items-start justify-between rounded-2xl bg-[#111111] p-6 text-left sm:min-h-[360px] sm:rounded-[20px] sm:p-8"
    >
      <div>
        <h3 className="text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">
          Not sure where you fit?
        </h3>
        <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-[15px]">
          15-minute call to map your top three repetitive workflows.
        </p>
      </div>

      <a
        href="#join"
        className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:mt-10 sm:px-6 sm:text-[15px]"
      >
        Join the Bootcamp
        <PrimaryCtaArrow />
      </a>
    </motion.article>
  );
}
