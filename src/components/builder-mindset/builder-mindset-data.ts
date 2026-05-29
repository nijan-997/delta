export type BuilderMindsetPart = {
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
};

export const BUILDER_MINDSET_HEADING = {
  line1: "Don't Just Learn AI Tools.",
  line2: "Learn the Builder Mindset.",
};

export const BUILDER_MINDSET_PARTS: BuilderMindsetPart[] = [
  {
    title: "Start with a real problem",
    description:
      "We don't start with theory. You'll tackle actual operational challenges from marketing, support, HR, recruiting, and business operations.",
    image: "/Start with a real problem.png",
    backgroundColor: "#F0F8D7",
  },
  {
    title: "See how operators solve it",
    description:
      "Watch the workflow come together step by step. Understand why each tool is used, how the system works, and where AI creates leverage.",
    image: "/See how operators solve it.png",
    backgroundColor: "#F5F1E6",
  },
  {
    title: "Build it yourself",
    description:
      "Now it's your turn. You'll recreate the workflow, make decisions, break things, fix them, and learn by doing.",
    image: "/Build it yourself.png",
    backgroundColor: "#F5F2FF",
  },
  {
    title: "Think like a builder",
    description:
      "The goal isn't learning one workflow. It's learning the mindset that lets you automate hundreds of future problems on your own.",
    image: "/Think like a builder.png",
    backgroundColor: "#FFEDE8",
  },
];
