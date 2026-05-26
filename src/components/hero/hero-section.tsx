"use client";

import { Button } from "@/components/ui/button";
import { PrimaryCtaArrow } from "@/components/ui/primary-cta-arrow";
import { SiteContainer } from "@/components/layout/site-container";
import { AiPill } from "@/components/hero/ai-pill";
import { HeroWorkflowVisual } from "@/components/hero/hero-workflow-visual";

export function HeroSection() {
  return (
    <section className="relative w-full pb-24 md:pb-32 lg:pb-36">
      <SiteContainer className="relative flex flex-col items-center text-center">
        <h1 className="max-w-4xl pt-8 text-balance text-[52px] font-semibold leading-[1.08] tracking-[-0.02em] text-foreground sm:pt-10 md:pt-12 md:text-[76px] lg:pt-14">
          Automate your busywork
          <br />
          with <AiPill />
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">
          Learn practical AI automation without the technical overwhelm.
          <br />
          Focus on what matters.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
          <Button
            size="lg"
            className="group rounded-xl bg-primary px-6 text-primary-foreground hover:bg-primary/90"
          >
            Join the Bootcamp
            <PrimaryCtaArrow />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-xl border-border bg-surface px-6 text-foreground hover:bg-[#f2f2e4]"
          >
            Explore the Community
          </Button>
        </div>

        <HeroWorkflowVisual />
      </SiteContainer>
    </section>
  );
}
