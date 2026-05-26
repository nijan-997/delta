import { cn } from "@/lib/utils";

export const SITE_MAX_WIDTH_PX = 1440;

type SiteContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header";
};

export function SiteContainer({
  children,
  className,
  as: Tag = "div",
}: SiteContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
