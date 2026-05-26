import type { ChipColor } from "@/components/ui/color-chip";

export type IcpProfile = {
  title: string;
  description: string;
  avatar: string;
  chips: { label: string; color: ChipColor }[];
};

export const ICP_HEADING = {
  title: "Built for the people who keep the work running.",
  subtitle:
    "Whether you run ops at a startup or a 100-person team, Delta Framework is designed for operators who want practical leverage. Not theory.",
};

export const ICP_PROFILES: IcpProfile[] = [
  {
    title: "Operations teams",
    description: "Ship end-to-end ops systems — from intake to reporting.",
    avatar: "/Operations teams.png",
    chips: [
      { label: "Status reporting", color: "violet" },
      { label: "Inbound triage", color: "green" },
      { label: "Cross-tool sync", color: "brown" },
    ],
  },
  {
    title: "Customer support ops",
    description: "Resolve faster with AI drafting, routing, and post-ticket loops.",
    avatar: "/Customer support ops.png",
    chips: [
      { label: "Reply drafts", color: "green" },
      { label: "Cross-tool sync", color: "orange" },
      { label: "Status reporting", color: "violet" },
    ],
  },
  {
    title: "Marketing operations",
    description: "Automate briefs, campaign QA, and pipeline reporting.",
    avatar: "/Marketing operations.png",
    chips: [
      { label: "Attribution rollups", color: "brown" },
      { label: "Brief generation", color: "violet" },
      { label: "Asset QA", color: "green" },
    ],
  },
  {
    title: "HR & recruitment ops",
    description: "Screen, schedule, and onboard with calm, structured workflows.",
    avatar: "/HR & recruitment ops.png",
    chips: [
      { label: "Interview scheduling", color: "orange" },
      { label: "Screening", color: "green" },
      { label: "Onboarding", color: "violet" },
    ],
  },
  {
    title: "Startup operators",
    description: "Stay lean, let workflows handle the glue work your team can't.",
    avatar: "/Startup operators.png",
    chips: [
      { label: "Founder inbox", color: "green" },
      { label: "Hiring loops", color: "violet" },
      { label: "Investor updates", color: "brown" },
    ],
  },
];
