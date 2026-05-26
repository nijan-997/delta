import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PrimaryCtaArrowProps = {
  className?: string;
};

export function PrimaryCtaArrow({ className }: PrimaryCtaArrowProps) {
  return (
    <ArrowRight
      className={cn(
        "size-4 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1",
        className,
      )}
      strokeWidth={2.5}
    />
  );
}
