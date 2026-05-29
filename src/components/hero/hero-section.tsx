"use client";

import { SiteContainer } from "@/components/layout/site-container";
import { Pressable3dCta } from "@/components/ui/pressable-3d-cta";
import { AiPill } from "@/components/hero/ai-pill";
import { HeroWorkflowVisual } from "@/components/hero/hero-workflow-visual";

export function HeroSection() {
  return (
    <section className="relative w-full pb-8 md:pb-10">
      <SiteContainer className="relative flex flex-col items-center text-center">
        <h1 className="max-w-4xl pt-10 text-balance text-[52px] font-semibold leading-[1.08] tracking-[-0.02em] text-foreground sm:pt-12 md:pt-14 md:text-[76px] lg:pt-16">
          Automate your busywork
          <br />
          with <AiPill />
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">
          Learn practical AI automation without the technical overwhelm.
          <br />
          Focus on what matters.
        </p>

        <div className="mt-8 flex justify-center sm:mt-10">
          <Pressable3dCta />
        </div>

        <HeroWorkflowVisual />
      </SiteContainer>
    </section>
  );
}
