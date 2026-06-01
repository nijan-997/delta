"use client";

import { SiteContainer } from "@/components/layout/site-container";
import { Pressable3dCta } from "@/components/ui/pressable-3d-cta";
import { AiPill } from "@/components/hero/ai-pill";
import { HeroWorkflowVisual } from "@/components/hero/hero-workflow-visual";

export function HeroSection() {
  return (
    <section className="relative w-full">
      <SiteContainer>
        <div className="hero-dotted-canvas relative isolate overflow-hidden rounded-[24px] border border-[#E1DACD] bg-[#F0EDE7] px-4 pt-10 text-center sm:rounded-[28px] sm:px-6 sm:pt-12 md:px-8 md:pt-14 lg:pt-16">
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="max-w-4xl text-balance text-[44px] font-semibold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-[52px] md:text-[76px]">
              Become a Top 1% <AiPill /> Automation Builder
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
              Learn to build AI workflows, assistants, and automations in 8 weeks
              <span className="block font-semibold text-foreground/70">
                (no coding skills required)
              </span>
            </p>

            <div className="mt-7 flex justify-center sm:mt-8">
              <Pressable3dCta />
            </div>

            <HeroWorkflowVisual />
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
