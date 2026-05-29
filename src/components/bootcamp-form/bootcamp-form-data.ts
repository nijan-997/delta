export type BootcampChoice = {
  id: string;
  label: string;
  image: string;
};

export type BootcampQuestionStep = {
  step: 1 | 2 | 3;
  question: string;
  choices: BootcampChoice[];
  gridClassName: string;
};

export const BOOTCAMP_STEPS: BootcampQuestionStep[] = [
  {
    step: 1,
    question: "How much time do repetitive tasks take from your week?",
    gridClassName: "grid-cols-2 lg:grid-cols-4",
    choices: [
      {
        id: "less-than-1-hour",
        label: "Less than 1 hour",
        image: "/q1-_Less than 1 hour.png",
      },
      {
        id: "1-5-hours",
        label: "1–5 hours",
        image: "/q1-_1–5 hours.png",
      },
      {
        id: "5-10-hours",
        label: "5–10 hours",
        image: "/q1-_5–10 hours.png",
      },
      {
        id: "more-than-10-hours",
        label: "More than 10 hours",
        image: "/q1-_More than 10 hours.png",
      },
    ],
  },
  {
    step: 2,
    question: "How do you use AI today?",
    gridClassName: "grid-cols-2 lg:grid-cols-3",
    choices: [
      {
        id: "not-really-used",
        label: "I haven't really used it",
        image: "/q2-_I haven't really used it.png",
      },
      {
        id: "tried-chatgpt",
        label: "I've tried ChatGPT a few times",
        image: "/q2-_I've tried ChatGPT a few times.png",
      },
      {
        id: "occasionally",
        label: "I use it occasionally",
        image: "/q2-_I use it occasionally.png",
      },
      {
        id: "regularly",
        label: "I use it regularly",
        image: "/q2-_I use it regularly.png",
      },
      {
        id: "built-workflows",
        label: "I've built a few workflows already",
        image: "/q2-_I've built a few workflows  already.png",
      },
    ],
  },
  {
    step: 3,
    question: "8 weeks from now, what would success look like?",
    gridClassName: "grid-cols-2 lg:grid-cols-3",
    choices: [
      {
        id: "save-hours",
        label: "Save hours every week",
        image: "/q3-_Save hours every week.png",
      },
      {
        id: "run-automations",
        label: "Run automations in my real work",
        image: "/q3-_Run automations in my  real work.png",
      },
      {
        id: "build-confidently",
        label: "Build workflows confidently on my own",
        image: "/q3-_Build workflows confidently  on my own.png",
      },
      {
        id: "team-results",
        label: "Deliver better results for my team",
        image: "/q3-_Deliver better results  for my team.png",
      },
      {
        id: "all-above",
        label: "All of the above",
        image: "/q3-_All of the above.png",
      },
    ],
  },
];

export const BOOTCAMP_CONTACT_COPY = {
  title: "Looks like Delta Camp could be a great fit for you.",
  subtitle:
    "Leave your details below and we'll reach out when the next camp opens.",
  nameLabel: "What should we call you?",
  emailLabel: "Where should we send your camp invitation?",
  phoneLabel: "What's the best number to reach you on?",
  namePlaceholder: "John Doe",
  emailPlaceholder: "john@gmail.com",
  phonePlaceholder: "+94 77 123 4567",
};
