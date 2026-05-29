"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { PrimaryCtaArrow } from "@/components/ui/primary-cta-arrow";
import { cn } from "@/lib/utils";

export const PRESSABLE_3D_CTA_CLASS =
  "group relative inline-flex items-center justify-center gap-2 rounded-xl bg-primary font-semibold text-primary-foreground shadow-[0_5px_0_0_#c42e00] transition-[transform,box-shadow,background-color] duration-150 ease-out hover:translate-y-1 hover:bg-[#e63500] hover:shadow-[0_1px_0_0_#c42e00] active:translate-y-[5px] active:bg-[#d42f00] active:shadow-none";

type Pressable3dCtaProps = {
  href?: string;
  className?: string;
  showArrow?: boolean;
  children?: React.ReactNode;
} & Omit<HTMLMotionProps<"a">, "href" | "children">;

export function Pressable3dCta({
  href = "/join-the-bootcamp",
  className,
  showArrow = true,
  children,
  ...props
}: Pressable3dCtaProps) {
  return (
    <motion.a
      href={href}
      className={cn(
        PRESSABLE_3D_CTA_CLASS,
        "min-h-[52px] px-7 text-base sm:min-h-[54px] sm:px-8 sm:text-[17px]",
        className,
      )}
      {...props}
    >
      {children ?? (
        <>
          Join the Camp <span aria-hidden>🏕️</span>
        </>
      )}
      {showArrow ? <PrimaryCtaArrow /> : null}
    </motion.a>
  );
}
