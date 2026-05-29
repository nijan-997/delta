"use client";

import { motion } from "framer-motion";
import { icpCardVariants } from "@/components/icp/icp-motion";
import { Pressable3dCta } from "@/components/ui/pressable-3d-cta";

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

      <Pressable3dCta className="mt-8 sm:mt-10" />
    </motion.article>
  );
}
