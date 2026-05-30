"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import type { BootcampChoice } from "@/components/bootcamp-form/bootcamp-form-data";
import { cn } from "@/lib/utils";

type ChoiceCardProps = {
  choice: BootcampChoice;
  selected: boolean;
  onSelect: () => void;
};

export function ChoiceCard({ choice, selected, onSelect }: ChoiceCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "group relative flex h-full min-h-[200px] flex-col overflow-hidden rounded-2xl bg-[#F0ECE7] p-4 text-left transition-[transform,box-shadow,border-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF774F] focus-visible:ring-offset-2 sm:min-h-[220px] sm:rounded-[20px] sm:p-5",
        selected
          ? "border-2 border-primary shadow-sm ring-1 ring-primary/20"
          : "border-2 border-transparent hover:scale-[1.02] hover:shadow-md active:scale-[0.99]",
      )}
    >
      {selected ? (
        <span
          className="absolute right-3 top-3 flex size-7 items-center justify-center sm:right-4 sm:top-4"
          aria-hidden
        >
          <CheckCircle2
            className="size-7 text-primary sm:size-8"
            strokeWidth={2.25}
          />
        </span>
      ) : null}

      <div className="relative mx-auto aspect-square w-full max-w-[140px] flex-1 sm:max-w-[160px]">
        <Image
          src={choice.image}
          alt=""
          fill
          className="object-contain object-bottom"
          sizes="(max-width: 768px) 40vw, 160px"
          draggable={false}
        />
      </div>
      <p className="mt-3 text-center text-sm font-medium leading-snug text-foreground sm:mt-4 sm:text-[15px]">
        {choice.label}
      </p>
    </button>
  );
}
