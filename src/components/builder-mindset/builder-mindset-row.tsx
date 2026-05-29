"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import type { BuilderMindsetPart } from "@/components/builder-mindset/builder-mindset-data";
import { useCenterInViewOnce } from "@/lib/use-center-in-view";
import { easeOutProminent } from "@/lib/motion-ease";

const rowVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.22, delayChildren: 0.05 },
  },
};

const assetVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: easeOutProminent },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOutProminent },
  },
};

type BuilderMindsetRowProps = {
  part: BuilderMindsetPart;
  reverse?: boolean;
};

export function BuilderMindsetRow({ part, reverse = false }: BuilderMindsetRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { hasTriggered } = useCenterInViewOnce(ref);

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20"
      initial="hidden"
      animate={hasTriggered ? "visible" : "hidden"}
      variants={rowVariants}
    >
      <motion.div
        variants={assetVariants}
        className={[
          "relative aspect-square w-full overflow-hidden rounded-[28px] sm:rounded-[32px]",
          reverse ? "lg:order-2" : "lg:order-1",
        ].join(" ")}
        style={{ backgroundColor: part.backgroundColor }}
      >
        <Image
          src={part.image}
          alt=""
          fill
          className="object-contain p-6 sm:p-8 md:p-10"
          sizes="(max-width: 1024px) 100vw, 50vw"
          draggable={false}
        />
      </motion.div>

      <motion.div
        variants={textVariants}
        className={[
          "flex flex-col justify-center px-1 sm:px-2",
          reverse ? "lg:order-1 lg:pr-4 xl:pr-8" : "lg:order-2 lg:pl-4 xl:pl-8",
        ].join(" ")}
      >
        <h3 className="text-balance text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.02em] text-foreground sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem]">
          {part.title}
        </h3>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg sm:leading-relaxed">
          {part.description}
        </p>
      </motion.div>
    </motion.div>
  );
}
