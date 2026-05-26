import { cn } from "@/lib/utils";

export const CHIP_COLORS = {
  violet: "#C7BAF3",
  green: "#CCE576",
  orange: "#FEAC9E",
  brown: "#FFEAC7",
} as const;

export type ChipColor = keyof typeof CHIP_COLORS;

type ColorChipProps = {
  children: string;
  color: ChipColor;
  className?: string;
};

export function ColorChip({ children, color, className }: ColorChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-foreground sm:text-[13px]",
        className,
      )}
      style={{ backgroundColor: CHIP_COLORS[color] }}
    >
      {children}
    </span>
  );
}
