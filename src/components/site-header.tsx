"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SiteContainer } from "@/components/layout/site-container";
import { PRESSABLE_3D_CTA_CLASS } from "@/components/ui/pressable-3d-cta";
import { PrimaryCtaArrow } from "@/components/ui/primary-cta-arrow";
import { cn } from "@/lib/utils";
import { mapScroll } from "@/lib/scroll-ease";

const SCROLL_RANGE = 560;
const HEADER_RADIUS_START = 20;
const HEADER_RADIUS_END = 32;
const BTN_RADIUS_START = 12;
const BTN_RADIUS_END = 22;

export function SiteHeader() {
  const { scrollY } = useScroll();

  const headerBorderRadius = useTransform(scrollY, (y) => {
    const r = mapScroll(y, SCROLL_RANGE, HEADER_RADIUS_START, HEADER_RADIUS_END);
    return `${r}px`;
  });

  const buttonBorderRadius = useTransform(scrollY, (y) => {
    const r = mapScroll(y, SCROLL_RANGE, BTN_RADIUS_START, BTN_RADIUS_END);
    return `${r}px`;
  });

  return (
    <header className="sticky top-0 z-50 bg-transparent pt-3 md:pt-4">
      <SiteContainer>
        <motion.div
          className="flex items-center justify-between gap-4 bg-[#111111] px-4 py-3 md:px-5 md:py-3.5"
          style={{
            borderRadius: headerBorderRadius,
            willChange: "border-radius",
          }}
        >
          <Link href="/" className="flex min-w-0 items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Delta"
              width={132}
              height={28}
              className="h-7 w-auto shrink-0"
              priority
              draggable={false}
            />
          </Link>

          <motion.a
            href="/join-the-bootcamp"
            className={cn(
              PRESSABLE_3D_CTA_CLASS,
              "min-h-[44px] shrink-0 px-4 py-2.5 text-sm sm:min-h-[46px] md:px-5 md:text-[15px]",
            )}
            style={{
              borderRadius: buttonBorderRadius,
              willChange: "border-radius, transform, box-shadow",
            }}
          >
            Join the Camp <span aria-hidden>🏕️</span>
            <PrimaryCtaArrow />
          </motion.a>
        </motion.div>
      </SiteContainer>
    </header>
  );
}
