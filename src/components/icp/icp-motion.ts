export const icpEase = [0.16, 1, 0.3, 1] as const;

export const icpHeaderVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: icpEase },
  },
};

export const icpGridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
};

export const icpCardVariants = {
  hidden: { opacity: 0, y: 56, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.72, ease: icpEase },
  },
};
