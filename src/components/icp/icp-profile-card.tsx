"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { icpCardVariants } from "@/components/icp/icp-motion";
import { ColorChip } from "@/components/ui/color-chip";
import type { IcpProfile } from "@/components/icp/icp-data";

type IcpProfileCardProps = {
  profile: IcpProfile;
};

export function IcpProfileCard({ profile }: IcpProfileCardProps) {
  return (
    <motion.article
      variants={icpCardVariants}
      className="flex h-full min-h-[340px] flex-col items-center rounded-2xl border border-[#EBEBE3] bg-white px-5 pb-6 pt-8 text-center sm:min-h-[360px] sm:rounded-[20px] sm:px-6 sm:pb-7 sm:pt-9"
    >
      <div className="relative mb-5 h-[120px] w-[120px] shrink-0 sm:mb-6 sm:h-[132px] sm:w-[132px]">
        <Image
          src={profile.avatar}
          alt=""
          fill
          className="object-contain object-bottom"
          sizes="132px"
          draggable={false}
        />
      </div>

      <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl">
        {profile.title}
      </h3>
      <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-muted-foreground sm:mt-2.5 sm:text-[15px]">
        {profile.description}
      </p>

      <div className="mt-auto w-full pt-6 sm:pt-7">
        <div
          className="mb-4 h-px w-full bg-[#E8E8E0] sm:mb-5"
          aria-hidden
        />
        <div className="flex w-full flex-wrap justify-center gap-2">
          {profile.chips.map((chip) => (
            <ColorChip key={chip.label} color={chip.color}>
              {chip.label}
            </ColorChip>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
