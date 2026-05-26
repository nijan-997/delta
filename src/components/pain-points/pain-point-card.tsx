"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { PainPointCard } from "@/components/pain-points/pain-points-data";

type PainPointCardProps = {
  card: PainPointCard;
};

export function PainPointCardItem({ card }: PainPointCardProps) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className="flex h-[220px] w-full flex-col rounded-2xl p-5 sm:h-[228px] sm:rounded-[18px] sm:p-6"
      style={{ backgroundColor: card.color }}
    >
      <div className="mb-5 flex size-11 shrink-0 items-center justify-center rounded-full bg-white sm:mb-6 sm:size-12">
        <Image
          src={card.icon}
          alt=""
          width={24}
          height={24}
          className="size-5 object-contain sm:size-6"
          aria-hidden
          draggable={false}
        />
      </div>
      <h3 className="text-left text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl">
        {card.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-left text-sm leading-relaxed text-muted-foreground sm:mt-2.5 sm:text-[15px]">
        {card.description}
      </p>
    </motion.article>
  );
}
