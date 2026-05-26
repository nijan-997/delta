export type PainPointCard = {
  title: string;
  description: string;
  icon: string;
  color: string;
};

export const PAIN_POINTS_HEADING = {
  title: "The work isn't the work. It's the work around the work.",
  subtitle:
    "Modern operations teams spend most of their day on patterns a workflow could handle. We turn those patterns into systems.",
};

export const PAIN_POINT_CARDS: PainPointCard[] = [
  {
    title: "Repetitive email triage",
    description: "Hours lost each day sorting, tagging, and forwarding inbound.",
    icon: "/Repetitive email triage.svg",
    color: "#FEAC9E",
  },
  {
    title: "Scheduling chaos",
    description: "Threads, reschedules, and timezone math nobody wants to do.",
    icon: "/Scheduling chaos.svg",
    color: "#CCE576",
  },
  {
    title: "Reporting overload",
    description: "Weekly decks that take a day to assemble and nobody reads.",
    icon: "/Reporting overload.svg",
    color: "#C7BAF3",
  },
  {
    title: "Approvals & sign-offs",
    description: "Status-update loops blocking the work that actually matters.",
    icon: "/Approvals & sign-offs.svg",
    color: "#FFEAC7",
  },
  {
    title: "Repetitive comms",
    description: "Same answers, same updates, written from scratch every time.",
    icon: "/Repetitive comms.svg",
    color: "#C7BAF3",
  },
  {
    title: "Manual CRM updates",
    description: "Notes, stages, and follow-ups that drift out of date in hours.",
    icon: "/Manual CRM updates.svg",
    color: "#FEAC9E",
  },
  {
    title: "Disconnected tools",
    description: "Copy-paste between CRMs, sheets, and docs all day long.",
    icon: "/Disconnected tools.svg",
    color: "#FFEAC7",
  },
  {
    title: "Admin-heavy work",
    description: "Operational glue work that quietly consumes your week.",
    icon: "/Admin-heavy work.svg",
    color: "#CCE576",
  },
];
